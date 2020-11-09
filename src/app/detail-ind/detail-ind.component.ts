import { Component, Input, OnInit } from '@angular/core';
import { DetailSevices } from '../detail.services';
import { Spicy } from '../spicy.modle';


@Component({
  selector: 'app-detail-ind',
  templateUrl: './detail-ind.component.html',
  styleUrls: ['./detail-ind.component.css']
})
export class DetailIndComponent  {
  
@Input() spicy :Spicy;

  constructor() {

  }
}
