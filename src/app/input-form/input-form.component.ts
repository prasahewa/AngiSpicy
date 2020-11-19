import { NgForOf } from '@angular/common';
import { Component,  OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailSevices } from '../detail.services';
import { Spicy } from '../spicy.modle';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @ViewChild('f') spicyForm:NgForm;
  constructor(public activeModal: NgbActiveModal,
    public detailsServices:DetailSevices) {}

  ngOnInit(): void {
  }

  //onSubmit(form :NgForm){
  //  console.log(form.value.sp);
   
  //}


 onSubmit(){
   /*
   console.log(this.spicyForm.value['spiName']);
   this.detailsServices.addSpicy (
    this.spicyForm.value['spiId'],
    this.spicyForm.value['spiName'],
    this.spicyForm.value['spiImgPath'],
    this.spicyForm.value['spiDesc'],
    this.spicyForm.value['spiPageLink'])*/

    const spicy:Spicy={
      id: this.spicyForm.value['spiId'],
      title: this.spicyForm.value['spiName'],
      imgUrl: this.spicyForm.value['spiImgPath'],
      desc: this.spicyForm.value['spiDesc'],
      link: this.spicyForm.value['spiPageLink']

    } 
    this.detailsServices.addSpicy (spicy);
}
 
}
