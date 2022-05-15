package xyz.yingshaoxo.javabackend;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan("xyz.yingshaoxo.javabackend.dataMap")
@SpringBootApplication
public class JavaBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(JavaBackendApplication.class, args);
    }

}
