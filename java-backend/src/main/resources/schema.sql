DROP TABLE IF EXISTS my_file;

CREATE TABLE my_file
(
    id BIGINT NOT NULL,
    file_name VARCHAR NULL DEFAULT NULL,
    file_path VARCHAR NULL DEFAULT NULL,
    hash VARCHAR NULL DEFAULT NULL
);