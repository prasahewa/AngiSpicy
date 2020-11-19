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
 // insSpicy : {wkid:string,wktitle: string,wkimgUrl: string,wkdesc: string,wklink: string}

  constructor(private detailsServices:DetailSevices) { }

  ngOnInit(): void {
    //this.spicy=this.detailsServices.spicys;  -- derecly access the array in  the services
    this.spicy=this.detailsServices.getAllSpicy(); // Accsess the data using the methard in  the services
    console.log(1);
    console.log( this.spicy);
    
  }
onAdd(){
  this.detailsServices.addSpicy ({
   id: '9',
   title: 'Cinnamon9',
   imgUrl: 'assets/pep.JPG',
   desc : 'There are two kinds of cinnamon: Ceylon cinnamon and Cassia cinnamon.',
   link: 'http://www.life.lk/article/food/Sri-Lankan-Herbs-and-Spices/30/18468'})
}



}
