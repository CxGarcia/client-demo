import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyASU-9M2U1C7I49tWP6lEb2l44ZisIoyYA",
  authDomain: "fir-34d6e.firebaseapp.com",
  databaseURL: "https://fir-34d6e.firebaseio.com",
  projectId: "fir-34d6e",
  storageBucket: "fir-34d6e.appspot.com",
  messagingSenderId: "963152644174",
  appId: "1:963152644174:web:7544f30f6dc791d61c1b1f",
};

firebase.initializeApp(config);

//Exports and helper funcs
export default firebase;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRoot = storage.ref();

export function addCollection(collection, data) {
  return db.collection(collection).add(data);
}

export function collectIdsAndDocs(doc) {
  return { id: doc.id, ...doc.data() };
}

export async function deleteById(collection, id) {
  await db.doc(`${collection}/${id}`).delete();
}

export async function editById(collection, id, updateObj) {
  await db.doc(`${collection}/${id}`).update(updateObj);
}

export async function getCollection(collection) {
  const dbCollection = await db.collection(collection).get();
  const dbArr = dbCollection.docs.map(collectIdsAndDocs);

  return dbArr;
}

export function putFiles(file, collection, id, name) {
  return storage
    .ref()
    .child(collection)
    .child(id)
    .child(name)
    .put(file)
    .then((res) => res.ref.getDownloadURL())
    .catch((error) => {
      console.log("Upload Failed:", error.message);
    });
}

// //TODO
// export function generateId(collection) {
//   const generator = db.collection(collection).doc();

//   return generator.nd.clientId;
// }

// //TODO
// export async function getSnapshot(collection) {
//   const db = firebase.firestore();
//   let dbArr;

//   const dbCollection = await db
//     .collection(collection)
//     .onSnapshot((snapshot) => {
//       snapshot.docChanges().map((change) => {});
//     });
// }
