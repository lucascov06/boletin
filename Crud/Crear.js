import firestore from '@react-native-firebase/firestore';

firestore().collection('usuarios').add({

name: 'John Doe',

age: 25,

}).then(() => {

console.log('Usuario Creado!');

});
