const Button = ({clickEvent, button, FaRegTrashAlt, FaPlus, which, i}) => {
  return (
    <button onClick={() => clickEvent(i)} style={button}>
      {which === "resister" ? <FaPlus /> : <FaRegTrashAlt />}
    </button>
  );
};

export default Button;
