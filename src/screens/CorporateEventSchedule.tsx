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

const CorporateEventSchedule = ({ navigation }: Props) => {
return (
    <KeyboardAwareScrollView>
        <View style={{ minHeight: 750 }}>
            <GlobalHeader primaryHeading="CORPORATE" secondaryHeading="- When, Where and How many?" />
                <View>
                    <ProgressBar progress={0.15} color={Colors.blue200} style={styles.progressbar} />
                    <Text style={styles.progressbartext}>15%</Text>
                </View>

                <View style={{display:'flex', alignItems:'center', justifyContent:'center', padding: 20,
                    margin: 0}}>
                <View style={{ width:'auto', flexDirection:'row'}}>
                

                    <TouchableOpacity onPress={() => navigation.navigate('CorporateWhen')}>
                    <View style={styles.progressbox}>
                        <Image style={styles.image} source={require('../assets/check.png')} />
                        <Text style={styles.progressboxtext}>WHEN</Text>
                    </View>
                    </TouchableOpacity>
                        {/* <Text>Let's ballpark your budget </Text> */}

                        
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>DRAG</Text>
                        </View>
                        {/* <Text >Drag and drop your selections into the PV </Text> */}

                        
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>LET'S TALK</Text>
                        </View>
                        {/* <Text >Drag and drop your selections into the PV </Text> */}

                </View>
                </View>
                

                <Text style={styles.title}>DRAG AND DROP YOUR SELECTION INTO THE SO WE KNOW WHEN YOU NEED US</Text>

                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
                    margin: 0}}>
                    <Text style={styles.title}>Day 1 (ex. Tuesday September 6th)</Text>
                    <View style={{ width: 'auto', flexDirection: 'row' }}>
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>MORNING</Text>
                        </View>
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>AFTERNOON</Text>
                        </View>
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>EVENING</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
                    margin: 0
                }}>
                    <Text style={styles.title}>Day 2 </Text>
                    <View style={{ width: 'auto', flexDirection: 'row' }}>
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>MORNING</Text>
                        </View>
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>AFTERNOON</Text>
                        </View>
                        <View style={styles.progressbox}>
                            <Image style={styles.image} source={require('../assets/when.png')} />
                            <Text style={styles.progressboxtext}>EVENING</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.title}>Etc. Amount of days based on dates given</Text>

                <View style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: 20, margin: 0
                }}>
                    <View style={{ width: 'auto', flexDirection: 'row' }}>
                        <Button onPress={() => navigation.navigate('BallparkProgElements')} mode="contained" style={styles.button}>
                            BACK
                        </Button>
                        <Button onPress={() => navigation.navigate('CorporateEventSchedule2')} mode="contained" style={styles.button}>
                            NEXT
                        </Button>
                    </View>
                </View>

                <GlobalFooter />
            </View>
        </KeyboardAwareScrollView>
    )
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
    }
});


export default memo(CorporateEventSchedule);