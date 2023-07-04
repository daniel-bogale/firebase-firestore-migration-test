import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    console.log("creating");

    await addDoc(usersCollectionRef, { name: newName, age: +newAge });
  };

  const updateUser = async (id, age) => {
    console.log("updating");
    
    
    const userDoc = doc(db, "users", id)
    const newFields = {age:+age+1}
    await updateDoc(userDoc,newFields)
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <input
        placeholder="Age..."
        onChange={(e) => {
          setNewAge(e.target.value);
        }}
      />
      <button onClick={createUser}>Create User</button>
      {users.map((user) => (
        <div key={user.id} >
          <h1> Name: {user.name}</h1>
          <h2> Age: {user.age}</h2>
          <button onClick={()=> {updateUser(user.id,user.age,user.id)}}>Increase Age</button>
        </div>
      ))}
    </div>
  );
}

export default App;
