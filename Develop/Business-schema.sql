DROP DATABASE IF EXISTS company_profilesDB;
CREATE database company_profilesDB;

USE company_profilesDB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  department_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department_role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM department_role;
SELECT * FROM employee;