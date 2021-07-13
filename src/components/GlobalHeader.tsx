import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image,Text } from 'react-native';
import { theme } from '../core/theme';
import { Heading } from '../types';
import { Appbar, ProgressBar, Colors, BottomNavigation } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  Footer  from './GlobalFooter';
import  Header  from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

import Background from '../components/Background';
import Icon from 'react-native-vector-icons/FontAwesome';
type Props = {
  primaryHeading: Heading;
  secondaryHeading: Heading;
};  

const GlobalHeader = ({ primaryHeading, secondaryHeading  }: Props) => {

  return (
    <View >
      <Appbar.Header style={{ alignSelf:"flex-start"}}>
        <Appbar.Content 
            title={<Text style={{color: "#00c2cb", fontSize: 14, display:'inline'}}>{primaryHeading}</Text>}
            style={{marginLeft:10,padding:0,position:'absolute'}}
        />
            <Appbar.Content 
            title={<Text style={{color: "white", fontSize: 14}}>{secondaryHeading}</Text>}
            style={{marginLeft:90}}
        />
        <Icon name="bars" size={20} color="#fff" style={styles.pr10}/>
      </Appbar.Header>
    </View>
      )
    };
      
    const styles = StyleSheet.create({
      
      pr10:{
      paddingRight:10 
      },
      
    });
    export default memo(GlobalHeader);
    