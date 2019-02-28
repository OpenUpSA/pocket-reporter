const calcIfExternalLink = (url) => {
  const linkInMemory = window.document.createElement('a');
  linkInMemory.href = url;

  return linkInMemory.hostname !== window.location.hostname;
};


const calcIfFunction = value => ({}.toString.call(value) === '[object Function]');


const calcClickType = (value) => {
  if (!value) {
    return null;
  }

  if (calcIfFunction(value)) {
    return 'callback';
  }

  return calcIfExternalLink(value) ? 'external' : 'internal';
};


export default calcClickType;
