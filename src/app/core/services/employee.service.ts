import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, EmployeeModel, LoginModel, NewTicketObj } from '../models/API.Model';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  login(obj:LoginModel) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.LOGIN, obj)
  }
  getEmployeeList() : Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(environment.API_URL + Constant.API_END_POINT.GET_EMPLOYEE).pipe(map((res:any)=>{
      return res.data;
    }))
  }
 
  getAllEmployee() : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_EMPLOYEE)
  }
  
  createEmployee(OBJ: EmployeeModel) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.CREATE_EMPLOYEE, OBJ)
  }
  createNewTicket(OBJ: NewTicketObj) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.NEW_TICKET, OBJ)
  }

  getTicketsCraetedByEmp(empId: number) : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_TICKETS_CREATED_BY_EMP + empId)
  }

  getNewTickets(empId: number) : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_NEW_TICKETS + empId)
  }

  getEMpByDept(deptId: number) : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_EMPLOYEES_BY_DEPT + deptId)
  }

  assignTicket(OBJ: any) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.ASSIGN_TICKET, OBJ)
  }

  getAssignedTickets(empId: number) : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_ASSIGNED_TICKETS + empId)
  }
  startTicket(ticketId: number) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.START_TICKET + ticketId, {})
  }
  closeTicket(ticketId: number) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.CLOSE_TICKET + ticketId, {})
  }

}
