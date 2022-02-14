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
            'Update an existing role?',
            'View all employees?'
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
    // .then(() => start())
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
            console.log('role has been logged');
        })
    }
    )
    // .then(() => start())
    ;
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
    // .then(() => start())
    ;
};

const viewDepartments = () => {
    const query = `SELECT * FROM department;`;
        db.query(query,(err, data)=>{
            console.table(data)
        })
};

const viewAllRoles = () => {
    const query = `SELECT * FROM role;`;
    db.query(query,(err,data)=>{
        console.table(data)
    })
    // .then(() => start())
    ;
};

const viewAllEmployees = () => {
    const query = `SELECT * FROM employee;`;
    db.query(query,(err,data)=>{
        console.table(data)
    })
    // .then(() => start())
    ;
};


const updateRole = ()=> {
    const query = `SELECT first_name FROM employee;`;
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
        )
    // }).then((answer) => {
    //     const query = `SELECT title FROM role`;
    //     db.query (query, (err,data)=>{
    //     inquirer.prompt(
    //         [
    //             {
    //                 type: 'list',
    //                 name: 'changeRole',
    //                 massage: `What is the new role for("${answer.roleUpdate}?")`,
    //                 choices: function(){
    //                     const myRole = [];

    //                     for (let i= 0; i < data.length; i++) {
    //                         const roleData= {
    //                             name: data[i].title,
    //                             value: data[i].id
    //                     }
    //                     myRole.push(roleData);
    //              }
    //              return myRole;
    //             }
    //         }
    //         ]
    //     )
    //     }).then((answer)=>{
    //         const query = `INSERT INTO employee (name) VALUES ("${answer.roleData.value}");`;
    //         db.query(query,()=>{
    //             console.log('employee has been logged');
    //         })
    //     }
    //     );
    });
};



       
        // .then(() => start())

    




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
    case 'Update an existing role?':
        updateRole();
        break;
    default:
        console.log("default")
}
});