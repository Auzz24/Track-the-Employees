const inquirer = require ("inquirer");
const db = require("./db/connections");
require ('console.table');

const questions = [ 
{
        type: 'list',
        name: 'usage',
        message: 'What would you like to do? (Required)',
        choices: [
            'Add Depatment?',
            'Add Role?', 
            'Add Employee?',
            'View departments?',
            'View all roles?',
            'View all employees?',
            'Update an employee role?',
            'exit?'
        ],
        },

]

const start = () =>{
    return inquirer.prompt(questions)
};

const addDepartment = () =>{
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of your department?',
            }
        ]
    ).then((answer)=>{
        const query = `INSERT INTO department (name) VALUES ("${answer.departmentName}");`;
        db.query(query,(errr, data)=>{
            console.log('department has been logged');
            mainMenu();
        })
    }
    )
    ;
};

const addRole = () =>{
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'roleTitle',
                message: 'What is the title of the new role?',
            }
        ]
    ).then((answer)=>{
        const query = `INSERT INTO role (title) VALUES ("${answer.roleTitle}");`;
        db.query(query,()=>{
            console.log('role has been logged')
            mainMenu();
        })
    }
    )
    ;
};

const addEmployee = () =>{
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the first name of your new employee?',
            }
        ]
    ).then((answer)=>{
        const query = `INSERT INTO employee (first_name) VALUES ("${answer.employeeName}");`;
        db.query(query,()=>{
            console.log('employee has been logged')
            mainMenu();
        })
    }
    )
    ;
};

const viewDepartments = () => {
    const query = `SELECT * FROM department;`;
        db.query(query,(err, data)=>{
            console.table(data)
            mainMenu()
        })
};

const viewAllRoles = () => {
    const query = `SELECT * FROM role;`;
    db.query(query,(err,data)=>{
        console.table(data)
        mainMenu()
    })
    ;
};

const viewAllEmployees = () => {
    const query = `SELECT * FROM employee;`;
    db.query(query,(err,data)=>{
        console.table(data)
        mainMenu()
    })
    ;
};


const updateRole = ()=> {
    const query = `SELECT id, first_name FROM employee;`;
    db.query(query, (err,data)=>{
        inquirer.prompt(
            [
                {
                    type: 'list',
                    name: 'roleUpdate',
                    message: 'Choose the employee you want to change',
                    choices: function (){
                        const myEmployees = [];

                        for (let i = 0; i < data.length; i++) {
                            const employeeData = {
                                name: data[i].first_name,
                                value: data[i].id
                            }
                            myEmployees.push(employeeData);
                        }
                        return myEmployees;
                    }
                }
            ]
        ).then((answer1)=> {
            const query1 = `SELECT id, title FROM role`;
            db.query (query1, (err,data)=>{
                inquirer.prompt(
                    [
                        {
                            type: 'list',
                            name: 'changeRole',
                            message: `What is the new role?"`,
                            choices: function () {
                                const myRole = [];

                                for (let i = 0; i < data.length; i++) {
                                    const roleData = {
                                        name: data[i].title,
                                        value: data[i].id
                                    }
                                    myRole.push(roleData);
                                }
                                return myRole;
                            }
                        }
                    ]
                ).then((answer2)=>{
                    console.log('here is answer;', answer1)
                    console.log('here is answer;', answer2)
                    const query = `UPDATE employee SET role_id = ${answer2.changeRole} WHERE id = ${answer1.roleUpdate};`;
                    db.query(query,()=>{
                        console.log('employees new role has been logged');
                        mainMenu()
                    })
                }
                );
            })
        })
    })
};


function mainMenu (){
    start()
.then((answer)=> {
console.log(answer);
switch (answer.usage){
    case 'Add Depatment?': 
        console.log("adding a depatment")
        addDepartment();
        break;
    case 'Add Role?':
        console.log("adding role")
        addRole();
        break;
    case 'Add Employee?':
        console.log("adding employee")
        addEmployee();
        break;
    case 'View departments?':
        viewDepartments();
        break;
    case 'View all roles?':
        viewAllRoles();
        break;
    case 'View all employees?':
        viewAllEmployees();
        break;
    case 'Update an employee role?':
        updateRole();
        break;
    case 'exit?':
        process.exit(1);
    default:
        console.log("default")
}
})};

mainMenu(); 