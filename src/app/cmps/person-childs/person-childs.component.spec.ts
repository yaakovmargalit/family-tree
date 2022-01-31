import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonChildsComponent } from './person-childs.component';

describe('PersonChildsComponent', () => {
  let component: PersonChildsComponent;
  let fixture: ComponentFixture<PersonChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonChildsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
