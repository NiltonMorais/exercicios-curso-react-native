import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simple from './components/Simple';
import ParImpar from './components/ParImpar';
import { Reverse, RandNumbers } from './components/Mult';

export default createDrawerNavigator({
    RandNumbers: {
        screen: () => <RandNumbers numbers={8}/>,
        navigationOptions: { title: 'Números Randômicos'}
    },
    Reverse: {
        screen: () => <Reverse text='React Native!'/>,
    },
    ParImpar: {
        screen: () => <ParImpar number={30} />,
        navigationOptions: { title: 'Par & Impar'}
    },
    Simple: {
        screen: () => <Simple text='Flexivel' />
    },
},{drawerWidth: 300});