package xyz.yingshaoxo.javabackend.dataStructure;

import lombok.Data;

@Data
public class MyFile {
    public Long id;
    public String fileName;
    public String filePath;
    public String hash;
}