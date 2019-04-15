import React from 'react';

import { Omit } from 'utility-types';
import { Link } from './styled';
import { calcIfExternalLink, calcIfFunction } from './helpers';
import { Tprops } from './schema';
import { Consumer } from '../../../services/utilities/gatsbyContext';

const ClickWrapper = ({ onClickEvent, children, linkType, full }: Tprops): JSX.Element => {
  const isFunction = calcIfFunction(onClickEvent);

  if (isFunction) {
    return (
      <Link type="button" component="button" onClick={onClickEvent} {...{ full }}>
        {children}
      </Link>
    );
  }

  const isInternal = !calcIfExternalLink(onClickEvent);

  if (isInternal) {
    const passedProps = {
      full,
      component: linkType,
      href: linkType === 'a' && onClickEvent,
      to: linkType !== 'a' && onClickEvent,
    };

    return <Link {...passedProps}>{children}</Link>;
  }

  const component: TlinkType = 'a';

  const passedProps = {
    full,
    component,
    href: onClickEvent,
    target: '_blank',
    rel: 'noreferrer noopener',
  };

  return <Link {...passedProps}>{children}</Link>;
};

const WithLinkContext = (props: Omit<Tprops, 'linkType'>): JSX.Element => (
  <Consumer>{({ Link: linkType }): any => <ClickWrapper {...{ ...props, linkType }} />}</Consumer>
);

export default WithLinkContext;
