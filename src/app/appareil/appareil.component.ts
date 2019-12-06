import { Component, OnInit, Input } from '@angular/core';
import AppareilService from "../services/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  appareilId:number;

  @Input()
  appareilName:string;

  @Input()
  appareilStatus:string;

  @Input()
  appareilIndex:string;

  constructor(private appareilService: AppareilService) { }

  getStatus(){
    return this.appareilStatus;
  }

  getColor(){
    return this.appareilStatus === 'on' ? 'green' : 'red';
  }

  onAllumer(){
    this.appareilService.appareilOn(this.appareilId);
  }

  onEteindre(){
    this.appareilService.appareilOff(this.appareilId);
  }

  ngOnInit() {}

}
