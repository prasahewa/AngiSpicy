import { Component, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailSevices } from '../detail.services';
import { InputFormReactComponent } from '../input-form-react/input-form-react.component';
import { Spicy } from '../spicy.modle';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-detail-ind',
  templateUrl: './detail-ind.component.html',
  styleUrls: ['./detail-ind.component.css']
})
export class DetailIndComponent  {
  
@Input() spicy :Spicy;


  constructor(public detailsServices:DetailSevices,public modalService:NgbModal ) {
  }
  onDel(){
    this.detailsServices.delSpice( this.spicy);
  }
  onEdit(){
      const modalRef = this.modalService.open(InputFormReactComponent);
      modalRef.componentInstance.name = 'Template Form';
      modalRef.componentInstance.spicy = this.spicy;
    }

}
