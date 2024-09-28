import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Salvando dados adicionais no Firestore
      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        uid: user.uid
      });

      alert('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error.message);
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
        <input type="password" name="password" placeholder="Senha" onChange={handleChange} />
        <input type="text" name="firstName" placeholder="Nome" onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Sobrenome" onChange={handleChange} />
        <input type="date" name="birthDate" onChange={handleChange} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignUp;
