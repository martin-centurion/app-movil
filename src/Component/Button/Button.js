import './styles.css';

function Button(props) {

  return (
    <button onClick={props.onTouchButton}>
      {props.children}
    </button>
  );
}

export default Button;
