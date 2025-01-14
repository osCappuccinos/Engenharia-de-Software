import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", category: "", price: 0 });

  const fetchItems = async () => {
    const user = auth.currentUser;
    const querySnapshot = await getDocs(collection(db, `users/${user.uid}/items`));
    const fetchedItems = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItems(fetchedItems);
  };

  const addItem = async () => {
    const user = auth.currentUser;
    const docRef = await addDoc(collection(db, `users/${user.uid}/items`), newItem);
    setItems([...items, { id: docRef.id, ...newItem }]);
    setNewItem({ name: "", category: "", price: 0 });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        placeholder="Nome"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={newItem.category}
        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Preço"
        value={newItem.price}
        onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
      />
      <button onClick={addItem}>Adicionar</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category} - R$ {item.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;