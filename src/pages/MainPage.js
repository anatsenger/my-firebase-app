import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const MainPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Página Principal</h2>
      {userData ? (
        <div>
          <p>Nome: {userData.firstName}</p>
          <p>Sobrenome: {userData.lastName}</p>
          <p>Data de Nascimento: {userData.birthDate}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default MainPage;
