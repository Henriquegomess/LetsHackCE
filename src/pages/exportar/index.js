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



function Exportar(){
const {navigate} = useNavigation();
function Voltar (){
    navigate('Landing');
   }
	return(
            <KeyboardAvoidingView style={styles.container}>
            <View style={styles.Text}>
            <Text style={styles.title}>
                Você precisa cadastrar os dados da sua empresa: {'\n'}
            </Text>
            </View>
            

                <View style=
                {styles.input}>
                    <Text style={styles.Text}>
                    Digite O CNPJ:
                    </Text>
                    <TextInput style= {styles.inputText}
                    placeholder= "CNPJ"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />
                    <Text style={styles.Text}>
                    Digite o nome fantasia da empresa:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Nome fantasia"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />
                    <Text style={styles.Text}>
                    Escolha uma senha:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Senha"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />

                    <Text style={styles.Text}>
                    Digite o nome do seu país:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "localização"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />

                    <Text style={styles.Text}>
                    Tipo de produto que exporta:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Produto"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />
                    <Text style={styles.Text}>
                    Digite a razão social:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Razão Social"
                    autoCorrect ={false}
                    onChangeText ={() => {}}
                    />
                    <TouchableOpacity  style={styles.buttonCreate}>
                        <Text style={styles.buttonCreate}>
                            Cadastrar
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={Voltar}
                    

                    style={styles.buttonLogin}>
                        <Text style={styles.buttonTextLogin}>
                            Ir para a página de login
                        </Text>

                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        )

}

export default Exportar;
