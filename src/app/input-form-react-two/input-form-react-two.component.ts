
/*----Description
* Reactive Form
* Used the model to insert data (NgbModel)
* Used same id of html & ts
* spicy:Spicy={id:null,title:null,desc:null,imgUrl:null,link:null}; is use to enter a new value otherwise
fill the value using 
      'spiId'       : new FormControl(this.spicy.id,Validators.required),
      'spiName'     : new FormControl(this.spicy.title),....
when click the pericular item      
*/

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailSevices } from '../detail.services';
import { Spicy } from '../spicy.modle';

@Component({
  selector: 'app-input-form-react-two',
  templateUrl: './input-form-react-two.component.html',
  styleUrls: ['./input-form-react-two.component.css']
})
export class InputFormReactTwoComponent implements OnInit {

  spicy: Spicy= {id:null,title:null,desc:null,imgUrl:null,link:null};
  /*Add this null values Addiong new items*/

  reactFormTw: FormGroup;
  constructor(public activeModal: NgbActiveModal,
              public detailsServices :DetailSevices) { }

  ngOnInit(): void {
    this.reactFormTw = new FormGroup({
      'id'    : new FormControl(this.spicy.id, Validators.required),
      'title' : new FormControl(this.spicy.title),
      'desc'  : new FormControl(this.spicy.desc),
      'imgUrl': new FormControl(this.spicy.imgUrl),
      'link'  : new FormControl(this.spicy.link)
    });
  }

  OnSubmit() {
     console.log(this.reactFormTw.value);
     this.detailsServices.addSpicy (this.reactFormTw.value);
     this.activeModal.dismiss();

  }
}
