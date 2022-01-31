import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tree-preview',
  templateUrl: './tree-preview.component.html',
  styleUrls: ['./tree-preview.component.scss']
})
export class TreePreviewComponent implements OnInit {
@Input() tree
  constructor() { }

  ngOnInit(): void {
  }

}
