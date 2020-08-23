import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#8257e5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
        },
     img: {
        flex: 1,
        justifyContent: 'center'

     },

     title: {
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
     },

    input: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        padding: 10

    },
    inputText: {
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom: 15,
        color: '#191919',
        borderRadius: 7,
        fontSize: 20,
        padding: 10

    },
    buttonLogin: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,


    },
    buttonTextLogin: {
        color: '#FFF',
        fontSize: 18


    },
    buttonCreate: {
        marginBottom: 10

    },
    buttonTextCreate: {
        color: '#FFF',
    },

});
export default styles;
