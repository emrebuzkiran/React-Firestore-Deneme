import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import db from "../firebase";
import "../App.css";

function Input() {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");
  const userCollectionRef = collection(db, "users");
  const d = new Date();
  const handleSubmit = (e) => {
    e.preventDefault();
    const wUsers = async () => {
      const data = await setDoc(doc(userCollectionRef), {
        exname: surname,
        name: username,
        date: d.toLocaleString(),
      });
    };
    wUsers();
    setUsername("");
    setSurname("");
  };

  return (
    <div className="kalk m-10">
      <form>
        <div className="Container">
          <input
            className="border-2 border-black"
            value={username}
            type="text"
            placeholder="nick"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="border-2 border-black"
            value={surname}
            type="message"
            placeholder="mesajınız"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <button className="bg-red-500 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Input;
