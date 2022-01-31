import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'person-childs',
  templateUrl: './person-childs.component.html',
  styleUrls: ['./person-childs.component.scss']
})
export class PersonChildsComponent implements OnInit {
@Input() persons
  constructor() { }

  ngOnInit(): void {
  }

}
