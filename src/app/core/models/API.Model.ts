export interface APIResponse {
    message: string;
    result: boolean;
    data: any;
}

export class Department {
    deptId: number;
    deptName: string;
    deptHeadEmpId: number;
    deptHeadName: string;
    createdDate: Date;
    constructor() {
        this.createdDate = new Date();
        this.deptId = 0;
        this.deptName = '';
        this.deptHeadEmpId = 0;
        this.deptHeadName = '';
    }
}


export class LoginModel {
    password: string;
    emailId: string;
    constructor() {
        this.password = '';
        this.emailId = '';
    }
}


export class EmployeeModel {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    deptName: string;
    gender: string;
    role: string;
    constructor() {
        this.emailId = '';
        this.contactNo = '';
        this.deptId = 0;
        this.employeeId = 0;
        this.deptName = '';
        this.employeeName = '';
        this.gender = '';
        this.password = '';
        this.role = '';

    }
}

export class TicketList {
    ticketId: number;
    ticketNo: string;
    employeeId: number;
    createdDate: Date;
    expectedEndDate: Date;
    severity: string;
    deptId: number;
    completedDate: Date;
    assignedTo: number;
    state: string;
    requestDetails: string;
    contactNo: string;
    employeeName: string;
    deptName: string;
    createdByEmployee: string;
    assignedToEmployee: string;
    constructor() {
        this.assignedToEmployee = '';
        this.contactNo = '';
        this.deptName = '';
        this.createdByEmployee = '';
        this.assignedTo = 0;
        this.completedDate = new Date();
        this.createdDate = new Date();
        this.deptId = 0;
        this.employeeName = '';
        this.employeeId = 0;
        this.expectedEndDate = new Date();
        this.requestDetails = '';
        this.severity = '';
        this.state = '';
        this.ticketId = 0;
        this.ticketNo = '';

    }
}


export class NewTicketObj {
    employeeId: number;
    severity: string;
    deptId: number;
    state: string;
    requestDetails: string;
    constructor() {
        this.deptId = 0;
        this.employeeId = 0;
        this.requestDetails = '';
        this.severity = '';
        this.state = '';
    }

}