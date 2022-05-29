import { collection, collectionGroup, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../plugins/firebase";

/*collectionGroup is a method that returns every collection or subcollecion that matches the second parameter*/
async function fetchingPostFriendsDocs() {
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

  // This piece of code gets all the tags that are inside of posts
  // without repeting, but there is a limitation on this "where" clause:
  // it just acepts a list of ten itens.
  const tagObjs = [];

  const tags = await fetchingTagsOfPosts();

  const q = query(collection(db, "tags"), where("name", "in", tags))
  
  const querySnapshots = await getDocs(q);

  querySnapshots.forEach((doc) => {
    tagObjs.push(doc.data().name)
  });

  return tagObjs;
  
// ----------------------------------------------------------------------

  // // This section of code maps the same thing as the one above, but it returns
  // // but it doesn't filter the repeated itens, because it return the tag of
  // // every doc.
  // const tags = await fetchingTagsOfPosts();

  // const tagsReads = tags.map(tag => getDoc(doc(db, "tags", tag)));
  
  // const resultTagsDocuments = await Promise.all(tagsReads).then(documents => {
  //   return documents
  // })

  // const tagObjs = resultTagsDocuments.map(element => {
  //   return element.data().name
  // })

  // return tagObjs;
}


export {
  fetchingAllTagsDocuments
}