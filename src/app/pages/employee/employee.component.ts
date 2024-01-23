import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { Observable } from 'rxjs';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {


  deptList$: Observable<Department[]> | undefined;
  employeeList: EmployeeModel[]=  [];
  isEmpFormVisible:boolean = false;
  employeeObj: EmployeeModel = new EmployeeModel();

  constructor(private deptSrv: DepartmentService,private empSrv: EmployeeService) {
    this.deptList$ = deptSrv.getDeptList();
  }

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.empSrv.getAllEmployee().subscribe((res:APIResponse)=>{
      this.employeeList = res.data;
    })
  }
  onSaveEmp() {
    this.empSrv.createEmployee(this.employeeObj).subscribe((res:APIResponse)=>{
      if(res.result) {
        alert("Employee Created Success");
        this.loadAllEmployees();
      } else {
        alert(res.message);
      }
    })
  }
}
