const Button = ({clickEvent, button, which, i}) => {
  return (
    <button onClick={() => clickEvent(i)} style={button}>
      {which}
    </button>
  );
};

export default Button;
