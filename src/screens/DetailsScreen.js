import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class DetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    static navigationOptions = ({ route }) => {
		return {
			title: route.params
		}
	};

    render() {

        //* Push = Navigationda yığının üzerine ekleyerek devam eder. 
        //* navigate = eğer details sayfası açıksa tekraraynı sayfayı yığına eklemiyor.
        //* goBack = Giriş yapılan sayfadan geri dönmek için goBack kullan.

        const { navigation, route } = this.props;
        const { title } = route.params;

        return (

            <View style={styles.container} >
                <Text style={styles.textStyle}>Title Text : {title}</Text>
                <Button title='Go To Details Page'
                    onPress={() => navigation.navigate('HomeScreen')} />

                <Button title='Go Back' onPress={() => navigation.goBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bcbc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 25,
        margin: 50,
        fontWeight: 'bold'
    },

});