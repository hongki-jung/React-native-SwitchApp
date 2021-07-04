import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';

import FooterButton from './components/FooterButton';

const SignupScreen = ({navigation})=>{


    const [email, setEmail] = useState('이메일')
    const [password, setPassword] = useState('비밀번호')
    const [name, setName] = useState('이름')
    const [phone, setPhone] = useState('전화번호')


    const handleChangeEmail = (e)=>{setEmail(e.target)}
    const handleChangePassword = (e)=>{setPassword(e.target)}
    const handleChangeName = (e)=>{setName(e.target)}
    const handleChangePhone = (e)=>{setPhone(e.target)}

    return(

        <>
            <View style={styles.container}>

                <Text style={styles.switchText}>SWITCH{"\n"} 계정 만들기 </Text>

                <TextInput style={styles.TextInputButton} onChageText={handleChangeEmail} placeholder={email}/>
                <TextInput style={styles.TextInputButton} secureTextEntry={true} onChageText={handleChangePassword} placeholder={password}/>
                <TextInput style={styles.TextInputButton} onChageText={handleChangeName} placeholder={name}/>
                <TextInput style={styles.TextInputButton} onChageText={handleChangePhone} placeholder={phone}/>

                <Text style={styles.descriptionText}> 회원가입 시 이용약관에 동의한 것으로 간주합니다. </Text>
                <FooterButton 
                    style={styles.signupButton}
                    buttonText="회원가입"
                    onPress={()=>{navigation.navigate('Home')}}
                />
            </View> 


        </>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8'
    },
    switchText:{
        fontSize: 16,
        color: '#5B5A5A',
        marginTop: 81,
        textAlign:'center',
        marginBottom:115,
    },
    TextInputButton:{
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50,
    },
    descriptionText: {
        marginTop:20,
        color:'#5B5A5A',
        fontWeight:'200',
    },
    signupButton:{
        marginTop: 97.5,
    }


})
export default SignupScreen;