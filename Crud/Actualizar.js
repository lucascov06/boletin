import firestore from '@react-native-firebase/firestore';

firestore().collection('users').doc(userId).update({

age: 26,

}).then(() => {

console.log('Usuario Actualizado!');
});