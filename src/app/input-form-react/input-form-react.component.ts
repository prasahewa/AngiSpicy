/*----Description
* Reactive Form
* Used the model to insert data (NgbModel)
* Used deferent id of html & ts
* spicy:Spicy={id:null,title:null,desc:null,imgUrl:null,link:null}; is use to enter a new value otherwise
fill the value using 
      'spiId'       : new FormControl(this.spicy.id,Validators.required),
      'spiName'     : new FormControl(this.spicy.title),....
when click the pericular item      
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailIndComponent } from '../detail-ind/detail-ind.component';
import { DetailSevices } from '../detail.services';
import { Spicy } from '../spicy.modle';

@Component({
  selector: 'app-input-form-react',
  templateUrl: './input-form-react.component.html',
  styleUrls: ['./input-form-react.component.css']
})
export class InputFormReactComponent implements OnInit {

  reactForm :FormGroup; /* class Var */
  spicy:Spicy={id:null,title:null,desc:null,imgUrl:null,link:null};

  constructor( public activeModal:NgbActiveModal,
               public detailsServices:DetailSevices) { }

  ngOnInit(): void {
    this.reactForm =new FormGroup({
      'spiId'       : new FormControl(this.spicy.id,Validators.required),
      'spiName'     : new FormControl(this.spicy.title),
      'spiDesc'     : new FormControl(this.spicy.desc),
      'spiImgPath'  : new FormControl(this.spicy.imgUrl),
      'spiPageLink' : new FormControl(this.spicy.link)
   
    });

  }
  OnSubmit(){
   /* console.log(this.reactForm.value);*/
   
    const spicy:Spicy={
      id: this.reactForm.value['spiId'],
      title: this.reactForm.value['spiName'],
      imgUrl: this.reactForm.value['spiImgPath'],
      desc: this.reactForm.value['spiDesc'],
      link: this.reactForm.value['spiPageLink']

    } ;

if  (this.spicy.id) {
   this.detailsServices.updateSpiciy (spicy); 
}else{
   this.detailsServices.addSpicy(spicy);
}

this.activeModal.close();

    

    /*this.reactForm.value as Spicy*/
    
    /*
      this.reactForm.value['spiId'],
      this.reactForm.value['spiName'],
      this.reactForm.value['spiImgPath'],
      this.reactForm.value['spiDesc'],
      this.reactForm.value['spiPageLink']*/

      /*-How Create a -clone
    const spicy2:Spicy = {
      ...spicy,
      id:'23'
    };*/
  }

}
