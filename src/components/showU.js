import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../firebase";
import "../App.css";

function ShowUser() {
  const [users, setUsers] = useState([]);
  const usrCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const veri = await getDocs(usrCollectionRef);
      setUsers(veri.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="show m-10">
      {users.map((user) => {
        return (
          <>
            <div> kim : {user.name}</div>
            <div> mesajı : {user.exname}</div>
            <div> gönderilme zamanı : {user.date}</div>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default ShowUser;
