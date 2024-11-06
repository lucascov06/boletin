import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function deleteDocument(id) {
const docRef = doc(db, "boletin", id);
try {
    await deleteDoc(docRef);
    console.log("Documento eliminado");
} catch (e) {
    console.error("Error al eliminar el documento: ", e);
}
}
