import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import {  takeUntil, take } from "rxjs/operators";
import { data$ } from 'src/assets/data';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
})
export class RxjsExampleComponent implements OnInit, OnDestroy {
  public content: any;
  public subscription: Subscription;
  private unsubscribe$ = new Subject();
  constructor() { }

  ngOnInit() {
    this.subscription = data$.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(cardDetails => this.content = cardDetails);

    // can use the below operator if you need only 1 value from subscription
    // this.subscription = data$.pipe(
    //   take(1)
    // ).subscribe(cardDetails => this.content = cardDetails);
  }

  ngOnDestroy() {
    // these are required only if you use takeUntil operator
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
