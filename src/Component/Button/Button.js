import './styles.css';

function Button(props) {

  return (
    <div className='bot_detail'>
        <button onClick={props.onTouchButton}>
          {props.children}
        </button>
    </div>
  );
}

export default Button;
