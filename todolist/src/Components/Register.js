const Resister = ({
  wordInputEvent,
  valueRegister,
  FaPlus,
  Button,
  inputValue,
}) => {
  return (
    <>
      <input
        placeholder="テキスト入力..."
        type="text"
        onChange={wordInputEvent}
        value={inputValue}
      />
      <Button
        which={<FaPlus />}
        clickEvent={valueRegister}
        button={styles.button}
      />
    </>
  );
};

export default Resister;

const styles = {
  button: {
    backgroundColor: "gray",
    color: "white",
    cursor: "pointer",
    fontSize: "0.75rem",
    marginLeft: 5,
  },
};
