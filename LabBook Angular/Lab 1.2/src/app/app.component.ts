import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empId = '';
  name = '';
  salary = '';
  dept = '';


  onClickAdd(data)
  {
    alert("ID="+this.empId+" Name="+this.name+" Salary="+this.salary+" Department="+this.dept);
  }
  
}
