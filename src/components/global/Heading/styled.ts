import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledHeading = styled(Typography)`
  && {
    font-size: 16px;
    line-height: 1.3em;
    font-weight: bold;
    color: rgb(74, 74, 74);
    display: block;
    padding: 24px 16px 4px;
  }
`;

export { StyledHeading };
export default { StyledHeading };
