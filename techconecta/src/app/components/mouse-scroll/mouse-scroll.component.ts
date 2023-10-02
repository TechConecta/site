import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as lottie from 'lottie-web';

@Component({
  selector: 'techconecta-mouse-scroll',
  templateUrl: './mouse-scroll.component.html',
  styleUrls: ['./mouse-scroll.component.scss']
})
export class MouseScrollComponent {

  options = {
    path: 'assets/images/mouse-scroll.json'
  };

  onAnimate(animationItem: lottie.AnimationItem): void {
    console.log(animationItem);
  }
}
