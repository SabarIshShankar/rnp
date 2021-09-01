import React, { Component } from 'react';
import { Text, View, Platform, Button, StyleSheet, TextInput, StatusBar, ScrollView } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';
import Images from './images';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo-ads-admob';
import BannerAd from './components/BannerAd';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

class App extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        searchKeywords: ''
      };
  }
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#FFC107'
    },
    headerTintColor: '#fff'
  };
  FunctionToOpenSecondActivity = () => {
    this.props.navigation.navigate('Second', {
      searchQuery: this.state.seachKeywords
    });
  }
  render(){
    return( 
      <View style={styles.container}>
      <StatusBar barStyle="light-content">
      <ScrollView keyboardShouldPersistTaps="never">
      <TextInput style={styles.input}
      value={this.state.searchKeywords} 
      onChangeText={searchKeywords => this.setState({
        searchKeywords
      })}
      ref={ref => {this._nameInput = ref}}
      placeholder = "Type a keword"
      autoFocus={true}
      autoCapitalize="words"
      autoCorrect={true}
      keyboardType="default"
      returnKeyType="next"
      onSubmitEditing={this._next}
      blurOnSubmit={false}
      />
      <Button
      borderRadius={2}
      containerViewStyle={{borderRadius: 2}}
      buttonStyle={{
        height: 40,
        width: 200,
        alignSelf: 'center', marginVertical: 8, backgroundColor: '#E17139'
      }}
      onPress={this.FunctionToOpenSecondActivty}
      title={'Search images'}
      />
      <BannerAd style={styles.ad}/>
      </ScrollView>
      </StatusBar>
      
      
      </View>
       );
      }
}    

export default Project = createStackNavigator(
  {
    First: {
      screen: App
    },
    Second: {
      screen: Images
    }
  }
);

const styles = StyleSheet.create({
  input: {
    margin: 20,
    marginBottom: 0,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 16
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'

  },
  ad: {
    flex:1,
    marginLeft: 2,
  }
})

