import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { data$ } from 'src/assets/data';

@Component({
  selector: 'app-subscribe-each-example',
  templateUrl: './subscribe-each-example.component.html',
})
export class SubscribeEachExampleComponent implements OnInit, OnDestroy {
  public content: any;
  public moreContent: any;
  public subscription1: Subscription;
  public subscription2: Subscription;
  constructor() { }

  ngOnInit() {
    this.subscription1 = data$.subscribe(cardDetails => this.content = cardDetails);
    this.subscription2 = data$.subscribe(cardDetails => this.moreContent = cardDetails);
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
