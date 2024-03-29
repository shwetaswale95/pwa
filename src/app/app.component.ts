import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa';
  Employees: any = []


  constructor(public dataService: DataServiceService) {
    this.getDetails();
  }

  getDetails() {
    this.dataService.getDetails().subscribe((res: any) => {
      console.log(res)
      let result: any = res;
      this.Employees = result;
      
    });

  }
}
