INSERT INTO department (id, name)
VALUES
(1, 'Mangement'),
(2, 'Sales'),
(3, 'Engineering'),
(4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'CEO', 100,000, 1),
(2, 'Manager', 70,000, 1),
(3, 'Sales person', 55,000, 2),
(4, 'Enginner', 60,000, 3),
(5, "Lawyer", 65,000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'Jan', 'Miller', 1, NULL),
(2, 'Nicki', 'Miser', 2, NULL),
(3, 'Jack', 'Marseau', 2, NULL),
(4, 'Harvey', 'Schwartz', 5, NULL),
(5, 'Austin', 'Miller', 3, 2),
(6, 'Ali', 'Herrnandez', 3, 2),
(7, 'Noah', 'Ali', 4, 3),
(8, 'Moses', 'Malone', 4, 3),
(9, 'Ivonne', 'Ortegga', 3, 2);