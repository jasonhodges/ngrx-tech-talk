import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityUsersComponent } from './entity-users.component';
import { Store, StoreModule } from '@ngrx/store';

describe('EntityUsersComponent', () => {
  let component: EntityUsersComponent;
  let fixture: ComponentFixture<EntityUsersComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ EntityUsersComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityUsersComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
