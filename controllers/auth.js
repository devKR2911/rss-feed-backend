// const Employee = require('../models/employee');

const employeeList = [
    {"id": 0, "name": "User 1", "designation": "Designation 1" },
    {"id": 1, "name": "User 2", "designation": "Designation 2" },
    {"id": 2, "name": "User 3", "designation": "Designation 3" },
    {"id": 3, "name": "User 4", "designation": "Designation 4" }
];

exports.login = (req, resp, next) => {
    resp.status(200).json({
        message: 'Employee List retrived successfully',
        employees: employeeList,
        totalCount: employeeList.length,
    });
}