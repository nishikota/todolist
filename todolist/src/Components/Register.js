const Resister = ({wordInputEvent, valueRegister, FaPlus, Button}) => {
  return (
    <>
      <input
        placeholder="テキストを入力..."
        type="text"
        onChange={wordInputEvent}
      />
      <Button
        FaPlus={FaPlus}
        clickEvent={valueRegister}
        button={styles.button}
        which={"resister"}
      />
    </>
  );
};

export default Resister;

const styles = {
  button: {
    backgroundColor: "gray",
    color: "white",
  },
};
