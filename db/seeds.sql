INSERT INTO department (id, name)
VALUES
(1, 'Management'),
(2, 'Sales'),
(3, 'Engineering'),
(4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'CEO', 100000, 1),
(2, 'Manager', 70000, 1),
(3, 'Sales person', 55000, 2),
(4, 'Enginner', 60000, 3),
(5, "Lawyer", 65000, 4);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES
(1, 'Jan', 'Miller', 1),
(2, 'Nicki', 'Miser', 2),
(3, 'Jack', 'Marseau', 2),
(4, 'Harvey', 'Schwartz', 5),
(5, 'Austin', 'Miller', 3),
(6, 'Ali', 'Herrnandez', 3),
(7, 'Noah', 'Ali', 4),
(8, 'Moses', 'Malone', 4),
(9, 'Ivonne', 'Ortegga', 3);