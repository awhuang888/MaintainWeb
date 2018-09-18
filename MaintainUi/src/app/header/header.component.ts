import { Component } from '@angular/core';
//import { Response } from '@angular/http';
import { HttpRestService } from '../shared/http-rest.service'
// import { SimAccount, SimCurrency } from '../shared/models'
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  // public account : SimAccount;
  // public accountList : SimAccount[];

  constructor(private httpRestService:HttpRestService) {}

  ngOnInit() {
    //this.TestHttp2();
  }

  // TestHttp()
  // {
  //     this.account.id = 0;
  //     this.account.simAccountNumber = '10123';
  //     this.httpRestService.AddUpdateDataRecord('SimAccount', this.account).subscribe(
  //        data => {
  //          this.TestHttp2();
  //          return true;
  //        },
  //        error => {
  //          console.error("Error saving food!");
  //          return Observable.throw(error);
  //        }
  //     );
  // }

  // TestHttp2()
  // {
  //   this.httpRestService.getDataRecord('SimAccount', 1).subscribe(
  //     // the first argument is a function which runs on success
  //     data => { this.account = data as SimAccount},
  //     // the second argument is a function which runs on error
  //     err => console.error(err),
  //     // the third argument is a function which runs on completion
  //     () => console.log('done loading Account')
  //   );
  // }

  // TestHttp3()
  // {
  //   this.httpRestService.getDataSet('SimAccount').subscribe(
  //     // the first argument is a function which runs on success
  //     data => { this.accountList = data as SimAccount[]},
  //     // the second argument is a function which runs on error
  //     err => console.error(err),
  //     // the third argument is a function which runs on completion
  //     () => console.log('done loading Account')
  //   );
  // }

}
