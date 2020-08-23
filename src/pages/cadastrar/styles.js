import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
         flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40

    },
    goBack: {
        
        
        padding: 24,
        

    },

    title: {
        color: '#FFF',
        fontSize: 16,
 
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',

    },
    buttonsContainerToo: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'


    },
    buttonPrimary: {
        backgroundColor: '#9871f5'

    },

    buttonText: {
        color: '#FFF',
        fontSize: 20

    },
    buttonSecondary: {
        backgroundColor: '#04d361'

    },
    buttonToo: {
        backgroundColor: '#808080'

    },

})
export default styles;