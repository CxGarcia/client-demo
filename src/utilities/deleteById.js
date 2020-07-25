import firebase from "../firebase/index";

async function deleteById(collection, id) {
  const db = firebase.firestore();
  await db.doc(`${collection}/${id}`).delete();
}

export default deleteById;
