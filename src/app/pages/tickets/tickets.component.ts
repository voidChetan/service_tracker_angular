import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../core/services/department.service';
import { Observable } from 'rxjs';
import { APIResponse, Department, EmployeeModel, NewTicketObj, TicketList } from '../../core/models/API.Model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../core/services/employee.service';
import { NaPipe } from '../../shared/pipes/na.pipe';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [FormsModule,CommonModule,NaPipe],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent implements OnInit {

  ticketObj: NewTicketObj = new NewTicketObj();

  deptList$: Observable<Department[]> | undefined;
  ticketsList: TicketList [] = [];
  loggedData: any;
  ticketStatusList: string []= ['Un-Assigned','Assigned','In-Progress','Closed']
  deptEmployeeList: EmployeeModel []= [];
  constructor(private deptSrv: DepartmentService,private empSrv: EmployeeService){
    this.deptList$ = deptSrv.getDeptList();
    const localData = localStorage.getItem('ticketData');
    if(localData != null) {
      this.loggedData = JSON.parse(localData)
      this.ticketObj.employeeId = this.loggedData.employeeId;
    }
   
  }

  ngOnInit(): void {
    this.loadGrid();
   
  }

  loadGrid() {
    if(this.loggedData.role == 'Department Head') {
      this.getNewUnAssignedTickets();
      this.getDeptEmployees();
    } else if (this.loggedData.role == 'Employee') {
      this.getTicketcCreateByEMp();
    } else if (this.loggedData.role =='Admin Department Employee') {
      this.getAssignedTickets();
    }
  }

  getAssignedTickets() {
    this.empSrv.getAssignedTickets(this.loggedData.employeeId).subscribe((res:APIResponse)=>{
      this.ticketsList =  res.data;
    })
  }


  getTicketcCreateByEMp() {
    this.empSrv.getTicketsCraetedByEmp(this.ticketObj.employeeId).subscribe((res:APIResponse)=>{
      this.ticketsList =  res.data;
    })
  }

  getDeptEmployees() {
    this.empSrv.getEMpByDept(this.loggedData.deptId).subscribe((res:APIResponse)=>{
      this.deptEmployeeList =  res.data;
    })
  }

  getNewUnAssignedTickets() {
    this.empSrv.getNewTickets(this.loggedData.employeeId).subscribe((res:APIResponse)=>{
      this.ticketsList =  res.data;
    })
  }
  openTicketModel() {
    const model = document.getElementById('ticketModel');
    if(model !== null) {
      model.style.display = 'block'
    } 
  }

  closeTicketModel() {
    const model = document.getElementById('ticketModel');
    if(model !== null) {
      model.style.display = 'none'
    } 
  }
  onCreateTicket() {
    this.empSrv.createNewTicket(this.ticketObj).subscribe((res:APIResponse)=>{
      if(res.result ) {
        alert('Ticket Created Sucess')
      } else {
        alert(res.message)
      }
    })
  }

  assignEmp(empId:any, ticketId: number) {
    debugger;
    const obj = {
      "ticketId": ticketId,
      "assignedTo": empId.target.value
    };
    this.empSrv.assignTicket(obj).subscribe((res:APIResponse)=>{
      if(res.result) {
        alert('Ticket Assigned Success')
        this.loadGrid();
      } else {
        alert(res.message);
      }
    })
  }

  startTicket(ticketId: number) {
    debugger;
     
    this.empSrv.startTicket(ticketId).subscribe((res:APIResponse)=>{
      if(res.result) {
        alert('Ticket Status Changed')
        this.loadGrid();
      } else {
        alert(res.message);
      }
    })
  }
  closeTicket(ticketId: number) {
    debugger;
     
    this.empSrv.closeTicket(ticketId).subscribe((res:APIResponse)=>{
      if(res.result) {
        alert('Ticket Status Changed')
      } else {
        alert(res.message);
      }
    })
  }
}
