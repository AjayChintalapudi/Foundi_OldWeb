import {
  eventsbuissnessimgone,
  eventsbuissnessimgtwo,
  facebookicon,
  instagramicon,
  productone,
  productoneimg,
  producttwo,
  producttwoimg,
  subscriptioncheckimg,
  subscriptionpremiumcheckimg,
  twittericon,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
// const {
//   footerStrings,
//   eventsPageStrings,
//   aboutPageStrings,
//   productPageStrings,
// } = strings;

const eventsBuissnessData = [
  {
    eventsBuinessImg: eventsbuissnessimgone,
    eventsDetailsHeadingOne: eventsPageStrings.eventsDetailsHeadingOne,
    eventsDetailsSubHeadingOne: '',
    eventsDetailsSubDescOne: eventsPageStrings.eventsDetailsSubDescOne,
    eventsDetailsSubHeadingTwo: '',
    eventsDetailsSubDescTwo: eventsPageStrings.eventsDetailsSubDescTwo,
    eventsDetailsSubHeadingThree: '',
    eventsDetailsSubDescThree: eventsPageStrings.eventsDetailsSubDescThree,
  },
  {
    eventsBuinessImg: eventsbuissnessimgtwo,
    eventsDetailsHeadingOne: eventsPageStrings.eventsDetailsHeadingTwo,
    eventsDetailsSubHeadingOne: eventsPageStrings.eventsDetailsSubHeadingOne,
    eventsDetailsSubDescOne: eventsPageStrings.evnetsDetailsSubInfoOne,
    eventsDetailsSubHeadingTwo: eventsPageStrings.eventsDetailsSubHeadingTwo,
    eventsDetailsSubDescTwo: eventsPageStrings.evnetsDetailsSubInfoTwo,
    eventsDetailsSubHeadingThree:
      eventsPageStrings.eventsDetailsSubHeadingThree,
    eventsDetailsSubDescThree: eventsPageStrings.evnetsDetailsSubInfoThree,
  },
];
const { footerStrings, eventsPageStrings, aboutPageStrings } = strings;

const starPlanData = [
  {
    numberOfTags: aboutPageStrings.foundiFree,
    price: aboutPageStrings.starPlanPrice,
    validity: aboutPageStrings.starPlanValidity,
    checkImg: subscriptioncheckimg,
    limit: aboutPageStrings.planLimit,
    checkImg: subscriptioncheckimg,
    planvalidity: aboutPageStrings.starPlanValidUpto,
  },
];

const premiumPlansData = [
  {
    numberOfTags: aboutPageStrings.numberOfTagsOne,
    price: aboutPageStrings.premiumPlanPriceOne,
    validity: aboutPageStrings.premiumPlanValidityOne,
    checkImg: subscriptionpremiumcheckimg,
    limit: aboutPageStrings.premiumplanLimitOne,
    checkImg: subscriptionpremiumcheckimg,
    planvalidity: aboutPageStrings.premiumPlanvalidityOne,
  },

  {
    numberOfTags: aboutPageStrings.numberOfTagsTwo,
    price: aboutPageStrings.premiumPlanPriceTwo,
    validity: aboutPageStrings.premiumPlanValidityTwo,
    checkImg: subscriptionpremiumcheckimg,
    limit: aboutPageStrings.premiumplanLimitTwo,
    checkImg: subscriptionpremiumcheckimg,
    planvalidity: aboutPageStrings.premiumPlanvalidityTwo,
  },

  {
    numberOfTags: aboutPageStrings.numberOfTagsThree,
    price: aboutPageStrings.premiumPlanPriceThree,
    validity: aboutPageStrings.premiumPlanValidityThree,
    checkImg: subscriptionpremiumcheckimg,
    limit: aboutPageStrings.premiumplanLimitThree,
    checkImg: subscriptionpremiumcheckimg,
    planvalidity: aboutPageStrings.premiumPlanvalidityThree,
  },

  {
    numberOfTags: aboutPageStrings.numberOfTagsFour,
    price: aboutPageStrings.premiumPlanPriceFour,
    validity: aboutPageStrings.premiumPlanValidityFour,
    checkImg: subscriptionpremiumcheckimg,
    limit: aboutPageStrings.premiumplanLimitFour,
    checkImg: subscriptionpremiumcheckimg,
    planvalidity: aboutPageStrings.premiumPlanvalidityFour,
  },

  {
    numberOfTags: aboutPageStrings.numberOfTagsFive,
    price: aboutPageStrings.premiumPlanPriceFive,
    validity: aboutPageStrings.premiumPlanValidityFive,
    checkImg: subscriptionpremiumcheckimg,
    limit: aboutPageStrings.premiumplanLimitFive,
    checkImg: subscriptionpremiumcheckimg,
    planvalidity: aboutPageStrings.premiumPlanvalidityFive,
  },
];

const productCategoriesHeadingData = [
  { productCategoryHeading: productPageStrings.allProductsHeading },
  { productCategoryHeading: productPageStrings.productCategoryOne },
  { productCategoryHeading: productPageStrings.productCategoryTwo },
  { productCategoryHeading: productPageStrings.productCategoryThree },
];

const productsData = [
  {
    productImg: productoneimg,
    productHeading: 'Keychain tags - A pack of 4',
    productOfferPrice: '$ 89.00 ',
    productOriginalPrice: '$ 119.00 ',
  },

  {
    productImg: producttwoimg,
    productHeading: 'Regular tags - A pack of 4',
    productOfferPrice: '$ 45.00 ',
    productOriginalPrice: '$ 60.00  ',
  },

  {
    productImg: producttwoimg,
    productHeading: 'Regular tags - A pack of 4',
    productOfferPrice: '$ 45.00 ',
    productOriginalPrice: '$ 60.00',
  },

  {
    productImg: productoneimg,
    productHeading: 'Regular tags - A pack of 4',
    productOfferPrice: '$ 89.00 ',
    productOriginalPrice: '$ 119.00 ',
  },

  {
    productImg: productoneimg,
    productHeading: 'Regular tags - A pack of 4',
    productOfferPrice: '$ 89.00 ',
    productOriginalPrice: '$ 119.00 ',
  },
  {
    productImg: producttwoimg,
    productHeading: 'Regular tags - A pack of 4',
    productOfferPrice: '$ 45.00 ',
    productOriginalPrice: '$ 60.00 ',
  },
];

const productReviewData = [
  {
    rating: 4,
    ratedUserName: 'Rohith Meduri - Fri, 20 May 2022',
    ratedDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in, pretium pulvinar felis. Duis suscipit quis nisl nec consectetur. Donec scelerisque congue felis non volutpat. Etiam sed magna bibendum, pharetra diam aliquam, vehicula magna. Aenean non accumsan dolor, in porta lectus. Ut vel semper eros. Etiam dictum est sit amet urna vulputate, ut pulvinar quam dictum.',
  },
  {
    rating: 3,
    ratedUserName: 'Username - Thu, 19 May 2022',
    ratedDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in, pretium pulvinar felis. Duis suscipit quis nisl nec consectetur. Donec scelerisque congue felis non volutpat. ',
  },
  {
    rating: 4,
    ratedUserName: 'Username - Wed, 18 May 2022',
    ratedDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna. ',
  },
  {
    rating: 3,
    ratedUserName: 'Username - Thu, 19 May 2022',
    ratedDesc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in, pretium pulvinar felis. Duis suscipit quis nisl nec consectetur. Donec scelerisque congue felis non volutpat. ',
  },
];

const footerIconsData = [
  {
    footerSocialMediaImg: facebookicon,
    footerAltText: footerStrings.facebookAltText,
  },
  {
    footerSocialMediaImg: twittericon,
    footerAltText: footerStrings.twitterAltText,
  },
  {
    footerSocialMediaImg: instagramicon,
    footerAltText: footerStrings.instagramAltText,
  },
];

export {
  footerIconsData,
  eventsBuissnessData,
  starPlanData,
  premiumPlansData,
  productCategoriesHeadingData,
  productsData,
  productReviewData,
};
