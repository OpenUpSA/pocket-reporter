import React from 'react';
import styled from 'styled-components';

interface LinkPropsShape {
  block: string;
  component: any;
  to?: string;
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Link = ({
  full,
  fullWidth,
  fullHeight,
  component,
  ...otherProps
}: LinkPropsShape): JSX.Element => {
  const width = !!full || fullWidth;
  const height = !!full || fullHeight;

  const InnerComponent = styled(component)`
    && {
      display: ${width || height ? 'block' : 'inline-block'};
      width: ${width ? '100%' : 'auto'};
      height: ${width ? '100%' : 'auto'};
      padding: 0;
      border: none;
      outline: none;
      font: inherit;
      background: none;
      text-decoration: none;
      color: inherit;
    }
  `;

  return <InnerComponent {...otherProps} />;
};

export { Link };
export default { Link };
