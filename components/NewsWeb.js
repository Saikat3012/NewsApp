import React,{useState} from 'react';
import { WebView } from 'react-native-webview';
import { View,Text,ActivityIndicator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const NewsWeb = ({ route, navigation }) => {
  const [loading,setLoading]=useState(true)
  const RenderLoadingView=()=> {
    return (
    
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
  );
}
    const url=route.params
  return (<View style={{ flex: 1 ,backgroundColor:'#758'}}>
      <RenderLoadingView/>
      <WebView
        source={{ uri: url }}
        onLoad={()=>setLoading(false)}
        style={{ marginTop: 5 }}
      />
      </View>
    );
}
export default NewsWeb;