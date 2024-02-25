import "./PrimaryButton.css";
const PrimaryButton = ({ scrollTo }) => {
  return (
    <button className='btn-primary1' onClick={scrollTo}>
      <span className='circle1'></span>
      <span className='circle2'></span>
      <span className='circle3'></span>
      <span className='circle4'></span>
      <span className='circle5'></span>
      <span className='text'>Start Now</span>
    </button>
  );
};

export default PrimaryButton;
