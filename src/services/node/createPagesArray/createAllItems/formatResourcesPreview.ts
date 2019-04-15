const formatResourcesPreview = resources =>
  resources
    .map(object => {
      if (!object) {
        return null;
      }

      const url = Object.keys(object)[0];

      return {
        click: url,
        title: object[url].title,
      };
    })
    .filter(notNull => !!notNull);

export default formatResourcesPreview;
