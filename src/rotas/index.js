import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../pages/landing';
import Cadastrar from '../pages/cadastrar';
import Vendedor from '../pages/pequenoProdutor';
import Pequeno_Produtor from '../pages/exportar';
import Transportar from '../pages/transportar';
import Produtor from '../pages/pequenoProdutor';
import Estrangeiro from '../pages/compradorEstrangeiro';
import GoBack from '../componentes';

const Stack= createStackNavigator();


function Routes(){
	return(

		<NavigationContainer>


			<Stack.Navigator>

			<Stack.Screen name="Landing"

			component={Landing}
			options={{ headerShown: false }}

			/>
			<Stack.Screen name="Vendedor"

			component={Vendedor}
			options={{ headerShown: false }}

			/>

			<Stack.Screen name="Cadastrar"

			component={Cadastrar}
			options={{ headerShown: false }}

			/>

			<Stack.Screen name="Pequeno_Produtor"

			component={Pequeno_Produtor}
			options={{ headerShown: false }}

			/>
			<Stack.Screen name="Transportar"

			component={Transportar}
			options={{ headerShown: false }}

			/>
			<Stack.Screen name="Estrangeiro"

			component={Estrangeiro}
			options={{ headerShown: false }}

			/>
			<Stack.Screen name="GoBack"

			component={GoBack}
			options={{ headerShown: false }}

			/>


			</Stack.Navigator>

		</NavigationContainer>


		)
}

export default Routes;