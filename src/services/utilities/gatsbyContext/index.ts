import { createContext } from 'react';

const fallback = {
  navigate: () => window.location.href,
  Link: 'a',
};

const { Provider, Consumer } = createContext(fallback);

export { Provider, Consumer };
export default { Provider, Consumer };
