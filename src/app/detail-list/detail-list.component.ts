import { Component, OnInit } from '@angular/core';
import { DetailSevices } from '../detail.services';
import { Spicy } from '../spicy.modle';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {
  spicy:Spicy[];
  constructor(private detailsServices:DetailSevices) { }

  ngOnInit(): void {
    this.spicy=this.detailsServices.spicys;
  }

}
