import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public items=["Himanshu","Gopikrishna","Surendera"]
  constructor() { }

  ngOnInit() {
  }

}
