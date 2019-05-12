import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsinkExampleComponent } from './subsink-example.component';

describe('SubsinkExampleComponent', () => {
  let component: SubsinkExampleComponent;
  let fixture: ComponentFixture<SubsinkExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsinkExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsinkExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
