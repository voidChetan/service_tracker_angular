import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeModel } from '../../core/models/API.Model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  loggedData: EmployeeModel = new EmployeeModel();
  

  constructor(private router:Router) {
    const localData = localStorage.getItem('ticketData');
    if(localData != null) {
      this.loggedData = JSON.parse(localData);
    }
  }
  onLogoff() {
    localStorage.removeItem('ticketData');
    this.router.navigateByUrl('/login')
  }

}
