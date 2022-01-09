import { firebase, FieldValue } from '../lib/firebase';


// check if the username already exists in firestore DB
export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username.toLowerCase())
    .get();

  return result.docs.length > 0;
}


// get user from firestore where userId === userId (passed from the auth)
export async function getuserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('userId', '==', userId)
    .get();

    const user = result.docs.map((item) => ({
      ...item.data(),
      docId: item.id
    }))

    return user;
}
