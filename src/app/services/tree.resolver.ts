import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TreeService } from './tree.service';

@Injectable({
  providedIn: 'root'
})
export class TreeResolver implements Resolve<boolean> {
  constructor(private treeService: TreeService) { }
  async resolve(route: ActivatedRouteSnapshot) {
    console.log('id');
    const id = route.params['id']

     await this.treeService.getTreeById(id)
    // console.log(tree);
    // this.treeService.currTree$.subscribe()
    return id
  }
}
