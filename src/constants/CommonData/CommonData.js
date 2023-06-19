import {
  facebookicon,
  instagramicon,
  twittericon,
} from 'resources/Images/Images';
import { Strings } from 'resources/Strings/eng';
const { footerStrings } = Strings;
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

export { footerIconsData };
