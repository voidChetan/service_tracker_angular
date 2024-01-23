export const Constant = {
    API_END_POINT: {
        GET_DEPARTMENT: 'GetDepartments',
        CREATE_DEPARTMENT: 'CreateDepartment',
        UPDATE_DEPARTMENT: 'UpdateDepartment',
        DELETE_DEPARTMENT: 'DeleteDepartment?id=',
        LOGIN: 'login',
        GET_EMPLOYEE: 'GetEmployees',
        CREATE_EMPLOYEE: 'CreateEmployee' ,
        NEW_TICKET: 'CreateNewTicket',
        GET_TICKETS_CREATED_BY_EMP: 'GetTicketsCreatedByEmpId?empId=',
        GET_NEW_TICKETS: 'getNewTickets?deptHeadEmpId=',
        GET_EMPLOYEES_BY_DEPT: 'GetEmployeesByDeptId?id=',
        ASSIGN_TICKET:'AssignRequest',
        GET_ASSIGNED_TICKETS:'GetAssignedTicketsByEmpId?empId=',
        START_TICKET: 'startTicket?id=',
        CLOSE_TICKET: 'closeTicket?id=' 
   
        
    },
    VALIDATION_MESSAGE: {
        REQUIRED:'This Is Required'
    }
}