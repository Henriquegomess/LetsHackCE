import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';

import backIcon from './back.png';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Voltar(){

    const {navigate} = useNavigation(); 

    function handleGoBack(){
        navigate('Landing');
    }

    return( 
     <View style={styles.container}> 
        <View style={styles.topBar}> 
            <BorderlessButton onPress={handleGoBack}>  

                 <Image source={backIcon} resizeMode="contain" />


            </BorderlessButton>

        </View>
    </View>
    )


}
export default Voltar;