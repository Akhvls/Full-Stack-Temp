import { Authentication } from './react-components/authentication.jsx';
import { database } from './config/firebase.jsx';
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { DisplayUser } from './react-components/display-user.jsx';
import { ImportUser } from './react-components/import-user.jsx';
import {useState, useEffect} from "react";

function App() {
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState("");
    const [age, setAge] = useState(0);
    const userDataRef = collection(database, "data");

    const getUsers = async () => {
        try {
            const DataRef = await getDocs(userDataRef);
            const filteredData = DataRef.docs.map((doc) => ({...doc.data(), id: doc.id}));
            console.log(filteredData);
            setUserList(filteredData);
        } catch (error) {
            console.log(error)
        }
    }

     const addUser = async () => {
        try {
            await addDoc(userDataRef, {
                Name: user,
                Age: age
            })

            getUsers();
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            const userDoc = doc(database, "data", id);
            await deleteDoc(userDoc);

            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <>
      <div className = "App">
          <Authentication />
          <ImportUser onUserChange={setUser} onAgeChange={setAge} />
          <button onClick={addUser}>Add User</button>
          <button onClick={addUser}>Add User</button>
          <div>
              {userList.map((doc) => (
                  <div>
                      <DisplayUser name={doc.Name} id={doc.id} />
                      <button onClick={() => deleteUser(doc.id)}>Delete User</button>
                  </div>
              ))}
          </div>
      </div>
    </>
  )
}

export default App
