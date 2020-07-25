import firebase from "../firebase/index";
import { collectIdsAndDocs } from "./collectIdsAndDocs";

export async function getCollection(collection) {
  const db = firebase.firestore();

  const dbCollection = await db.collection(collection).get();
  const dbArr = dbCollection.docs.map(collectIdsAndDocs);

  return dbArr;
}
