import React, { useState } from "react";
import "./style.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ onClick, children }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
const App = () => {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [select, setSelect] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function handleAddFriend(newFriend) {
    setFriend((friend) => [...friend, newFriend]);
    // setShowAddFriend((show) => !show);
    setShowAddFriend(false);
  }
  function handleSelect(friend) {
    setSelect((selected) => (selected.id === friend.id ? false : friend));
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    console.log(friend);
    setFriend((friend) =>
      friend.map((friend) =>
        friend.id === select.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friend} select={select} onSelect={handleSelect} />
        {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {select && (
        <FormSplitBill
          select={select}
          onSelect={setSelect}
          onSplitBill={handleSplitBill}
          key={select.id}
        />
      )}
    </div>
  );
};
function FriendList({ friends, select, onSelect }) {
  // const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          select={select}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, select, onSelect }) {
  const isSelected = select.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🦋 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill({ select, onSelect, onSplitBill }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying == "user" ? paidByFriend : -paidByUser);
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("user");
  }
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <div className="closeWindow" onClick={() => onSelect(false)}>
        X
      </div>
      <h2>Split a bill with {select.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? bill : Number(e.target.value)
          )
        }
      />

      <label>👫 {select.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value={select.name}>{select.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
export default App;
