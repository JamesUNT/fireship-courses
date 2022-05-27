import { collection, collectionGroup, getDocs, query, where } from "firebase/firestore";
import { db } from "../plugins/firebase";

/*collectionGroup is a method that returns every collection or subcollecion that matches the second parameter*/
async function fetchingPostLikesDocs() {
  const q = query(collectionGroup(db, "friends"));
  const postDoc = await getDocs(q);
  const docs = postDoc.forEach(doc => {
    console.log(doc.data())
  });
  console.log(docs)
}

async function fetchingTagsOfPosts( ) {
  const tags = [];

  const q = query(collection(db, "posts"))
  
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach(document => {
    document.data().tags.forEach(tag => {
      tags.push(tag);
    })
  });

  return tags;
}

async function fetchingAllTagsDocuments() {
  const tagObjs = [];

  const tags = await fetchingTagsOfPosts();

  const q = query(collection(db, "tags"), where("name", "in", tags))

  const querySnapshots = await getDocs(q);

  querySnapshots.forEach((doc) => {
    tagObjs.push(doc.data().name)
  });

  return tagObjs;
}


export {
  fetchingAllTagsDocuments
}