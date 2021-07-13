import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import {
  Appbar,
  ProgressBar,
  Colors,
  BottomNavigation,
} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  navigation: Navigation;
};

const BallparkProgElements = ({ navigation }: Props) => {
  return (
  <KeyboardAwareScrollView>
    <View style={{ minHeight: 750 }}>
      <GlobalHeader primaryHeading="CORPORATE" secondaryHeading="- When, Where and How many ? "/>
      <View>
        <ProgressBar progress={0.12} color={Colors.blue200} style={styles.progressbar}/>
        <Text style={styles.progressbartext}>12%</Text>
      </View>


      <View style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', padding: 20, margin: 0, }}>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/when.png')} />
              <Text style={styles.progressboxtext}>WHEN</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Ballpark')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>BALLPARK</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Program')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>PROGRAM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    <Text style={styles.title}>WHAT PROGRAM ELEMENTS DO YOU WISH TO INCLUDE ? WE CAN GET TO THE NITTY GRITTY LATER</Text>
      
    <View style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', padding: 20, margin: 0, }}>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/when.png')} />
              <Text style={styles.progressboxtext}>REGISTRATION DESK</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Ballpark')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>TRANSPORTATION DESK</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Program')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>BARTENDING</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', padding: 20, margin: 0, }}>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/when.png')} />
              <Text style={styles.progressboxtext}>OFF SITE VENUE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Ballpark')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>CATERING FOR OFFSITE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Program')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>DECOR/DESIGN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', padding: 20, margin: 0, }}>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/when.png')} />
              <Text style={styles.progressboxtext}>ENTERTAINMENT</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Ballpark')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>ACTIVITIES</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Program')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>DAY OF VENDOR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      <View style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', padding: 20, margin: 0, }}>
        <View style={{ width: 'auto', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/when.png')} />
              <Text style={styles.progressboxtext}>CLEANING</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Ballpark')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>SIGNAGE</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Program')}>
            <View style={styles.progressbox}>
              <Image style={styles.image} source={require('../assets/program.png')} />
              <Text style={styles.progressboxtext}>FAVORS/GIFTS</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
        <View style={{display:'flex', alignItems:'center', justifyContent:'center', padding: 20, margin: 0}}>
          <View style={{ width: 'auto', flexDirection: 'row' }}>
            <Button onPress={() => navigation.navigate('Ballpark')} mode="contained" style={styles.button}>
              BACK
            </Button>
            <Button onPress={() => navigation.navigate('CorporateEventSchedule')} mode="contained" style={styles.button}>
              NEXT
            </Button>
          </View>
        </View>

        <GlobalFooter/>


    </View>
  </KeyboardAwareScrollView>
     


)};

      const styles = StyleSheet.create({

        progressbox: {
        borderColor: '#00c2cb',
      borderWidth: 1,
      borderRadius: 5,
      width: 100,
      height: 75,
      textAlign: 'center',
      margin: 10,
  },
      progressboxtext: {
        fontWeight: 'bold',
      fontSize: 10,
      color: theme.colors.primary,
      textAlignVertical: 'bottom',
      position: 'absolute',
      left: 'auto',
      bottom: 10,
  },
      button: {
        margin: 10,
      maxWidth: 100,
  },
      headtitle: {
        fontSize: 14,
  },
      title: {
        fontSize: 14,
      margin: 'auto',
  },
      pr10: {
        paddingRight: 10,
  },
      progressbar: {
        height: 20,
  },
      progressbartext: {
        position: 'absolute',
      //  top:'-px',
      zIndex: 1,
      left: 20,
  },
      label: {
        color: theme.colors.primary,
  },
      row: {
        flexDirection: 'row',
      marginTop: 20,
  },
      link: {
        fontWeight: 'bold',
      color: theme.colors.secondary,
  },
      container: {
        flex: 1,
      padding: 20,
      width: '50%',
      maxWidth: 200,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
      radiocontainer: {
        width: '90%',
      maxWidth: 420,
      margin: 'auto',
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 10,
      borderColor: theme.colors.secondary,
  },
      image: {
        width: 27,
      height: 27,
      position: 'absolute',
      top: 15,
      left: 35,
      zIndex: 2,
  },
      icon: {
        width: 15,
      height: 15,
      position: 'absolute',
      top: 30,
      left: 15,
      zIndex: 2,
  },

});

      export default memo(BallparkProgElements);
