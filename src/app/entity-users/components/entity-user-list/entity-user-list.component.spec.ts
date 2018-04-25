import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityUserListComponent } from './entity-user-list.component';

describe('EntityUserListComponent', () => {
  let component: EntityUserListComponent;
  let fixture: ComponentFixture<EntityUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
