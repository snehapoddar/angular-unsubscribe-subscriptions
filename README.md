# angular-unsubscribe-subscriptions
There are 5 ways to unsubscribe subscriptions in angular. This code repo shows examples for each one the below.

  1. @Autosubscribe decorator - 3rd party - Issue need to have empty ngOnDestroy() else it doesnt work
	2. Subsink - 3rd party.
	3. Subscribe and unsubscribe each
	4. takeUntil/first/take(1) rxjs operator - use it but should know caveats of it.
  5. Create array of subscriptions and add all to it and then unsubscribe the array - equivalent to sink - Prefer this over all others as there is no need of any 3rd part packages.
