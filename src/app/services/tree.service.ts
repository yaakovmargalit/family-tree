import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Ipreson } from '../Models/person.interface';
import * as personJson from '../../assets/data.json';
import { PersonService } from './person.service';

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  private TreesDB: any[] = [
    {
      id: '1',
      name: 'main tree',
      persons: [
        {
          "id": "1",
          "name": "Yaakov",
          "imgUrl": "ffff",
          "childOf": "",
          "fatherOf": [2, 3, 4]
        },
        {
          "id": "2",
          "name": "Eli",
          "imgUrl": "ffff",
          "childOf": "1",
          "fatherOf": [5, 6]
        },
        {
          "id": "3",
          "name": "Oliver",
          "imgUrl": "ffff",
          "childOf": "1",
          "fatherOf": [7, 8]
        },
        {
          "id": "4",
          "name": "Emma",
          "imgUrl": "ffff",
          "childOf": "1",
          "fatherOf": []
        },
        {
          "id": "5",
          "name": "Sophia",
          "imgUrl": "ffff",
          "childOf": "2",
          "fatherOf": []
        },
        {
          "id": "6",
          "name": "Benjamin",
          "imgUrl": "ffff",
          "childOf": "2",
          "fatherOf": []
        },
        {
          "id": "7",
          "name": "Harper",
          "imgUrl": "ffff",
          "childOf": "3",
          "fatherOf": []
        },
        {
          "id": "8",
          "name": "James",
          "imgUrl": "ffff",
          "childOf": "3",
          "fatherOf": []
        },
        {
          "id": "9",
          "name": "Ava",
          "imgUrl": "ffff",
          "childOf": "3",
          "fatherOf": []
        },
        {
          "id": "10",
          "name": "Harper",
          "imgUrl": "ffff",
          "childOf": "3",
          "fatherOf": []
        },
        {
          "id": "11",
          "name": "Charlotte",
          "imgUrl": "ffff",
          "childOf": "4",
          "fatherOf": []
        },
        {
          "id": "12",
          "name": "Amelia",
          "imgUrl": "ffff",
          "childOf": "4",
          "fatherOf": []
        },
        {
          "id": "13",
          "name": "Mia",
          "imgUrl": "ffff",
          "childOf": "4",
          "fatherOf": []
        },
        {
          "id": "14",
          "name": "Luna",
          "imgUrl": "ffff",
          "childOf": "7",
          "fatherOf": []
        },
        {
          "id": "15",
          "name": "Mila",
          "imgUrl": "ffff",
          "childOf": "7",
          "fatherOf": []
        },
        {
          "id": "16",
          "name": "Chloe",
          "imgUrl": "ffff",
          "childOf": "12",
          "fatherOf": []
        },
        {
          "id": "17",
          "name": "Victoria",
          "imgUrl": "ffff",
          "childOf": "16",
          "fatherOf": []
        },
        {
          "id": "18",
          "name": "Hannah",
          "imgUrl": "ffff",
          "childOf": "16",
          "fatherOf": []
        },
        {
          "id": "19",
          "name": "Zoe",
          "imgUrl": "ffff",
          "childOf": "18",
          "fatherOf": []
        },
        {
          "id": "20",
          "name": "Addison",
          "imgUrl": "ffff",
          "childOf": "18",
          "fatherOf": []
        },
        {
          "id": "21",
          "name": "Lucy",
          "imgUrl": "ffff",
          "childOf": "12",
          "fatherOf": []
        },
        {
          "id": "22",
          "name": "Naomi",
          "imgUrl": "ffff",
          "childOf": "12",
          "fatherOf": []
        },
      ]
    },
    // {
    //   id: '2',
    //   name: 'כלום וחצי',
    //   persons: [
    //     {
    //       "id": "1",
    //       "name": "Yaakov",
    //       "imgUrl": "ffff",
    //       "childOf": "",
    //       "fatherOf": [2, 3, 4]
    //     },
    //     {
    //       "id": "2",
    //       "name": "eli",
    //       "imgUrl": "ffff",
    //       "childOf": "1",
    //       "fatherOf": [5, 6]
    //     },
    //     {
    //       "id": "3",
    //       "name": "chim",
    //       "imgUrl": "ffff",
    //       "childOf": "1",
    //       "fatherOf": [7, 8]
    //     },
    //     {
    //       "id": "4",
    //       "name": "moshe",
    //       "imgUrl": "ffff",
    //       "childOf": "1",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "5",
    //       "name": "tamar",
    //       "imgUrl": "ffff",
    //       "childOf": "2",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "6",
    //       "name": "david",
    //       "imgUrl": "ffff",
    //       "childOf": "2",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "7",
    //       "name": "mashho",
    //       "imgUrl": "ffff",
    //       "childOf": "3",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "8",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "3",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "9",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "3",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "10",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "3",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "11",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "4",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "12",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "4",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "13",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "4",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "14",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "7",
    //       "fatherOf": []
    //     },
    //     {
    //       "id": "15",
    //       "name": "clum",
    //       "imgUrl": "ffff",
    //       "childOf": "7",
    //       "fatherOf": []
    //     }
    //   ]
    // },
  ]

  private _currTreeId = null
  private _currTree$ = new BehaviorSubject<any>(null)
  public currTree$ = this._currTree$.asObservable()

  private _trees$ = new BehaviorSubject<Ipreson[]>([])
  public trees$ = this._trees$.asObservable()
  constructor(private personService: PersonService) { }

  public loadTrees(): void {
    const locals: Ipreson[] = JSON.parse(localStorage.getItem('trees'))
    if (!locals || !locals.length) {
      localStorage.setItem('trees', JSON.stringify(this.TreesDB))
    }
    this.TreesDB = JSON.parse(localStorage.getItem('trees'))
    this._trees$.next(this.TreesDB)
  }

  public buildTree(persons) {
    const tree = []
    console.log(this._currTree$);
    
    persons.forEach(person => {
      if (!person.childOf) {
        tree.push({
          ...person,
          fatherOf: this.buildNested(persons, person)
        })
      }
    })
    // this._currTree$.next(tree)
    return tree
  }
  public buildNested(persons, person) {//Constructs the responses nested by recursion
    const nes = []
    persons.forEach(per => {
      if (per.childOf == person.id) {
        nes.push({
          ...per,
          fatherOf: this.buildNested(persons, per) || null
        })
      }
    })
    return nes

  }

  public addPerson(newPerson) {    
    const idx = this.TreesDB.findIndex(tree=>tree.id===this._currTree$.value.id)
    newPerson.id = this._makeId()   
    const tree = this.TreesDB[idx]
    console.log(idx);
    
    tree.persons.push(newPerson)
    localStorage.setItem('trees', JSON.stringify(this.TreesDB))
    // this._trees$.next(this.TreesDB)
    this._currTree$.next({...tree , persons: this.buildTree(tree.persons)})
    // this.buildTree()
  }

  public removePerson(id) {
    const idx = this.TreesDB.findIndex(tree=>tree.id===this._currTree$.value.id)
    const tree = this.TreesDB[idx]
    // const personIdx = tree.persons.findIndex(per=>per.id===id)
    // tree.persons.splice(idx,1)
  
    tree.persons = tree.persons.filter(persoon => persoon.id !== id)
    tree.persons.forEach(person => {
      if (person.childOf === id) {
        this.removePerson(person.id)
      }
    })
    localStorage.setItem('trees', JSON.stringify(this.TreesDB))
    // this._trees$.next(this.TreesDB)
    this._currTree$.next({...tree , persons: this.buildTree(tree.persons)})
  }
  public getTreeById(id) {
    this.loadTrees()
    const tree = this.TreesDB.find(tree => tree.id === id)
    this._currTree$.next({...tree , persons: this.buildTree(tree.persons)})
    console.log(this._currTree$.value);
    
    // return of({ ...tree })
  }

  private _makeId(length = 5) {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return +text;
  }
}
