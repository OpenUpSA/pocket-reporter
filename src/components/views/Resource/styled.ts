import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const ResourceWrapper = styled.div`
  font-weight: bold;
  padding-bottom: 35px;
  max-width: 800px;
  margin: 0 auto;
`;

const Content = styled(ReactMarkdown)`
  font-size: 16px;
  padding: 15px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
`;

export { Content, ResourceWrapper };

export default {
  Content,
  ResourceWrapper,
};
