const FooterLinks = ({ itemList, itemTitle }) => {
  return (
    <>
      <div className='footer-link-wrapper'>
        <h6>{itemTitle}</h6>
        <ul>
          {itemList.map((item) => (
            <li key={item.id}>
              <a className='btn-anonymous' href='#'>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
