const Value = ({value, i, valueDelete, FaRegTrashAlt}) => {
  return (
    <div className="Value" key={i} style={styles.value}>
      <p style={styles.textArea}>{value}</p>
      <button onClick={() => valueDelete(i)} style={styles.button}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};
export default Value;

const styles = {
  value: {
    border: "solid",
    borderWidth: 1,
    borderRadius: 20,
    listStyle: "none",
    display: "flex",
    marginBottom: 5,
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
