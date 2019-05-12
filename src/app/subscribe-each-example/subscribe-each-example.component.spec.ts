import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeArrayExampleComponent } from './subscribe-array-example.component';

describe('SubscribeArrayExampleComponent', () => {
  let component: SubscribeArrayExampleComponent;
  let fixture: ComponentFixture<SubscribeArrayExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeArrayExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
