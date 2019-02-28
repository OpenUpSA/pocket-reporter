import styled from 'styled-components';


const Wrapper = styled.div`
  display: ${({ full }) => (full ? 'block' : 'inline-block')};
  text-decoration: none;
  color: inherit;
`;

const createLinkWrapper = (tag = 'a') => styled(tag)`
  display: ${({ full }) => (full ? 'block' : 'inline-block')};
  text-decoration: none;
  color: inherit;
`;


export {
  Wrapper,
  createLinkWrapper,
};


export default {
  Wrapper,
  createLinkWrapper,
};
