import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./reducers/Users";
import { useState } from "react";

function App() {
  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [newUsername, setNewUserName] = useState("");

  const createUser = () => {
    dispatch(
      addUser({ id: userList[userList.length - 1].id + 1, name, username })
    );
  };

  return (
    <div className="App">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button onClick={createUser}>Add User</button>
      </div>
      <div className="displayUsers">
        {userList.map((user, id) => {
          return (
            <div key={id}>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
              <input
                type="text"
                placeholder="New username"
                onChange={(e) => {
                  setNewUserName(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );
                }}
              >
                Update Username
              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
