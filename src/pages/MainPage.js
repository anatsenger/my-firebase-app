import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';  // Importando useNavigate para navegação

const MainPage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // Hook de navegação do react-router-dom

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

  // Função para realizar logout e redirecionar para a página de login
  const handleLogout = () => {
    auth.signOut();  // Firebase signOut
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="main-container">
      <h2>Página Principal</h2>
      {userData ? (
        <div className="user-data">
          <p>Nome: {userData.firstName}</p>
          <p>Sobrenome: {userData.lastName}</p>
          <p>Data de Nascimento: {userData.birthDate}</p>
        </div>
      ) : (
        <p className="loading-text">Carregando dados...</p>
      )}
      
      <button className="logout-button" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );  
};

export default MainPage;
