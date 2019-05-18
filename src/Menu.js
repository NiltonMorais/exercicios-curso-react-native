import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simple from './components/Simple';
import ParImpar from './components/ParImpar';
import { Reverse, RandNumbers } from './components/Mult';
import Count from './components/Count';
import Platform from './components/Platform';
import PropsValidate from './components/PropsValidate';
import Event from './components/Event';

export default createDrawerNavigator({
    Event: {
      screen: Event
    },
    PropsValidate: {
      screen: () => <PropsValidate year={18}/>
    },
    Platform: {
        screen: Platform
    },
    Count: {
        screen: () => <Count startNumber={8} />
    },
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
