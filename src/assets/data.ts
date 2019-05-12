import { of } from 'rxjs';

// This is just to create mock obsevable to demostrate unsubscribing subscriptions examples
export const data$ = of({
  subtitle: 'Shiba Inu (Dog Breed)',
  imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
});
