import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Count extends Component {
    state = {
        number: this.props.startNumber
    };

    sumOne = () => {
        this.setState({number: this.state.number + 1});
    };

    clear = () => {
        this.setState({number: this.props.startNumber});
    };

    render() {
        return (
            <View>
                <Text style={{fontSize: 40}}>{this.state.number}</Text>
                <TouchableHighlight
                    onPress={this.sumOne}
                    onLongPress={this.clear}>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
