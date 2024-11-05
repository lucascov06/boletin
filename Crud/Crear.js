import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

async function createDocument() {
  try {
    const docRef = await addDoc(collection(db, "Boletin"), {
      campo1: "valor1",
      campo2: "valor2",
    });
    console.log("Documento creado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al crear el documento: ", e);
  }
}
