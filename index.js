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
            'View departments?'
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
        db.query(query,()=>{
            console.log('department has been logged');
        })
    }
    )
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
            console.log('role has been logged');
        })
    }
    )
};

const addEmployee = () =>{
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the name of your employee?',
            }
        ]
    ).then((answer)=>{
        const query = `INSERT INTO employee (name) VALUES ("${answer.employeeName}");`;
        db.query(query,()=>{
            console.log('employee has been logged');
        })
    }
    )
};

const viewDepartments = () => {
    const query = `SELECT * FROM department;`;
        db.query(query,(err, data)=>{
            console.table(data)
        })
};

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
    default:
        console.log("default")
}
});