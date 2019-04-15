const createBlankStore = () => ({
  info: {
    lastAction: null,
    joined: new Date().getTime(),
    language: null,
  },
  stories: {},
});

export default createBlankStore;
