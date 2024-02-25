import "./SpecialButton.css";
const SpecialButton = ({ buttonContent }) => {
  return (
    <button className='btn-special'>
      <span className='svgContainer'>{buttonContent}</span>
      <span className='BG'></span>
    </button>
  );
};

export default SpecialButton;
