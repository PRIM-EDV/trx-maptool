import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ph-input',
  templateUrl: './ph-input.component.html',
  styleUrls: ['./ph-input.component.scss']
})
export class PhInputComponent implements OnInit, AfterViewInit {

  @Input() label: string;
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;  

  public hasFocus: boolean = false;
  public inputValue: string = "";

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // console.log(this.labelElement)
    this.inputElement.nativeElement.onfocus = () => {this.hasFocus = true};
    this.inputElement.nativeElement.onblur = () => {this.hasFocus = false};
  }

}
