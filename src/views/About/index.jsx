import React, { Fragment } from 'react';
import t from 'prop-types';


import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import {
  AboutWrapper,
  AboutButton,
  AboutText,
  AboutList,
  AboutLogos,
  LogoImage,
  AboutLink,
} from './styled';


const createLogo = (partner) => {
  const result = <LogoImage key={partner.name} src={partner.logo} alt={partner.name} />;
  return result;
};

const createContributor = contributor => (
  <li key={contributor.name}>
    <AboutLink href={contributor.link}>{contributor.name}</AboutLink>
  </li>
);


const createContributors = contributors => (
  <Fragment>
    <Heading>Contributors</Heading>
    <AboutList>{contributors.map(createContributor)}</AboutList>
  </Fragment>
);


const About = (props) => {
  const {
    partners,
    contributors,
    tagline,
    isoKey,
    html: __html,
  } = props;

  return (
    <Layout title="About Pocket Reporter" back="#" {...{ isoKey }}>
      <AboutWrapper>
        <p>{tagline}</p>
        <AboutButton variant="contained">Send us feedback</AboutButton>
        <AboutText dangerouslySetInnerHTML={{ __html }} />
        <AboutLogos>{partners.map(createLogo)}</AboutLogos>

        {contributors.length > 0 && createContributors(contributors)}
      </AboutWrapper>
    </Layout>
  );
};


export default About;


About.propTypes = {
  partners: t.arrayOf(t.shape({
    /** Whether a custom Link component should be used to resolve links,
     * for example the Link component from React Router or Gatsby.
     * If not supplied, card link will just fall back to a regular <a> tag. */
    link: t.string,
    logo: t.string,
    name: t.string,
  })),
  contributors: t.arrayOf(t.shape({
    /** Whether a custom Link component should be used to resolve links,
     * for example the Link component from React Router or Gatsby.
     * If not supplied, card link will just fall back to a regular <a> tag. */
    link: t.string,
    name: t.string,
  })),
  tagline: t.string,
  html: t.string,
  /** Displays the language that has been selected by the user (as isoKey)
   * in the header-bar. Is also used to determine what language should be
   * used for the hardcode UI-specific/instructional text on the page. */
  isoKey: t.string.isRequired,
};


About.defaultProps = {
  partners: [],
  contributors: [],
  tagline: null,
  html: null,
};
