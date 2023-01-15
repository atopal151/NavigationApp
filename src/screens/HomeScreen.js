

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import DetailsScreen from './DetailsScreen';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: 'Home',
        headerStyle:{
            backgroundColor:'yellow'
        }
    };

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}> Home Screen </Text>
                <Button title='Haber 1'
                    onPress={() => navigation.navigate('DetailsScreen', {
                        title: 'Detail Header 1',
                    })} />

                <Button title='Haber 2'
                    onPress={() => navigation.navigate('DetailsScreen', {
                        title: 'Detail Header 2',
                    })} />
                     <Button title='Modal 1'
                    onPress={() => navigation.navigate('Modal', {
                        title: 'Modal Header 1',
                    })} />
 
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
        fontSize: 25,
        margin: 50,
        fontWeight: 'bold'
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