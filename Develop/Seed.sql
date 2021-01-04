INSERT INTO department (department_name)
VALUES ("Finance"), ("Technology"), ("Human Resources"), ("Marketing");

INSERT INTO employee_role (title, salary, department_id)
VALUES 
("Research Analyst","90000", "12"), 
("Treasurer","180000", "32"),  
("Personnel Manager","65000", "5"), 
("Recruiter","45000", "8");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Selam","Harding", "7", "16"),
("Mandy","Brown", "19", "22"),
("John","Whitaker", "37", "14"),
("Matthieu","Simmons", "48", "17");