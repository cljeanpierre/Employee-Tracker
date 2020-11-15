DROP DATABASE IF EXISTS company_profilesDB;
CREATE database company_profilesDB;

USE company_profilesDB;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  department_name VARCHAR(30) NULL,
);

CREATE TABLE department_role (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
);

SELECT * FROM department;
SELECT * FROM department_role;
SELECT * FROM employee;