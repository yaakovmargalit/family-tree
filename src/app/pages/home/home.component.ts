import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipreson } from 'src/app/Models/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trees$: Observable<Ipreson[]>

  constructor(private _treeService: TreeService) { }

  ngOnInit(): void {
    this._treeService.loadTrees()
    this.trees$ = this._treeService.trees$
    console.log(this.trees$);
    
 }

}
