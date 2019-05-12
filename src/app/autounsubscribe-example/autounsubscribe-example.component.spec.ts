import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutounsubscribeExampleComponent } from './autounsubscribe-example.component';

describe('AutounsubscribeExampleComponent', () => {
  let component: AutounsubscribeExampleComponent;
  let fixture: ComponentFixture<AutounsubscribeExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutounsubscribeExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutounsubscribeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
