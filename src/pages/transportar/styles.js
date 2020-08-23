import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
   container: {
   		flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40

   },
   title: {
   		color: '#FFF',
        fontSize: 30
   },
   input:{
   	flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',


   },
   Text: { 
        color: '#000000',
        fontSize: 18,
        padding: 10

   },
   inputText:{
   	  	backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#191919',
        borderRadius: 7,
        fontSize: 20,
        padding: 10

   },
   		buttonTextLogin: {
   	  	color: '#FFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7

   },
   buttonCreate: {
   		backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding: 10

   },
   buttonLogin: {
   	backgroundColor: '#6959CD',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        padding: 10,


   },
});
export default styles;
