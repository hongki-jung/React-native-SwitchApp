import React, {useState, useEffect} from 'react';
import navigation from 'react';
import {
    View,
    Text ,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import FooterButton from './components/FooterButton'
const LoginScreen = ({navigation}) => {

    const [textId, setTextId] = useState('')
    const [textPw, setTextPw] = useState('')

    
    useEffect(()=>{

        submitLogin();

    },[FooterButton])

    const submitLogin = ()=>{

        fetch('http://localhost:4000/api/user/',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                ID:'1111asdf1',
                PASSWORD:'123asdf'
            })
            
        })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err))

        navigation.navigate('Main');
       
    }







    const onChangeId = (e) => {
        setTextId(e.target)
    }
    const onChangePw = (e)=>{
        setTextPw(e.target)
    }
    return (
        <>
            <View style={styles.container}>
   
                <Image source={require('./icon.png')}
                    style={styles.icon}
                />
                <Text style={styles.welcomeText}>환영합니다</Text>
                <TextInput 
                    style={styles.textInputButton}
                    onChangeText={onChangeId}
                    placeholder={'아이디'}
                />
                 <TextInput 
                    style={styles.textInputButton}
                    onChangeText={onChangePw}
                    placeholder={'비밀번호'}
                    secureTextEntry={true}
                />
                  <FooterButton
                        buttonText="로그인"
                        style={styles.loginButton}
                        onPress={submitLogin}
                  ></FooterButton>

                  <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
                  
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    >
                        <Text style={styles.makeAccountText}> 계정 만들기</Text>
                  </TouchableOpacity>
             
            </View>


        </>
    )
}


const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#D8D8D8',
   },
   icon:{
    width:60,
    height: 60,
    marginBottom: 70,
   },
   welcomeText:{
       fontSize:20,
       textAlign:'center',
       marginBottom: 23,
   },
   textInputButton:{
       width:288,
       borderColor: 'gray',
       paddingVertical: 10,
       borderWidth: 0.3,
       paddingHorizontal: 5,
       borderRadius: 2,
       backgroundColor: 'white',
       height:50

   },
   loginButton:{
       width: 315,
       height: 50,
       marginTop: 50,
   },
   noAccountText:{
       marginTop:30,
       fontSize: 12,
       color:'#5B5A5A',
   },
   makeAccountText:{
       fontSize:12,
       color:'#9013FE'
   }


});



export default LoginScreen



// const SignInPage = () => {
//     const [ userInfo, setUserInfo ] = useState({
//         id : '',
//         password: ''
//     })
//     // const [ userId, setUserId ] = useState('');
//     // const [ userPwd, setUserPwd ] = useState('');

//     const handleChangeInput = (name, value) => {
//         // console.log(type)
//         // console.log(value)
//         // type === 'password' ? setUserPwd(value) : setUserId(value)
//         setUserInfo({
//             ...userInfo,
//             [name]: value
//         })
//     }

//     const handleSubmit = () => {
  
//         getUserInfo(userInfo)
//     }

//     const getUserInfo = (data) => {
//         axios({
//             url : "https://tutorial.team-everywhere.com/api/user/signIn",
//             method : "post",        
//             data: data
//         })
//         .then(res => {
//             console.log(res) 
//             // responseData 전부 res.data.result == responseBody 데이터


//             // localStorage에 데이터 저장_ 브라우저에 저장되는 것이다.! - 로그아웃 전까지 가지고 있는다. 
//             // @param1 key  @param2 String
//             localStorage.setItem('userInfo', JSON.stringify(res.data.result));
            

//             // X parsing
//             let data1 = localStorage.getItem('userInfo')

//             // O parsing 
//             let data2 = JSON.parse(localStorage.getItem('userInfo'))
            
//             console.log('data1 ',data1) //  <- String
//             console.log('data2 ',data2) //  <- Object

            
//             // 만약 idx를 가져오고 싶다면?
//             // => data.idx
//         })
//         .catch(err => {
//             console.log(err)
//         });
//     }

   
//     const handleMove =()=>{
//         Router.push('/error','/signup')
//    }

 
//     useEffect(()=>{
//         let userInfo = JSON.parse(localStorage.getItem('userInfo'))
//         let data={
//             id: userInfo.id,
//             password:'1234'
//         }
//         getUserInfo(data)
//     },[])