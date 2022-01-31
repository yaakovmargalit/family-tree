import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ipreson } from '../Models/person.interface';
import * as personJson from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsDB: any[] = personJson.default


  private _persons$ = new BehaviorSubject<Ipreson[]>([])
  public persons$ = this._persons$.asObservable()
  constructor() { }




}
