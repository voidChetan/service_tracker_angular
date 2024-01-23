import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../core/services/department.service';
import { APIResponse, Department, EmployeeModel } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';
import { NaPipe } from "../../shared/pipes/na.pipe";
import { EmployeeService } from '../../core/services/employee.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-department',
    standalone: true,
    templateUrl: './department.component.html',
    styleUrl: './department.component.css',
    imports: [FormsModule, CommonModule, NaPipe]
})
export class DepartmentComponent implements OnInit {

  departmentList: Department[] = [];
  employee$: Observable<EmployeeModel[]> | undefined;
  departmentObj: Department = new Department();
  constructor(private deptService: DepartmentService,private empService:EmployeeService) {
    this.employee$ =   this.empService.getEmployeeList();
  }

  ngOnInit(): void {
    this.loadDepartment();
  }

  loadDepartment() {
    this.deptService.getAllDept().subscribe((res:APIResponse)=>{
      this.departmentList = res.data;
    })
  }
  onSave() {
    this.deptService.createNewDept(this.departmentObj).subscribe((res: APIResponse)=>{
      if(res.result) {
        alert('Department Created Success');
        this.loadDepartment();
      } else {
        alert(res.message)
      }
    })
  }
  onEdit(item:Department) {
    this.departmentObj =  item;
  }
  onUpdate() {
    this.deptService.updateDept(this.departmentObj).subscribe((res: APIResponse)=>{
      if(res.result) {
        alert('Department Updated Success');
        this.loadDepartment();
      } else {
        alert(res.message)
      }
    })
  }
  reset() {
    this.departmentObj = new Department();
  }
  onDelete(id: number) {
    const isDelete  = confirm('Are you sure want to Delete ??');
    if(isDelete) {
      this.deptService.deleteDept(id).subscribe((res: APIResponse)=>{
        if(res.result) {
          alert('Department Deleted Success');
          this.loadDepartment();
        } else {
          alert(res.message)
        }
      })
    }
  }
 

}
