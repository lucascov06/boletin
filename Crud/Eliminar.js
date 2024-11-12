import firestore from '@react-native-firebase/firestore';

firestore().collection('users').doc(userId).delete()
.then(() => {
console.log('Usuario Borrado!');
});