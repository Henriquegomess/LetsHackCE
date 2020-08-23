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



function ProdutorP(){
const {navigate} = useNavigation();
function Voltar(){
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
                    onChangeText ={() => {}}
                    />
                    <Text style={styles.Text}>
                    Digite o nome fantasia da empresa:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Nome fantasia"
                    onChangeText ={() => {}}
                    />
                    <Text style={styles.Text}>
                    Escolha uma senha:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Senha"
                    onChangeText ={() => {}}
                    />

                    <Text style={styles.Text}>
                    Digite o nome do seu país:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "localização"
                    onChangeText ={() => {}}
                    />

                    <Text style={styles.Text}>
                    Quanto cobra por frete:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Taxa"
                    onChangeText ={() => {}}
                    />
                    <Text style={styles.Text}>
                    Digite a razão social:
                    </Text>

                    <TextInput style= {styles.inputText}
                    placeholder= "Razão Social"
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

export default ProdutorP;
