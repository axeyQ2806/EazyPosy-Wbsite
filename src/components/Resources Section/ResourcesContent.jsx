const ResourcesContent = ({ IMG, content, contentType }) => {
  return (
    <div className='resourcesContent-div'>
      <img src={IMG} width='300px' />
      <div className='inside-content'>
        <p>{contentType}</p>
        <h3>{content}</h3>
        <a href='#' className='btn-anonymous'>
          Download
        </a>
      </div>
    </div>
  );
};

export default ResourcesContent;
