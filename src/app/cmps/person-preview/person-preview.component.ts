import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'person-preview',
  templateUrl: './person-preview.component.html',
  styleUrls: ['./person-preview.component.scss']
})
export class PersonPreviewComponent implements OnInit {
  @Input() person
  toggleActions=false
  constructor(private _treeService: TreeService) { }

  ngOnInit(): void {
  }

  addChild() {
    var name = prompt('Name?')
    const newPerson = {
      name,
      imgUrl: '',
      childOf: this.person.id,
      fatherOf: []
    }
    this._treeService.addPerson(newPerson)
  }
  removePerson(){
    this._treeService.removePerson(this.person.id)
  }
}
