import React, {useState, useEffect} from 'react';
import {
 View, KeyboardAvoidingView,
  Text, Image, 
  Animated,
 TextInput, 
 TouchableOpacity} 
 from 'react-native';
import styles from './styles';

import {useNavigation } from '@react-navigation/native';



function Landing(){

const {navigate} = useNavigation();

function handleNavigationToCadastro (){

        navigate('Cadastrar');
}
	return(
            <KeyboardAvoidingView style={styles.container}>

            <View style= {styles.img}>
            <Text style={styles.title}>
                Seja bem-vindo {'\n'}
            </Text>
            </View>

                <View style={styles.input}>

                    <TextInput style= {styles.inputText}
                    placeholder= "CNPJ"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />

                    <TextInput style= {styles.inputText}
                    placeholder= "Senha"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />
                    <TouchableOpacity  style={styles.buttonLogin}>
                        <Text style={styles.buttonTextLogin}>
                            Acessar
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress ={handleNavigationToCadastro}

                    style={styles.buttonCreate}>
                        <Text style={styles.buttonTextCreate}>
                            Criar conta
                        </Text>

                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        )

}

export default Landing;
