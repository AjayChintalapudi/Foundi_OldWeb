import {
  eventsbuissnessimgone,
  eventsbuissnessimgtwo,
  facebookicon,
  instagramicon,
  subscriptioncheckimg,
  subscriptionpremiumcheckimg,
  twittericon,
} from 'resources/Images/Images';
import { strings } from 'resources/Strings/eng';
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

export { footerIconsData, eventsBuissnessData, starPlanData, premiumPlansData };
