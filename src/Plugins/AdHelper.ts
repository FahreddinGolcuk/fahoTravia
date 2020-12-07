import admob, {
  MaxAdContentRating,
  InterstitialAd,
  AdEventType,
} from '@react-native-firebase/admob';

//InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    console.log('yes');
    // Request config successfully set!
  });

const AdHelper = {
  showInterstitialAd() {
    const interstitial = InterstitialAd.createForAdRequest(
      'ca-app-pub-1457835335539533/4125661275',
    );

    interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        interstitial.show();
      }
    });

    interstitial.load();
  },
};

export default AdHelper;
