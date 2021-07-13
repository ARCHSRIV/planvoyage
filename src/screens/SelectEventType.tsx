import React, { memo, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import  GlobalHeader  from '../components/GlobalHeader';
import  GlobalFooter  from '../components/GlobalFooter';
import { Appbar } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const SelectEventType = ({ navigation }: Props) => {
  

//     navigation.navigate('CorporateScreen');
// };

  return(
    
      <KeyboardAwareScrollView>
      <View style={{ minHeight: 750 }}>
         {/* <Background > */}
      <BackButton goBack={() => navigation.navigate('RegisterScreen')}/>
      
      
      <GlobalHeader primaryHeading="CORPORATE" secondaryHeading="- When, Where and How many?" />
      

      <Text style={styles.title}>Select Event Type</Text>
      
      <View style={{display: 'flex', alignItems:'center',justifyContent: 'center',
            padding: 20, margin: 20, marginBottom:500 }} >
      <View style={{width:'auto', flexDirection:'row'}}>

      <TouchableOpacity onPress={() => navigation.navigate('SocialScreen')}>
      <View style={styles.progressbox} >
      <Image style={styles.image} source={require('../assets/social.png')} />
      <Text style={styles.progressboxtext}> Social</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
      <View style={styles.progressbox}>
      <Image style={styles.image} source={require('../assets/corporate.png')}/>
      <Text style={styles.progressboxtext}>Corporate</Text>
      </View>
      </TouchableOpacity>
      
      </View>
      </View>
      
    {/* </Background>  */}
    <GlobalFooter/>
    </View>
    </KeyboardAwareScrollView>
    
    
  )
};

  const styles = StyleSheet.create({
    progressbox:{
      alignContent:"center",
      borderColor:"#00c2cb",
      borderWidth:1,
      borderRadius:5,
      width: 100,
      height: 75,
      textAlign:'center',
      margin: 10
      },
      progressboxtext:{
        fontWeight:'bold',
        fontSize:10,
        color: theme.colors.primary,
        textAlignVertical:'bottom',
        position:'absolute',
        left:'30%',
        bottom:10
      },
      image: {
        alignContent:"center",
        width: 15,
        height: 15,
        position: 'absolute',
        top: 35,
        left: 15,
        zIndex: 2
      },
      title:{
        fontSize:14,
        margin:'auto'
      }  
  });

export default memo(SelectEventType);