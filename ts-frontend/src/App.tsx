import React, { useEffect, useState } from 'react';
import './App.less';
import { Button, Divider, message, Modal } from 'antd';
import { CloudUploadOutlined, InboxOutlined } from '@ant-design/icons';

import FilesTable from './components/filesTable';

import * as myService from './generated_grpc/fileServicePlatform_pb_service'
import * as grpcInputOrOutPut from './generated_grpc/fileServicePlatform_pb'
import { HelloReply } from './generated_grpc/fileServicePlatform_pb';
import Dragger from 'antd/lib/upload/Dragger';
import { MyServiceClient } from './generated_grpc/fileServicePlatform_grpc_pb';

const client = new myService.MyServiceClient("http://127.0.0.1:40001");


const deleteAFile = (fileName: string, functionAfterDelete: () => void) => {
  const request = new grpcInputOrOutPut.DeleteRequest();
  request.setFilename(fileName);
  client.deleteFile(request, (err: any, response: grpcInputOrOutPut.DeleteResponse | null) => {
    if (response?.getSuccess()) {
      message.success("delete success");
      functionAfterDelete()
    } else {
      message.error("delete failed");
    }
  });
};

const downloadAfileFromUint8Array = (fileName: string, fileContent: Uint8Array) => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([fileContent], { type: 'application/octet-stream' }));
  a.download = fileName;
  a.click();
};

const downloadAFile = (fileName: string) => {
  const request = new grpcInputOrOutPut.DownloadRequest();
  request.setFilename(fileName);
  client.downloadFile(request, (err: any, response: grpcInputOrOutPut.DownloadResponse | null) => {
    if (response?.getFilename() === fileName) {
      const file = response?.getFile_asU8()
      downloadAfileFromUint8Array(fileName, file)
      message.success("download success");
    } else {
      message.error("download failed");
    }
  });
};

const MyUploadDialog = (props: {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  refreshFileList: () => void;
}) => {
  const reactAntDesignUploadFileToUint8Array = (file: File) => {
    return new Promise<Uint8Array>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      };
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      reader.readAsArrayBuffer(file);
    });
  };

  const draggerProps = {
    name: 'file',
    multiple: true,
    maxCount: 1,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: { file: { name?: any; status?: any; }; fileList: any; }) {
      // const { status } = info.file;
      // if (status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      // if (status === 'done') {
      //   message.success(`${info.file.name} file uploaded successfully.`);
      // } else if (status === 'error') {
      //   message.error(`${info.file.name} file upload failed.`);
      // }
    },
    onDrop(e: { dataTransfer: { files: any; }; }) {
      const file = e.dataTransfer.files[0];
      console.log(file)

      const uploadRequest = new grpcInputOrOutPut.UploadRequest();
      reactAntDesignUploadFileToUint8Array(e.dataTransfer.files[0]).then((fileContent: Uint8Array) => {
        uploadRequest.setFile(fileContent);
        uploadRequest.setFilename(file.name);
        client.uploadFile(uploadRequest, (err: any, response: grpcInputOrOutPut.UploadResponse | null) => {
          if (err) {
            console.log(err);
          }
          if (response) {
            console.log(response);
            if (response?.getSuccess()) {
              message.success('Upload success');
              props.refreshFileList();
            }
          }
        })
      });
      // console.log('Dropped files', e.dataTransfer.files[0]);
    },
  };

  return (
    <Modal title="Upload A File" visible={props.visible} onOk={props.onOk} onCancel={props.onCancel}>
      <div className='uploadDialog'>
        <Dragger {...draggerProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag a file to this area to upload</p>
          <p className="ant-upload-hint"> </p>
        </Dragger>
      </div>
    </Modal>
  )
}

const TopUploadBar = (props: {
  refreshFileList: () => void;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='uploadBar'>
      <div className='rightArea'>
        <Button
          icon={<CloudUploadOutlined />}
          onClick={() => {
            console.log('upload');
            setVisible(true);
          }}
        >Upload</Button>
        <MyUploadDialog
          visible={visible}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
          refreshFileList={props.refreshFileList}
        ></MyUploadDialog>
      </div>
    </div>
  )
}

const FileContainer = () => {
  const [data, setData] = useState(
    [
      {
        fileName: '',
      },
    ]
  );

  const refreshFileList = () => {
    const getFileListRequest = new grpcInputOrOutPut.GetFileListRequest();
    client.getFileList(getFileListRequest, (err: any, response: grpcInputOrOutPut.GetFileListResponse | null) => {
      const theFileList = response?.getFilenameList()
      if (theFileList) {
        setData(
          theFileList?.map((fileName: string) => {
            return {
              key: fileName,
              fileName: fileName,
            }
          })
        );
      }
    });
  }

  useEffect(() => {
    // const helloRequest = new grpcInputOrOutPut.HelloRequest()
    // helloRequest.setName("yingshaoxo");
    // client.sayHello(helloRequest, (err: any, response: HelloReply | null) => {
    //   console.log(response?.getMessage());
    // });
    refreshFileList()
  }, [])

  return (
    // <div>yingshaoxo</div>
    <div
      className="mainContainer"
    >
      <TopUploadBar
        refreshFileList={refreshFileList}
      ></TopUploadBar>
      <div className='divider'
      />
      <FilesTable
        data={data}
        deleteAFile={(fileName: string) => { deleteAFile(fileName, refreshFileList) }}
        downloadAFile={(fileName: string) => { downloadAFile(fileName) }}
      ></FilesTable>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="App">
      <FileContainer></FileContainer>
      {/* <p>You clicked {count} times</p>
      <Button type="primary"
        onClick={() => setCount(count + 1)}
      >Click me</Button> */}
    </div>
  );
}

export default App;