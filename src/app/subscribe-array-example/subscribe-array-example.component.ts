import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { data$ } from 'src/assets/data';

@Component({
  selector: 'app-subscribe-array-example',
  templateUrl: './subscribe-array-example.component.html',
})
export class SubscribeArrayExampleComponent implements OnInit, OnDestroy {
  public content: any;
  public moreContent: any;
  public subscriptions = new Subscription();
  constructor() { }

  ngOnInit() {
    this.subscriptions.add(data$.subscribe(cardDetails => this.content = cardDetails));
    this.subscriptions.add(data$.subscribe(cardDetails => this.moreContent = cardDetails));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
