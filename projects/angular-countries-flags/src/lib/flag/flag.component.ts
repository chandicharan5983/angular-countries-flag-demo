import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./image.css','./flag.component.css']
})
export class FlagComponent implements OnInit {

  countryCode: string = '';
  flagSize:string = 'sm';
  flagEffect:string = '';
  validSizes = ['sm','md','lg','xl'];
  validEffects = ['round','sphere','wave','app'];

  @Input('code') set setCountryCode(value: string) {
    if(value && value?.length){
      this.countryCode = value?.toUpperCase()?.trim();
    } else {
      // if not value then ?
    }
  }

  @Input('size') set setSize(value: string) {
    if(value && value?.length && this.validSizes.includes(value?.toLowerCase()?.trim())){
      this.flagSize = value?.toLowerCase()?.trim();
    } else {
      this.flagSize='sm';
    }
  }

  @Input('effect') set setEffect(value: string) {
    if(value && value?.length && this.validEffects.includes(value?.toLowerCase()?.trim())){
      this.flagEffect = value?.toLowerCase()?.trim();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
