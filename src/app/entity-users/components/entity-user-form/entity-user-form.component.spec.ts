import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityUserFormComponent } from './entity-user-form.component';

describe('EntityUserFormComponent', () => {
  let component: EntityUserFormComponent;
  let fixture: ComponentFixture<EntityUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
