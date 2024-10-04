import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../../core/services/employee.service';
import { APIResponse } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit {

  loggedData: any; 
  dasboardData: any;
  constructor(private empSrv: EmployeeService){
    const localData = localStorage.getItem('ticketData');
    if(localData != null) {
      this.loggedData = JSON.parse(localData) 
    }
   
  }
  ngOnInit(): void {
    if(this.loggedData.role == 'Department Head') {
      this.getDeptHeadDashboardByDeptHead(); 
    } else if (this.loggedData.role == 'Employee') {
      this.getEmployeeDashByEmpId();
    } else if (this.loggedData.role =='Admin Department Employee') {
      this.getAdminEmployeeDashByEmpId();
    }  else if (this.loggedData.role =='Super Admin') {
      this.getSuperAdminDashboard();
    }
   
  }
  getSuperAdminDashboard() {
    this.empSrv.getSuperAdminDashboard().subscribe((res:APIResponse)=>{
      this.dasboardData =  res.data;
    })
  }
  getEmployeeDashByEmpId() {
    this.empSrv.getEmployeeDashByEmpId(this.loggedData.employeeId).subscribe((res:APIResponse)=>{
      this.dasboardData =  res.data;
    })
  }
  getAdminEmployeeDashByEmpId() {
    this.empSrv.getAdminEmployeeDashByEmpId(this.loggedData.employeeId).subscribe((res:APIResponse)=>{
      this.dasboardData =  res.data;
    })
  }
  getDeptHeadDashboardByDeptHead() {
    this.empSrv.getDeptHeadDashboardByDeptHead(this.loggedData.employeeId).subscribe((res:APIResponse)=>{
      this.dasboardData =  res.data;
    })
  }
}
