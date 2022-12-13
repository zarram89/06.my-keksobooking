import { numberOfOffers } from './variables.js';
import { createOffer } from './generate-template-data.js';

const similarOffers = new Array(numberOfOffers).fill(null).map(() => createOffer());

console.log(similarOffers);