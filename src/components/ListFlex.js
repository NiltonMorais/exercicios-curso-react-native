import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const students = [
    {id: 1, name: 'João', note: 7},
    {id: 2, name: 'Ana', note: 8.9},
    {id: 3, name: 'Paula', note: 5.4},
    {id: 4, name: 'Roberto', note: 2},
    {id: 5, name: 'Bruna', note: 6},
    {id: 6, name: 'Nilton', note: 1},
    {id: 7, name: 'Júnior', note: 4},
    {id: 8, name: 'Nina', note: 5.6},
    {id: 9, name: 'Nita', note: 7.2},
    {id: 10, name: 'Fadson', note: 7.2},
    {id: 11, name: 'João', note: 7},
    {id: 12, name: 'Ana', note: 8.9},
    {id: 13, name: 'Paula', note: 5.4},
    {id: 14, name: 'Roberto', note: 2},
    {id: 15, name: 'Bruna', note: 6},
    {id: 16, name: 'Nilton', note: 1},
    {id: 17, name: 'Júnior', note: 4},
    {id: 18, name: 'Nina', note: 5.6},
    {id: 19, name: 'Nita', note: 7.2},
];

const itemStyle = {
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',


    // Flex
    //justifyContent: 'center'
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

export const Student = props =>
    <View style={itemStyle}>
        <Text>Nome: {props.name}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.note}</Text>
    </View>;

export default props => {
    const renderItem = ({item}) => {
        return <Student {...item}/>
    };

    return (
        <ScrollView>
            <FlatList data={students} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}

