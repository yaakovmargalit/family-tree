import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() persons
  constructor() { }

  ngOnInit(): void {
  }

}
