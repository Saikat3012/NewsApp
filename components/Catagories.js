import React ,{useState,useEffect}from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
    H3,
    H1
} from 'native-base';

import AsyncStorage from '@react-native-community/async-storage';


const Catagories = ({route,navigation}) => {
  useEffect(() => {
    tempCheck()

  }, []);
  var newsApi=''
  const tempCheck=async()=>{
      const tempApi =await AsyncStorage.getItem('@news_api')
    console.log('jsonhii: ' + tempApi)
    console.log(tempApi)
    const back=(route.params===undefined)?true:route.params
    console.log("5555: "+route.params)
      if (back && tempApi) {
                // console.log('jsonhii777: '+tempApi)
        navigation.replace("NewsScreen")
      }
  }
  

//   const [catPage,setCatpage]=useState(true)
  var catagories=''
//   const [newsApi,setNewsApi]=useState('');
  
  // const newsApi=`https://newsapi.org/v2/top-headlines?country=in&category=${catagories}&apiKey=b104873df58d421f81d609984eb39b25`
    const [business,setBusiness]=useState(false);
    const [entertainment,setEntertainment]=useState(false);
    const [general,setGeneral]=useState(false);
    const [health,setHealth]=useState(false);
    const [science,setScience]=useState(false);
    const [sports,setSports]=useState(false);
    const [technology,setTechnology]=useState(false);
    
    

    


    const checkSubmit=(catagoryTrue)=>{
      if(catagories===''){
        catagories= catagories+catagoryTrue
      }else{
        if(!catagories.includes(catagoryTrue)){
          catagories= catagories+'&'+catagoryTrue
      }
      }
    }
    
    const submit= async()=>{
      if(business){
        checkSubmit('business')
      }
      if(entertainment){
        checkSubmit('entertainment')
      }
      if(general){
        checkSubmit('general')
      }
      if(health){
        checkSubmit('health')
      }
      if(science){
        checkSubmit('science')
      }
      if(sports){
        checkSubmit('sports')
      }
      if(technology){
        checkSubmit('technology')
      }
      newsApi=`https://newsapi.org/v2/top-headlines?country=in&category=${catagories}&apiKey=b104873df58d421f81d609984eb39b25`
        await AsyncStorage.setItem('@news_api', newsApi)
      newsApi = ''
        navigation.popToTop()
        navigation.replace("NewsScreen")
    //   setCatpage(false)
    } 

  return (
    <ScrollView style={styles.container}>
        <View style={styles.circle}/>
        <View style={styles.front}>
          <H1 style={{
            fontFamily: 'Roboto',
            alignSelf: 'center',
            marginBottom: 12,
            color: '#fff',
            borderColor: '#fff',
            paddingLeft:18,
            borderWidth: 5,
            paddingRight:10,
            paddingBottom: 10,
            paddingTop:18,
            borderRadius:50
          }}>Select Catagories</H1>
          <TouchableOpacity
        style={[styles.cata,{backgroundColor:general?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setGeneral(!general)}}>
          <H3 style={{color:general?'#fff':'#000'}}>general</H3>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.cata,{backgroundColor:business?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setBusiness(!business)}}>
          <H3 style={{color:business?'#fff':'#000'}}>business</H3>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.cata,{backgroundColor:entertainment?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setEntertainment(!entertainment)}}>
          <H3 style={{color:entertainment?'#fff':'#000'}}>entertainment</H3>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.cata,{backgroundColor:health?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setHealth(!health)}}>
          <H3 style={{color:health?'#fff':'#000'}}>health</H3>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.cata,{backgroundColor:science?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setScience(!science)}}>
          <H3 style={{color:science?'#fff':'#000'}}>science</H3>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.cata,{backgroundColor:sports?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setSports(!sports)}}>
          <H3 style={{color:sports?'#fff':'#000'}}>sports</H3>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.cata,{backgroundColor:technology?'#9fa32f':'#f4fc03'}]}
        onPress={()=>{setTechnology(!technology)}}>
          <H3 style={{color:technology?'#fff':'#000'}}>technology</H3>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          submit()
          // console.log(newsApi)         
        }}>
          <H1 style={styles.submitBtn}>Submit</H1>
        </TouchableOpacity>       
        </View>        
    </ScrollView>
  );
};
export default Catagories;




const styles = StyleSheet.create({
  container:{
    backgroundColor:'#3cc6c3',
  },
  circle:{
    width:1000,
    height:1000,
    marginStart:-350,
    marginTop:-550,
    backgroundColor:'#03fcd1',
    borderRadius:25000,
  },
  front:{
    marginTop:-420,
    justifyContent: 'center',
    alignContent:'center'
  },
  cata:{
    alignSelf:'center',
    paddingHorizontal:10,
    padding:10,
    borderRadius:70,
    marginBottom:12,
  },
  submitBtn:{
    backgroundColor:'#0676f9',
    alignSelf:'center',
    paddingTop:20,
    paddingBottom:10,
    paddingHorizontal:35,
    borderRadius:70,
    marginTop:18,
    fontSize: 40,
    marginBottom:15,
  },
});