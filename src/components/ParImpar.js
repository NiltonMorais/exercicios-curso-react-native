import React from 'react';
import { View, Text} from 'react-native';
import Default from '../style/Default';

function parOuImpar(num){
    const n = num % 2 == 0 ? 'Par' : 'Impar';
    return <Text style={Default.exercices}>{n}</Text>
}

export default props =>
    <View>
        {parOuImpar(props.number)}
    </View>
