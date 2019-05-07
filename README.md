# angular-unsubscribe-subscriptions
There are 5 ways to unsubscribe subscriptions in angular. This code repo shows examples for each one the below.

1. @Autosubscribe decorator - 3rd party - Issue need to have empty ngOnDestroy() else it doesnt work
2. Subsink - 3rd party.
3. Subscribe and unsubscribe each
4. Rxjs operators - takeUntil/first/take(1)  - use it but should know caveats of them speciallyy takeUntil. It should be last operator if you have other operators like filter, combineLatest etc.
5. Create array of subscriptions and add all to it and then unsubscribe the array - equivalent to sink - Prefer this over all others as there is no need of any 3rd part packages.
