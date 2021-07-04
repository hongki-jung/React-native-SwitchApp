import React from 'react';

import {
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native';


const FooterButton = ({buttonText, style, onPress}) => {
    return(
        <>
            <TouchableOpacity
                style={[styles.ButtonContainer, style]}
                onPress={onPress}
            >
                <Image 
                source={require('./button.png')}
                style={styles.footerButton}
                />
                <Text
                    style={styles.footerButtonText}
                >
                     {buttonText}
                </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    footerButton:{
        width:315,
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    footerButtonText:{
        position:'absolute',
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        textAlign: 'center',
    },
    ButtonContainer:{
        alignItems:'stretch',
        justifyContent:'center',
    }
})



export default FooterButton
