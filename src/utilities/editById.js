import firebase from "../firebase/index";

export async function editById(collection, id, updateObj) {
  const db = firebase.firestore();
  await db.doc(`${collection}/${id}`).update(updateObj);
}
