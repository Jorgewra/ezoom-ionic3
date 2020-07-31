import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';
//import { tap } from 'rxjs/operators';


@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  rootPage: any = HomePage;
  
  constructor() {
  }
 
  
}
