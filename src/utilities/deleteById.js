import firebase from "../firebase/index";

export async function deleteById(collection, id) {
  const db = firebase.firestore();
  await db.doc(`${collection}/${id}`).delete();
}
