import React,{useState} from 'react';

import {View,
    Text,
    StyleSheet,
    Image,

} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { TouchableOpacity } from 'react-native-gesture-handler';

const MainScreen = ({navigation}) => {

    const [isSwitchTurn,setIsSwitchTurn] = useState(false);

    const handleChangeSwitch =()=>{
        setIsSwitchTurn(!isSwitchTurn)
    }
   

    return(
        <>

            <View style={styles.container}>
                <Text style={styles.description}>
                     REMOTE{"\n"} SWITCH 
                </Text>
                
                <TouchableOpacity
                    onPress={() => {navigation.navigate('Setting')}}
                >
                    <AntDesign 
                        name='setting'
                        color="#5B5A5A" 
                        size={30}
                    />
                </TouchableOpacity>
               
                <TouchableOpacity
                    onPress={handleChangeSwitch}>

                   {isSwitchTurn && <Image
                        source={require('./on.png')}
                        style={styles.icon}
                    />}

                    {!isSwitchTurn && <Image
                         source={require('./off.png')}
                        style={styles.icon}
                    />}

                </TouchableOpacity>
            </View>

        </>

    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#D8D8D8'
    },
    icon:{
        width: 185,
        height: 300,
        marginTop: 30,
    },
    description:{
        fontSize:16,
        color:'#5B5A5A',
        textAlign:'center',
        marginBottom: 40,
    }
});


export default MainScreen;