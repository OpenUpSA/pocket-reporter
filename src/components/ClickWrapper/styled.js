import styled from 'styled-components';


const Wrapper = styled.div`
  display: ${({ full }) => (full ? 'block' : 'inline-block')};
  text-decoration: none;
  color: inherit;
`;

const LinkWrapper = styled.a`
  display: ${({ full }) => (full ? 'block' : 'inline-block')};
  text-decoration: none;
  color: inherit;
`;


export {
  Wrapper,
  LinkWrapper,
};


export default {
  Wrapper,
  LinkWrapper,
};
