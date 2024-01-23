import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constant';
import { Observable, map } from 'rxjs';
import { APIResponse, Department } from '../models/API.Model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAllDept() : Observable<APIResponse> {
    return this.http.get<APIResponse>(environment.API_URL + Constant.API_END_POINT.GET_DEPARTMENT)
  }

  getDeptList() : Observable<Department[]> {
    return this.http.get<Department[]>(environment.API_URL + Constant.API_END_POINT.GET_DEPARTMENT).pipe(map((res:any)=>{
      return res.data;
    }))
  }

  createNewDept(obj:Department) : Observable<APIResponse> {
    return this.http.post<APIResponse>(environment.API_URL + Constant.API_END_POINT.CREATE_DEPARTMENT,obj)
  }

  updateDept(obj:Department) : Observable<APIResponse> {
    return this.http.put<APIResponse>(environment.API_URL + Constant.API_END_POINT.UPDATE_DEPARTMENT,obj)
  }

  deleteDept(id: number) : Observable<APIResponse> {
    return this.http.delete<APIResponse>(environment.API_URL + Constant.API_END_POINT.DELETE_DEPARTMENT +  id)
  }


}
