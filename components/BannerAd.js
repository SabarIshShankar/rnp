import React, { Component } from 'react';
import { Text, View, Platform, Button, StyleSheet } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
class BannerAd extends Component {
  constructor(props){
    super(props);
    this.bannerAdId = Platform.OS === 'ios' ? "" : "ca-app-pub-1864447827947291/5332493208";
    this.interstitialAdId = Platform.OS === 'ios' ? "" : "ca-app-pub-1864447827947291/4364161930";
  }
  async componentDidMount(){
    AdMobInterstitial.setAdUnitID(this.interstitialAdId);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
    await AdMobInterstitial.showAdAsync();
    }
  render(){
    return( 
      <View style={styles.container}>
      <Text>Open up to start working jelous apples</Text>
      <AdMobBanner bannerSize="banner"
      adUnitID={this.bannerAdId}
      servePersonalizedAds={false}/>
      </View>
       );
      }
}    
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
})
export default BannerAd;
