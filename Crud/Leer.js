import firestore from '@react-native-firebase/firestore';

firestore().collection('users').get()
.then(querySnapshot => {
querySnapshot.forEach(documentSnapshot => {
console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
});

});