import React from 'react';
import {createBottomTabNavigator} from 'react-navigation/bottom-tabs'

import Home from './home';
import Pay from './pay';
import Wollet from './wollet';
import  {AntDesign, Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator(); 
const icons = {
	Nome: {
		lib: AntDesign,
		name: 'home',
	},
	Pay: {
		lib: AntDesign,
		name: 'creditcard',
	},
	Notificação: {
		lib: Ionicons,
		name: 'ios-notifications-outline',

	}
}

function Navigation(){
	return (

			<Tab.Navigator>

			<Tab.Screen name= "Home"
			component {Home}

			options={

				{
					title: 'Home'
				}
			}
			/>

			<Tab.Screen name= "Wollet"
			component {Wollet}

			options={
				{
					title: 'Locais'
				}
			}
			/>

			<Tab.Screen name= "Pay"
			component {Pay}

			options={
				{
					title: 'Pagamento'
				}
			}
			/>
			<Tab.Screen name= "Notificação"
			component {Pay}

			options={
				{
					title: 'Notificação'
				}
			}
			/>
			<Tab.Screen name= "Ajustes"
			component {Pay}

			options={
				{
					title: 'Ajustes'
				}
			}
			/>



			</Tab.Navigator>
		)
}

export default Navigation;


