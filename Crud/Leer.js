import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

async function readDocuments() {
  const querySnapshot = await getDocs(collection(db, "Boletin"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
}
