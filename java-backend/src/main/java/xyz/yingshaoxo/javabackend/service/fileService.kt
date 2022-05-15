package xyz.yingshaoxo.javabackend.service

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper
import com.google.protobuf.ByteString
import io.grpc.stub.StreamObserver
import net.devh.boot.grpc.server.service.GrpcService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Repository
import xyz.yingshaoxo.fileServicePlatform.grpc.main.*
import xyz.yingshaoxo.javabackend.dataMap.MyFileMapper
import xyz.yingshaoxo.javabackend.dataStructure.MyFile

fun getFileStoragePath(): String? {
    return System.getProperty("java.io.tmpdir")
}

fun saveAFile(fileName: String, fileContent: ByteArray): Pair<Boolean, String> {
    val fileStoragePath = getFileStoragePath()
    if (fileStoragePath == null) {
        return Pair(false, "")
    }
    val file = java.io.File(fileStoragePath, fileName)
    if (file.exists()) {
        return Pair(true, file.absolutePath)
    }
    val fileOutputStream = java.io.FileOutputStream(file)
    fileOutputStream.write(fileContent)
    fileOutputStream.close()
    return Pair(true, file.absolutePath)
}

fun deleteAFile(fileName: String): Boolean {
    val fileStoragePath = getFileStoragePath()
    if (fileStoragePath == null) {
        return false
    }
    val file = java.io.File(fileStoragePath, fileName)
    if (!file.exists()) {
        return false
    }
    return file.delete()
}

fun getFileByteStringFromPath(filePath: String): ByteString {
    val file = java.io.File(filePath)
    val fileInputStream = java.io.FileInputStream(file)
    val fileByteArray = ByteArray(file.length().toInt())
    fileInputStream.read(fileByteArray)
    fileInputStream.close()
    return ByteString.copyFrom(fileByteArray)
}

@GrpcService
class GrpcServerService : MyServiceGrpc.MyServiceImplBase() {
    @Autowired(required = true)
    lateinit var myFileMapper: MyFileMapper;

    override fun sayHello(req: HelloRequest, responseObserver: StreamObserver<HelloReply?>) {
        val reply = HelloReply.newBuilder().setMessage("yingshaoxo: Hello ==> " + req.name).build()
        responseObserver.onNext(reply)
        responseObserver.onCompleted()
    }

    override fun uploadFile(request: UploadRequest?, responseObserver: StreamObserver<UploadResponse>?) {
        var reply = UploadResponse.newBuilder()
            .setSuccess(false)
            .setUrl("")
            .build()

        var file = request?.file;
        var fileName = request?.fileName;
        if (file == null || fileName == null) {
            responseObserver?.onNext(reply)
            responseObserver?.onCompleted()
            return
        } else {
            var result = saveAFile(fileName, file.toByteArray());
            responseObserver?.onNext(
                UploadResponse.newBuilder().setSuccess(result.first).setUrl(
                    result.second
                ).build()
            )
            responseObserver?.onCompleted()

            if (result.first) {
                var fileObject = MyFile()
                fileObject.filePath = result.second
                fileObject.fileName = fileName
                myFileMapper.insert(fileObject)
            }

            return
        }

    }

    override fun downloadFile(request: DownloadRequest?, responseObserver: StreamObserver<DownloadResponse>?) {
        var reply = DownloadResponse.newBuilder()

        if (request?.fileName != null) {
            var resultList = myFileMapper.selectByMap(
                mapOf("file_name" to request?.fileName)
            )
            if (resultList.isEmpty()) {
            } else {
                reply.fileName = request?.fileName
                reply.file = getFileByteStringFromPath(resultList[0].filePath)
            }
        }

        responseObserver?.onNext(
            reply.build()
        )
        responseObserver?.onCompleted()
    }

    override fun deleteFile(request: DeleteRequest?, responseObserver: StreamObserver<DeleteResponse>?) {
        var reply = DeleteResponse.newBuilder()

        var fileName = request?.fileName
        if (fileName != null) {
            var theFilterMap = mapOf("file_name" to request?.fileName)
            var selectedFiles = myFileMapper.selectByMap(
                theFilterMap
            )
            if (selectedFiles.isNotEmpty()) {
                var selectFile = selectedFiles[0]

                myFileMapper.deleteByMap(
                    theFilterMap
                )

                deleteAFile(selectFile.filePath)

                reply.setSuccess(true)
                responseObserver?.onNext(
                    reply.build()
                )
                responseObserver?.onCompleted()

                return
            }
        }

        reply.setSuccess(false)
        responseObserver?.onNext(
            reply.build()
        )
        responseObserver?.onCompleted()
    }

    override fun getFileList(request: GetFileListRequest?, responseObserver: StreamObserver<GetFileListResponse>?) {
        var reply = GetFileListResponse.newBuilder()

        var myFiles = myFileMapper.selectList(null).map { it.fileName }
        reply.addAllFileName(
            myFiles
        )

        responseObserver?.onNext(
            reply.build()
        )
        responseObserver?.onCompleted()
    }
}