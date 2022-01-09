import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getuserByUserId } from '../services/firebase';

export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getuserObjByUserId() {
      const [response] = await getuserByUserId(user.uid);

      setActiveUser(response);
    }

    if (user?.uid) {
      getuserObjByUserId();
    }
  }, [user]);

  return { user: activeUser }
}
