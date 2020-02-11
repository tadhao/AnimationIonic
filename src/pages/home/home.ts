//npm instll web-animations-js --save

//npm install --save css-animator

//https://www.youtube.com/watch?v=8pOsJDZbJk0


import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AnimationService, AnimationBuilder } from 'css-animator';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('elementState', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('4000ms ease-in')),
      transition('transparent => opaque', animate('4000ms ease-out'))
    ])
  ]
})
export class HomePage {
	 state = 'opaque';

  animator: AnimationBuilder;
  @ViewChild('myElm') myElmt;


  constructor(public navCtrl: NavController, public animationService: AnimationService) {
  	this.animator= animationService.builder();

  }

animateElmt(){
	this.animator.setType('flipInX').show(this.myElmt.nativeElement);
}

  makeOpaque() {
    this.state = 'opaque';
  }

  makeTransparent() {
    this.state = 'transparent';
  }

  /*
  By default only three values work here:

md-transition: For Android’s Material Design
ios-transition: For iOS
wp-transition: For Windows phones
*/

  goToAbout() {
    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }
    
    this.navCtrl.push("NextPage", {}, animationsOptions);
  }


}
