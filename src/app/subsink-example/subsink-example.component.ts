import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { data$ } from 'src/assets/data';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-subsink-example',
  templateUrl: './subsink-example.component.html',
})
export class SubsinkExampleComponent implements OnInit, OnDestroy {
  public content: any;
  public moreContent: any;
  private subs = new SubSink();
  constructor() { }

  ngOnInit() {
    this.subs.sink = data$.subscribe(cardDetails => this.content = cardDetails);
    this.subs.sink = data$.subscribe(cardDetails => this.moreContent = cardDetails);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
