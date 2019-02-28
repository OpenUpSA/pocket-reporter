const calcIfExternalLink = (url, domain) => {
  if (/^\//.test(url)) {
    return false;
  }

  const condition = new RegExp(domain, 'i');
  return !condition.test(url);
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
