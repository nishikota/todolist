const Resister = ({wordInputEvent, valueRegister, FaPlus}) => {
  return (
    <>
      <input
        placeholder="テキストを入力..."
        type="text"
        onChange={wordInputEvent}
      />
      <button onClick={valueRegister}>
        <FaPlus />
      </button>
    </>
  );
};

export default Resister;
