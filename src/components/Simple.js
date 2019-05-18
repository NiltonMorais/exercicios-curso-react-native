import React from 'react';
import { Text } from 'react-native';
import Default from '../style/Default';

export default (props) => {
    return <Text style={Default.exercices}>Arrow: {props.text}</Text>
}
