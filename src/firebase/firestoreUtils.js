import { firestore } from "./firebaseConfig";

export const productsCollection = firestore.collection("products");
