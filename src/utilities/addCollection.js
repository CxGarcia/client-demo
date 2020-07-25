import firebase from "../firebase/index";

export function addCollection(collection, data) {
  const db = firebase.firestore();
  db.collection(collection).add(data);
}
