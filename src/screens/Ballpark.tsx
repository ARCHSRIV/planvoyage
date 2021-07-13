import React, { memo, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import {
  ProgressBar,
  Colors
} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';
import { RadioButton } from 'react-native-paper';
import Button from '../components/Button';

type Props = {
  navigation: Navigation;
};

const Ballpark = ({ navigation }: Props) => {
  const [checked, setChecked] = useState('No');

  return (

    <KeyboardAwareScrollView>
      <View style={{ minHeight: 750 }}>
        <GlobalHeader primaryHeading=" CORPORATE " secondaryHeading="- Let's ballpark your budget  " />
        <View>
          <ProgressBar
            progress={0.07}
            color={Colors.blue200}
            style={styles.progressbar}
          />
          <Text style={styles.progressbartext}>7%</Text>
        </View>
        <View
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
            margin: 0 }}>
          <View style={{ width: 'auto', flexDirection: 'row' }}>
          <View style={{width:'30%', alignContent:'center'}}>
              <View style={styles.progressbox}>
              <Image
                style={styles.image}
                source={require('../assets/check.png')}
              />
              <Text style={styles.progressboxtext}></Text>
            </View>
              <Text>When,Where And How many? </Text>
            </View>


            <View style={{width:'30%'}}>
              <View style={styles.progressbox}>
                <Image
                  style={styles.image}
                  source={require('../assets/program.png')}
                />
                <Text style={styles.progressboxtext}>BALLPARK</Text>
              </View>
              <Text>Let's ballpark your budget</Text>
            </View>

            <View style={{width:'30%'}}>
              <View style={styles.progressbox}>
                <Image
                  style={styles.image}
                  source={require('../assets/program.png')}
                />
                <Text style={styles.progressboxtext}>PROGRAM</Text>
              </View>
              <Text>What program elements do you wish to include?...</Text>
            </View>
          </View>
          <Text style={styles.title}>LETS BALLPARK YOUR BUDGET </Text>
        </View>



        <View style={styles.radiocontainer}>
          <RadioButton value="Yes" status={checked === 'Yes' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Yes')}/>
          <Text style={{ paddingTop: 6 }}> Casual Event </Text>
        </View>

        <View style={styles.radiocontainer}>
          <RadioButton value="Yes" status={checked === 'Yes' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Yes')}/>
          <Text style={{ paddingTop: 6 }}>Gala</Text>
        </View>

        <View style={styles.radiocontainer}>
          <RadioButton value="Yes" status={checked === 'Yes' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('Yes')}/>
          <Text style={{ paddingTop: 6 }}>Somewhere in the Middle</Text>
        </View>

        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
          margin: 0}}>
          <View style={{ width: 'auto', flexDirection: 'row' }}>
            <Button onPress={() => navigation.navigate('CorporateHowmany')} mode="contained" style={styles.button}>
              BACK
            </Button>
            <Button onPress={() => navigation.navigate('BallparkProgElements')} mode="contained" style={styles.button}>
              NEXT
            </Button>
          </View>
        </View>

        <GlobalFooter />

      </View>
    </KeyboardAwareScrollView>

  );
};

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
    left: '30%',
    bottom: 10,
  },
  button: {
    margin: 10,
    maxWidth: 100,
  },
  title: {
    fontSize: 14,
    margin: 'auto',
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
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
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
  }
});

export default memo(Ballpark);