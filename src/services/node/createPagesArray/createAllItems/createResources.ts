import { kebab } from 'change-case';

const createResources = isoKey => object => {
  if (!object || !object.content) {
    return null;
  }

  // @ts-ignore
  const { title, body } = object.content || {};

  if (isoKey === 'eng') {
    return {
      [`${isoKey}/resources/${kebab(title)}/index.html`]: {
        type: 'resource',
        fallback: false,
        isoKey,
        title,
        body,
      },
    };
  }

  if (!object[isoKey] || !object[isoKey].title) {
    return {
      [`${isoKey}/resources/${kebab(title)}/index.html`]: {
        type: 'resource',
        fallback: true,
        isoKey,
        title,
        body,
      },
    };
  }

  return {
    [`${isoKey}/resources/${kebab(object[isoKey].title)}/index.html`]: {
      type: 'resource',
      fallback: false,
      isoKey,
      title: object[isoKey].title,
      body: object[isoKey].body,
    },
  };
};

export default createResources;
