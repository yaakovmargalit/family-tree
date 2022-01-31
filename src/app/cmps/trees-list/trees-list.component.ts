import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trees-list',
  templateUrl: './trees-list.component.html',
  styleUrls: ['./trees-list.component.scss']
})
export class TreesListComponent implements OnInit {
  @Input() trees
  constructor() { }

  ngOnInit(): void {
  }

}
