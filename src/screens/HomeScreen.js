

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import DetailsScreen from './DetailsScreen';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: 'yellow'
        }
    };

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}> Home </Text>

                <TouchableOpacity
                    style={[styles.buttonStyle]}
                    onPress={() => navigation.navigate('DetailsScreen', {
                        title: 'Detail Header 1',
                    })}>
                    <Text style={styles.buttonTextStyle}>Go to Detail Header 1</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonStyle]}
                    onPress={() => navigation.navigate('DetailsScreen', {
                        title: 'Detail Header 2',
                    })}>
                    <Text style={styles.buttonTextStyle}>Go to Detail Header 2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.buttonStyle]}
                    onPress={() => navigation.navigate('Modal', {
                        title: 'Modal Header 1',
                    })}>
                    <Text style={styles.buttonTextStyle}>Go to Modal</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#acc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold'
    },
    buttonTextStyle: {
        fontSize: 15,
        margin: 5,
        fontWeight: 'bold'
    },
    buttonStyle: {
        margin: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
        borderRadius: 10
    }
});

    //* {JSON.stringify(itemId)}  Map yaspısı olarak alınan parametreli bu yapı ile kullanabiliriz.


/**
 * 
 * 
 * 
* * Öerneğin
    user: {
    id: 'jane',
    firstName: 'Jane',
    lastName: 'Done',
    age: 25,
},


 */