## Different ways to unsubscribe subscriptions in Angular
There are 5 wellknown ways to unsubscribe subscriptions in angular. This repo shows examples for each one the below.

1. @Autosubscribe decorator (3rd party) - You need to add empty ngOnDestroy() else it doesnt work

2. Rxjs operators - takeUntil/first/take(1)  - use it but should know caveats of them specially takeUntil. It should be last operator if you have other operators like filter, combineLatest etc.
3. Create array of subscriptions and add all to it and then unsubscribe the array - equivalent to  sink - Prefer this over all others as there is no need of any 3rd part packages.
4. Subscribe and unsubscribe each - it becomes verbose the moment you have more than 2 subscriptions in the same component.
5. Subsink - 3rd party similar to approach3


### Packages Added
- ngx-auto-unsubscribe
- subsink


## Angular Material
The repo also shows uses angular material tabs/cards

### Packages Added
- @angular/animations
- @angular/cdk
- @angular/material

