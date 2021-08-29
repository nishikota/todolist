const Value = ({value, valueKey, valueDelete, FaRegTrashAlt, Button}) => {
  return (
    <div className="Value" style={styles.value}>
      <p style={styles.textArea}>{value}</p>
      <Button
        i={valueKey}
        which={<FaRegTrashAlt />}
        clickEvent={valueDelete}
        button={styles.button}
      />
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
    color: "gray",
    border: "none",
    cursor: "pointer",
  },
};
