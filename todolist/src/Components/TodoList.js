import React, {useState} from "react";
import {FaRegTrashAlt, FaPlus} from "react-icons/fa";
import Resister from "./Register";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [valueStorage, setValueStorage] = useState([]);
  const wordInputEvent = (e) => {
    setInputValue(e.target.value);
  };
  const valueRegister = () => {
    const newStorage = [...valueStorage];
    newStorage.push(inputValue);
    setValueStorage(newStorage);
  };
  const valueDelete = (i) => {
    const newStorage = [...valueStorage];
    newStorage.splice(i, 1);
    setValueStorage(newStorage);
  };
  return (
    <div className="appArea" style={styles.appArea}>
      <div className="inputArea" style={styles.inputArea}>
        <input
          placeholder="テキストを入力..."
          type="text"
          onChange={wordInputEvent}
        />
        <button onClick={valueRegister}>
          <FaPlus />
        </button>
      </div>
      <div className="ValuesArea" style={styles.valuesArea}>
        {valueStorage.map((value, i) => (
          <div className="Value" key={i} style={styles.value}>
            <p style={styles.textArea}>{value}</p>
            <button onClick={() => valueDelete(i)} style={styles.button}>
              <FaRegTrashAlt />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

const styles = {
  appArea: {
    margin: "auto",
    backgroundColor: "white",
    width: "50%",
    borderRadius: 15,
    marginTop: "1rem",
    border: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  inputArea: {
    paddingTop: "3rem",
    paddingBottom: "3rem",
    borderBottom: "solid",
    borderBottomWidth: 1,
    borderColor: "black",
    width: "100%",
  },
  valuesArea: {
    margin: "3rem",
  },
  value: {
    border: "solid",
    borderWidth: 1,
    borderRadius: 20,
    listStyle: "none",
    display: "flex",
  },
  textArea: {
    marginRight: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "white",
    border: "none",
  },
};
