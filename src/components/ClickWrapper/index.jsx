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
  /** Determines whether width should be set to 100%. **/
  full: t.bool,
  /** Nested structure that needs this wrapper **/
  children: t.node.isRequired,
  /** URL that should be added to the click action.
   * This should be the URL to where the user will be directed when clicking on the link. **/
  click: t.oneOfType([t.string, t.func]).isRequired,
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
};


ClickWrapper.defaultProps = {
  full: false,
  link: null,
};


CallbackWrapper.propTypes = {
  /** Nested structure that needs this wrapper **/
  children: t.node.isRequired,
  /** URL that should be added to the click action.
   * This should be the URL to where the user will be directed when clicking on the link. **/
  click: t.func.isRequired,
  /** Determines whether width should be set to 100%. **/
  full: t.bool,
};


CallbackWrapper.defaultProps = {
  full: false,
};


InternalWrapper.propTypes = {
  /** Nested structure that needs this wrapper **/
  children: t.node.isRequired,
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node.isRequired,
  /** URL that should be added to the click action.
   * This should be the URL to where the user will be directed when clicking on the link. **/
  click: t.string.isRequired,
  /** Determines whether width should be set to 100%. **/
  full: t.bool,
};


InternalWrapper.defaultProps = {
  full: false,
};

ExternalWrapper.propTypes = {
  /** Nested structure that needs this wrapper **/
  children: t.node.isRequired,
  /** URL that should be added to the click action.
   * This should be the URL to where the user will be directed when clicking on the link. **/
  click: t.string.isRequired,
  /** Determines whether width should be set to 100%. **/
  full: t.bool,
};


ExternalWrapper.defaultProps = {
  full: false,
};
