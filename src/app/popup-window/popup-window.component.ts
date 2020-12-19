import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-popup-window',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  styles: [`
    .mobpoll-modal .modal-content {
      background-color: green;
      border-radius: 20px;
      margin-right: 400px;
    }
    /*.mobpoll-modal .close {*/
    /*  color: white;*/
    /*}*/
    /*.dark-modal .modal-content {*/
    /*  background-color: #292b2c;*/
    /*  color: white;*/
    /*}*/
    /*.dark-modal .close {*/
    /*  color: white;*/
    /*}*/
    /*.light-blue-backdrop {*/
    /*  background-color: #5cb3fd;*/
    /*}*/
  `]
})
export class PopupWindowComponent{
  closeResult: string;

  constructor(private modalService: NgbModal) { }

  openBlackWindow(content){
    this.modalService.open(content, {centered: true, scrollable: true, windowClass: 'mobpoll-modal'});
  }


}
