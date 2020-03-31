import React from "react";
import { AdMobBanner } from "expo-ads-admob";

export default Ads = () => {
  return (
    <AdMobBanner
      adUnitID={
        __DEV__
          ? "ca-app-pub-3940256099942544/6300978111" // テスト広告
          : Platform.select({
              ios: "ca-app-pub-2659333027229908/3197184147",
              android: "ca-app-pub-2659333027229908/3197184147" // android
            })
      }
      onDidFailToReceiveAdWithError={this.bannerError}
    />

    // <AdMobBanner
    //   bannerSize="fullBanner"
    //   adUnitID="ca-app-pub-2659333027229908/3197184147"
    //   testDeviceID="EMULATOR"
    //   servePersonalizedAds // true or false
    //   onDidFailToReceiveAdWithError={this.bannerError}
    // />
  );
};
