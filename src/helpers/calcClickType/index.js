const calcIfExternalLink = (url) => {
  const linkInMemory = window.document.createElement('a');
  linkInMemory.href = url;
  const condition = new RegExp(window.location.host, 'i');

  return !linkInMemory.hostname.match(condition);
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
