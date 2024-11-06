import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function updateDocument(id) {
  const docRef = doc(db, "Boletin", id);
  try {
    await updateDoc(docRef, {
      campo1: "nuevo_valor",
    });
    console.log("Documento actualizado");
  } catch (e) {
    console.error("Error al actualizar el documento: ", e);
  }
}
