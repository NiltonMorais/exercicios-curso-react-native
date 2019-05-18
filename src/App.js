import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Simples from './components/Simple';
import ParImpar from './components/ParImpar';
import { Reverse, RandNumbers } from './components/Mult'

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples text='Flexivo!!' />
                <ParImpar number={32}></ParImpar>
                <Reverse text='React Native'></Reverse>
                <RandNumbers numbers={6}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    f20: {
        fontSize: 40
    }
});


