import React from 'react';
import t from 'prop-types';


import calcClickType from '../../helpers/calcClickType';
import addProps from '../../helpers/addProps';
import { Wrapper, LinkWrapper } from './styled';


const InternalWrapper = (props) => {
  const {
    children,
    click,
    full,
    link: Link,
    ...passedProps
  } = props;

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
    ...passedProps
  } = props;

  return (
    <LinkWrapper
      href={click}
      target="_blank"
      rel="noopener noreferrer"
      full={full}
      {...passedProps}
    >
      {children}
    </LinkWrapper>
  )
}


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

  if (clickType === 'external') {
    return addProps(
      ExternalWrapper,
      {
        click,
        full,
        ...passedProps,
      },
    );
  }

  return null;
};


const ClickWrapper = (props) => {
  const {
    children,
    click,
    link,
    full = false,
    ...otherProps
  } = props;


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
