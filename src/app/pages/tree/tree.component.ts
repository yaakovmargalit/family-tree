import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TreeService } from 'src/app/services/tree.service';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  subscription:Subscription
  public tree
  public isDrag =false
  constructor(private route: ActivatedRoute, private treeService :TreeService) { }

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(data => {
      
      // this.treeService.getTreeById(data.id)
    })    
    this.treeService.currTree$.subscribe(tree=>{
      this.tree = tree
    }) 
    console.log(this.tree);
      // this.treeService.buildTree()
  }

  toggelDrag(){
    this.isDrag = !this.isDrag
    
  }

}
