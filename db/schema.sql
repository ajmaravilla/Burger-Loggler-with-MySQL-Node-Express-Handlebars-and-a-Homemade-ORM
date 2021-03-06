 DROP DATABASE IF EXISTS burgers_db;
 CREATE database burgers_db;

 USE burgers_db;

 CREATE TABLE burgers (
   id INT AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR(100) NULL,
   devoured BOOLEAN NOT NULL DEFAULT 0,
   date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (id)
 );