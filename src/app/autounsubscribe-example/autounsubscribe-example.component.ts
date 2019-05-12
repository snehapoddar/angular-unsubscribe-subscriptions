import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Subscription } from 'rxjs';
import { data$ } from 'src/assets/data';

@AutoUnsubscribe()
@Component({
  selector: 'app-autounsubscribe-example',
  templateUrl: './autounsubscribe-example.component.html',
})
export class AutounsubscribeExampleComponent implements OnInit, OnDestroy {
  public content: any;
  public subscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.subscription = data$.subscribe(cardDetails => this.content = cardDetails);
  }

  ngOnDestroy() {
    // this empty ngOnDestroy is required for AutoUnsubscribe to unsubscribe all subscriptions
  }
}
