import { useState } from "react";

// https://drive.google.com/drive/folders/1WQE506XrUQTmLk7SuSHhep-3eeLXtXWs

const stateSample = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
];

function App() {
  const step = 5;
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateList, setStateList] = useState(stateSample);
  const [taskList, setTaskList] = useState([]);
  const [curPage, setCurPage] = useState(1);

  const totalPages = Math.ceil(taskList.length / step);

  const data1 = taskList.slice((curPage - 1) * step, curPage * step);

  console.log(
    taskList.length,
    totalPages,
    (curPage - 1) * step,
    curPage * step
  );

  function handleSaveState(e) {
    e.preventDefault();

    if (!state.trim()) return alert("Enter state please");

    if (stateList.includes(state))
      return alert("Duplicate fields not allowed!");

    setStateList((prev) => [...prev, state]);
    setState("");
  }

  function handleAddForm(e) {
    e.preventDefault();

    if (!selectedState.trim() || !city.trim())
      return alert("Please enter state or city!");

    if (taskList.some((el) => el.state === selectedState))
      return alert("Duplicate fields not allowed!");

    const newObj = { state: selectedState, city, id: Date.now() };

    setTaskList((prev) => [...prev, newObj]);

    setSelectedState("");
    setCity("");
  }

  return (
    <div>
      <form onSubmit={handleSaveState}>
        <input
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>

      <br />

      <form onSubmit={handleAddForm}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="select">select</option>
          {stateList.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <form>
        {data1.map((item) => (
          <ListItems
            key={item.state}
            item={item}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </form>
      {taskList.length > step && (
        <div>
          <button
            onClick={() => setCurPage((prev) => prev - 1)}
            disabled={curPage === 1}
          >
            Prev
          </button>
          <span> page {curPage} </span>
          <button
            onClick={() => setCurPage((prev) => prev + 1)}
            disabled={curPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

function ListItems({ item, taskList, setTaskList, i }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [state, setState] = useState(item.state);
  const [city, setCity] = useState(item.city);

  function handleDelete() {
    const filterData = taskList.filter((el) => el.id !== item.id);
    setTaskList(filterData);
  }

  function handleEdit(e) {
    e.preventDefault();
    setIsDisabled(false);
  }

  function handleSaveForm(e) {
    e.preventDefault();

    if (!state.trim() || !city.trim()) return alert("Enter state please");

    if (taskList.some((el) => el.state === state))
      return alert("Duplicate fields not allowed!");

    const updatedTaskList = taskList.map((el) => {
      return el.id === item.id ? { ...item, state, city } : el;
    });

    setTaskList(updatedTaskList);
    setIsDisabled(true);
  }

  const inputfields = [
    {
      value: state,
      placeholder: "Enter state",
      onChange: (e) => setState(e.target.value),
    },
    {
      value: city,
      placeholder: "Enter city",
      onChange: (e) => setCity(e.target.value),
    },
  ];

  return (
    <div>
      {inputfields.map((items) => (
        <input
          type="text"
          value={items.value}
          onChange={items.onChange}
          disabled={isDisabled}
          key={items.placeholder}
        />
      ))}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      {!isDisabled && <button onClick={handleSaveForm}>Save</button>}
    </div>
  );
}

export default App;
