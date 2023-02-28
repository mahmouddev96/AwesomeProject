import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image, 
  TouchableOpacity,
  Share,
  StyleSheet,
  SafeAreaView,
  Alert
} from 'react-native';
import AppImage from "../../../imgs";
import AntDesign from 'react-native-vector-icons/AntDesign';
import {launchCamera} from 'react-native-image-picker';
export const HomeScreen = ({navigation}) => {
  const [fileUri, setfileUri] = useState(false);
  launchCamera_ = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        setfileUri(source)
      }
    });

  }
  const onShare = async () => {

    try {
      const result = await Share.share({
        message:
          'Share Seller',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
   
  }
  return (
    <View  style={{ flex:1, backgroundColor: 'white',}} >
      <View style={{width:'100%',height:200}}>
      <Image
        style={{width:'100%',height:'100%'}}
        resizeMode='cover'
        source={AppImage.seller_background}
      />
      </View>
      
      <View style={{top:-20,flexDirection:'row',paddingHorizontal:10}}>
<View style={styles.Imageview}>
<Image
        style={{width:'100%',height:'100%',borderRadius:50,}}
        resizeMode='cover'
        source={AppImage.seller_avatar}
      />
<TouchableOpacity onPress={()=>launchCamera_()} style={styles.cameraview}>
<AntDesign name={'camera'} size={15} color="black" />
</TouchableOpacity>
</View>
<View style={styles.user_box}>
  <Text style={{fontWeight:'500'}}>Robert Fox Warren</Text>
  <View style={{flexDirection:'row',paddingTop:10}}>
    <View style={{width:20,height:20,borderRadius:50,}}>
    <Image
        style={{width:'100%',height:'100%'}}
        resizeMode='cover'
        source={AppImage.whatsapp}
      />
    </View>
    <View style={{width:20,height:20,borderRadius:50,left:-10}}>
    <Image
        style={{width:'100%',height:'100%',borderRadius:50}}
        resizeMode='cover'
        source={AppImage.insta}
      />
    </View>
    <View style={{width:20,height:20,borderRadius:50,left:-20}}>
    <Image
        style={{width:'100%',height:'100%'}}
        resizeMode='cover'
        source={AppImage.facebook}
      />
    </View>
  </View>
</View>
<TouchableOpacity style={styles.share} onPress={()=>onShare()}>
<AntDesign name={'sharealt'} size={20} color="black"  />
</TouchableOpacity>
      </View>
<View style={{width:'100%',justifyContent:'center',paddingHorizontal:25}}>
  <Text style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
 Imageview:{width:80,height:80,borderRadius:50,backgroundColor:'white', borderRadius: 50,
 shadowColor: Platform.OS === 'ios' ? '#56555596' : 'black',

shadowOffset: {
  width: 0,
  height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,},
cameraview:{zIndex:9,height:25,width:25,backgroundColor:'white',borderRadius:50,justifyContent:'center',alignItems:'center',position:'absolute', shadowColor: Platform.OS === 'ios' ? '#56555596' : 'black',
             
shadowOffset: {
  width: 0,
  height: 1,
},
shadowOpacity: 0.22,
shadowRadius: 2.22,},
user_box:{width:'68%',justifyContent:'center',flexDirection:'column',paddingTop:10,height:100,left:10},
share:{width:30,height:30,alignSelf:'center',justifyContent:'center',alignItems:'center'}
});
