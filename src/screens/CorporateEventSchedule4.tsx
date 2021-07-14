import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from 'react-native';
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
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
    navigation: Navigation;
};

const CorporateEventSchedule4 = ({ navigation }: Props) => {
    const [checked, setChecked] = useState('No');
return ( 
<KeyboardAwareScrollView>
    <View style={{ minHeight: 750 }}>
        <GlobalHeader primaryHeading="CORPORATE" secondaryHeading="- When, Where and How many?" />
        <View>
            <ProgressBar progress={0.22} color={Colors.blue200} style={styles.progressbar} />
            <Text style={styles.progressbartext}>22%</Text>
        </View>

        <View style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
                    margin: 0 }}>
                    <View style={{ width: 'auto', flexDirection: 'row' }}>

                        <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
                            <View style={styles.progressbox}>
                                <Image style={styles.image} source={require('../assets/check.png')} />
                                <Text style={styles.progressboxtext}>WHEN</Text>
                            </View>
                            <Text>When ,Wheree And Howmany ?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('explore')}>
                            <View style={styles.progressbox}>
                                <Image style={styles.image} source={require('../assets/when.png')} />
                                <Text style={styles.progressboxtext}>EXPLORE</Text>
                            </View>
                            <Text >Let's ballpark your budget</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('program')}>
                            <View style={styles.progressbox}>
                                <Image style={styles.image} source={require('../assets/when.png')} />
                                <Text style={styles.progressboxtext}>PROGRAM</Text>
                            </View>
                            <Text >What program elements do you wish to include ?</Text>
                        </TouchableOpacity>
                    </View>
        </View>

            <Text style={styles.title}>HOW WILL YOU AND YOUR GUESTS ARRIVE AT HOTEL ?</Text>


            <Text style={styles.title}>will you want to provide transportation to and from the airport ?</Text>
                <View style={styles.radiocontainer}>
                    <RadioButton
                        value="Yes"
                        status={checked === 'Yes' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('Yes')} />
                    <Text style={{ paddingTop: 6 }}> Yes </Text>
                    <RadioButton
                        value="No"
                        status={checked === 'No' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('No')} />
                    <Text style={{ paddingTop: 6 }}> No </Text>
                </View>

                
                <View style={styles.content}>
                <TextInput label="Please provide as much detail as possible" returnKeyType="done"/>
                </View> 

                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: 20, margin: 0}}>
                    <View style={{ width: 'auto', flexDirection: 'row' }}>
                        <Button onPress={() => navigation.navigate('CorporateEventSchedule3')} mode="contained" style={styles.button}>
                            BACK
                        </Button>
                        <Button onPress={() => navigation.navigate('CorporateEventSchedule5')} mode="contained" style={styles.button}>
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
    left: '30%',
    bottom: 10,
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
    content: {
    width: '90%',
    maxWidth: 420,
    margin: 'auto',
},
    icon: {
    width: 15,
    height: 15,
    position: 'absolute',
    top: 30,
    left: 15,
    zIndex: 2,
}
});

export default memo(CorporateEventSchedule4);