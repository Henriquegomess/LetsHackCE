import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import {useNavigation } from '@react-navigation/native';


function Cadastro(){
const {navigate} = useNavigation();
function handleNavigationToVendedorPages (){
    navigate('Vendedor');
   }
function handleNavigationToExportar (){
    navigate('Pequeno_Produtor');
   }
function handleNavigationToTransportar (){
    navigate('Transportar');
   }
function handleNavigationToComprador (){
    navigate('Estrangeiro');
   }
function goBack(){
    navigate('GoBack')
}

	return(
		    <View style= {styles.container}>
            <TouchableOpacity onPress={goBack}>
              
            </TouchableOpacity>
            
            <Text style={styles.title}>
                Escolha a baixo {'\n'}
            <Text style={styles.titleBold}>
                Como deseja se cadastrar?
            </Text>
            </Text>

        <View style={styles.buttonsContainer}>
            
            <TouchableOpacity onPress= {handleNavigationToVendedorPages}
              
             style={[styles.button, styles.buttonPrimary]} >
                <Text style={styles.buttonText}>
                    Pequeno Produtor
                </Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={handleNavigationToExportar}
             style={[styles.button, styles.buttonSecondary]} >
                <Text style={styles.buttonText}>
                    Exportador
                </Text>

            </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainerToo}>

            <TouchableOpacity onPress={handleNavigationToTransportar}
             style={[styles.button, styles.buttonToo]} >
              
                <Text style={styles.buttonText}>
                    Transportador
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigationToComprador}
             style={[styles.button, styles.buttonToo]} >
              
                <Text style={styles.buttonText}>
                    Comprador Estrageiro
                </Text>
            

            </TouchableOpacity>
        </View>
        
            </View>
        

    )
}

export default Cadastro;
