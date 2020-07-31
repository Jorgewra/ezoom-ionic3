import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items =[
    {description: "Curso número um para montagem", picture:"../../assets/img/img1.png"},
    {description: "Curso número dois para montagem", picture:"../../assets/img/img1.png"},
    {description: "Curso número três para montagem", picture:"../../assets/img/img1.png"},
  ]
  constructor(public navCtrl: NavController) {
  }
}
