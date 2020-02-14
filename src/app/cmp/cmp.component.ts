import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp',
  template:`<img [src]="imagePath"/>
  <img src="{{imagePath+imageName}}"/><br>
  <button disabled>Click me</button>
  <button [disabled]="isDisabled">Click Me</button>`,
  styleUrls: ['./cmp.component.css']
})
export class CmpComponent implements OnInit {
  isDisabled=false;
  imagePath="https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage3.mouthshut.com%2Fimages%2Fimagesp%2F925628804s.jpg&imgrefurl=https%3A%2F%2Fwww.mouthshut.com%2Fproduct-reviews%2FIIHT-Bangalore-Photos-925628804&tbnid=qoJS4iAeVGaNGM&vet=12ahUKEwirn9H2uNDnAhXXSisKHc7fD5kQMygAegUIARDrAQ..i&docid=SOUQhLosmdd6mM&w=304&h=150&q=images%20of%20iiht&ved=2ahUKEwirn9H2uNDnAhXXSisKHc7fD5kQMygAegUIARDrAQ"
  imageName="iiht-logo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
