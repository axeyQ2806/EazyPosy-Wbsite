const PartnerLogos = ({ logo, logoAlt }) => {
  return (
    <div className='logo-wrapper'>
      <img src={logo} alt={logoAlt} width={"150px"} />
    </div>
  );
};

export default PartnerLogos;
