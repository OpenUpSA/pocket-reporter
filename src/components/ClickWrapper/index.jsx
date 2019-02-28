import React from 'react';
import t from 'prop-types';


import calcClickType from '../../helpers/calcClickType';
import addProps from '../../helpers/addProps';
import { Wrapper, createLinkWrapper } from './styled';


const InternalWrapper = (props) => {
  const {
    children,
    click,
    full,
    link,
    ...passedProps
  } = props;

  const Link = createLinkWrapper(link);

  return <Link to={click} full={full} {...passedProps}>{children}</Link>;
};


const CallbackWrapper = (props) => {
  const {
    children,
    click,
    full,
    ...passedProps
  } = props;

  const results = <Wrapper onClick={click} full={full} {...passedProps}>{children}</Wrapper>;
  return results;
};


const ExternalWrapper = (props) => {
  const {
    children,
    click,
    full,
    external,
    ...passedProps
  } = props;

  const Link = createLinkWrapper();

  return (
    <Link
      {...{ full }}
      href={click}
      target={!!external && '_blank'}
      rel="noopener noreferrer"
      {...passedProps}
    >
      {children}
    </Link>
  );
};


const createComponent = (props) => {
  const {
    click,
    link,
    full,
    ...passedProps
  } = props;


  const clickType = calcClickType(click);


  if (!!link && clickType === 'internal') {
    return addProps(
      InternalWrapper,
      {
        click,
        link,
        full,
        ...passedProps,
      },
    );
  }

  if (clickType === 'callback') {
    return addProps(
      CallbackWrapper,
      {
        click,
        full,
        ...passedProps,
      },
    );
  }

  return addProps(
    ExternalWrapper,
    {
      click,
      full,
      external: clickType === 'external',
      ...passedProps,
    },
  );
};


const ClickWrapper = (props) => {
  const {
    children,
    click,
    link,
    full = false,
    ...otherProps
  } = props;

  if (!click) {
    return <div>{children}</div>;
  }

  const ReturnedComponent = createComponent({
    children,
    click,
    link,
    full,
    ...otherProps,
  });

  return <ReturnedComponent>{children}</ReturnedComponent>;
};

export default ClickWrapper;


ClickWrapper.propTypes = {
  full: t.bool,
  children: t.node.isRequired,
  click: t.oneOfType([t.string, t.func]).isRequired,
  link: t.node,
};


ClickWrapper.defaultProps = {
  full: false,
  link: null,
};


CallbackWrapper.propTypes = {
  children: t.node.isRequired,
  click: t.func.isRequired,
  full: t.bool,
};


CallbackWrapper.defaultProps = {
  full: false,
};


InternalWrapper.propTypes = {
  children: t.node.isRequired,
  link: t.node.isRequired,
  click: t.string.isRequired,
  full: t.bool,
};


InternalWrapper.defaultProps = {
  full: false,
};

ExternalWrapper.propTypes = {
  children: t.node.isRequired,
  click: t.string.isRequired,
  full: t.bool,
};


ExternalWrapper.defaultProps = {
  full: false,
};
