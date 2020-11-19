import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputFormReactTwoComponent } from './input-form-react-two/input-form-react-two.component';
import { InputFormReactComponent } from './input-form-react/input-form-react.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngiSpicy';

  constructor(private modalService: NgbModal) {}
  openTmpl(){
    const modalRef = this.modalService.open(InputFormComponent);
    modalRef.componentInstance.name = 'Template Form';
  }

  openRact(){
    const modalRef = this.modalService.open(InputFormReactComponent);
    modalRef.componentInstance.name = 'Reactive Form';
   }

   openRactTw(){
    const modalRef = this.modalService.open(InputFormReactTwoComponent);
    modalRef.componentInstance.name = 'Reactive Form Two';
   }
}

