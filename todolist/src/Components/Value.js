const Value = ({value, i, valueDelete, FaRegTrashAlt, Button}) => {
  return (
    <div className="Value" key={i} style={styles.value}>
      <p style={styles.textArea}>{value}</p>
      <Button
        i={i}
        FaRegTrashAlt={FaRegTrashAlt}
        clickEvent={valueDelete}
        button={styles.button}
        which={"value"}
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
    border: "none",
  },
};
