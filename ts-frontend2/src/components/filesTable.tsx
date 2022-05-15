import { Table, Tag, Space } from 'antd';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, Key } from 'react';

export interface filesTableParameters {
    data: any[];
    deleteAFile: (fileName: string) => void;
    downloadAFile: (fileName: string) => void;
}

const MyTable = (props: filesTableParameters) => {
    const { data } = props;

    const columns = [
        {
            title: 'File Name',
            dataIndex: 'fileName',
            key: 'fileName',
            // width: '300px',
            render: (text: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined) => <a
                onClick={() => {
                    props.downloadAFile(text as string);
                }}
            >{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            width: '150px',
            align: 'center' as const,
            render: (text: any, record: any) => (
                <Space size="middle">
                    <a
                        href='#'
                        onClick={() => {
                            props.deleteAFile(record.fileName)
                        }}
                    >Delete</a>
                </Space>
            ),
        },
    ];


    return (<Table
        columns={columns} dataSource={data} />)
}

export default MyTable;