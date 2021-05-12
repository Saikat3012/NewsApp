import React ,{useState,useEffect,useLayoutEffect}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
    ActivityIndicator,
    BackHandler,
    Alert,Button
} from 'react-native';
// import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import Snackbar from 'react-native-snackbar';
// import {WebView} from 'react-native-webview';

const NewsScreen = ({ navigation }) => {
    const backToCatagories = () => {
        // AsyncStorage.removeItem('@news_api')
        navigation.navigate('Catagories', false)
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View>
                    <Button style={{paddingHorizontal:10}} title="Reset Preferences" onPress={() => backToCatagories()} />
                </View>
            )
        })
    })
    
    // const [loading,setLoading]=useState(true)
    var nApi = ''
    var [flag,setFlag]=useState(true)
    useEffect(() => {
        // console.log(nApi)
        getData()
        if (flag) {
            setTimeout(() =>
                fetchNews()
                , 1000);
            setFlag(false)
        }
    })
    const getData = async () => {
        nApi = await AsyncStorage.getItem('@news_api')
        console.log("huuuu: "+nApi)
    }
    const [newsData,setNewsData]=useState([])
    const fetchNews = async () => {
        try {
            // const nApi=await AsyncStorage.getItem('@news_api')
            console.log("Api: " + nApi)
            const { data } = await Axios.get(nApi);
            //   console.log(data.articles[9].title)
            setNewsData(data.articles)
            // console.log(newsData[0].title + "  :5858")
        } catch (error) {
            console.log(error)
            if (nApi !== '') {
                Snackbar.show({
                    text: 'Some error occurred',
                    duration: Snackbar.LENGTH_INDEFINITE,
                    backgroundColor: '#f10',
                    action: {
                        text: 'Retry',
                        textColor: 'green',
                        onPress: () => { fetchNews() },
                    },
                });
            }
        }
    }

    const Item = ({ neee }) => (
        
        <TouchableOpacity onPress={() => navigation.navigate("NewsWeb",neee.url)}>
            <View style={styles.item}>
                <Text style={styles.title}>{neee.title}</Text>
                <ActivityIndicator style={{ marginTop: 40 }} size="large" color="#fff" />
                <Image
                    resizeMode='contain'
                    // onLoad={()=>{setLoading(false)}}
                    source={{
                        uri: neee.urlToImage,
                        width: 350,
                        height: 200,
                    }}
                    style={styles.img}
                />
                <Text style={{ marginTop: 5,marginLeft:10,color:'#faa',fontSize:18}}>{neee.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const RenderNews = () => {
        const renderItem = ({ item }) => (
            <View>
                {/* {console.log(item + "  8989")} */}
                <Item neee={item} />
            </View>
        );
        return (
            <View style={{backgroundColor:'#202521',marginTop:15}}>
                <View style={{ marginVertical: 5 }}>
                    {/* <Text style={{ marginTop: 20 }}>{newsData[0].title}</Text> */}
                    <FlatList
                        data={newsData}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={{ marginTop: 20, backgroundColor:'#202521',flex:1,marginTop:-20}}>
            {newsData.length != 0 ? (<RenderNews />) : (<ActivityIndicator style={{marginTop:50}} size="large" color="#fff" color="#555" />)}
        </View>
    )
};



export default NewsScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#03FC6E',
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
    justifyContent:'center'
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
    marginTop:42,
    fontSize:40,
  },



  item: {
    backgroundColor: '#163c4a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
      borderRadius: 50,
      borderColor: '#fff',
    borderWidth:1
  },
  title: {
    fontSize: 22,
      color: '#fd6c08',
    marginLeft:10
  },
  img:{
    alignSelf: 'center',
    marginTop:-65
  },
});
