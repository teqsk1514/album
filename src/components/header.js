import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {

    const { textStyle, viewStyles } = styles;

    return (
        <View style={viewStyles}>
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
    );
};

const styles = {

    viewStyles: {
        backgroundColor: '#D8D8D8',
        justiyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 10,
        position: 'relative'

    },

    textStyle: {
        fontSize: 20,
        color: '#000',
        // boxShadow: '0px 0px 16px 0px rgba(0,0,0,0.75)'
    }
}

export default Header;