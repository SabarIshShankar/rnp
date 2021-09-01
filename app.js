import React, {Component} from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

import AssetExample from './components/AssetExample';
import { Card } from 'react-native-paper';

export default class App extends Component {
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
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
