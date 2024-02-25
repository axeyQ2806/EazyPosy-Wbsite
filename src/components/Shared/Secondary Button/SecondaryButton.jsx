import "./SecondaryButton.css";
const SecondaryButton = ({ btnName, scrollTo }) => {
  return (
    <button onClick={scrollTo} className='btn-sec'>
      {btnName}
    </button>
  );
};

export default SecondaryButton;
