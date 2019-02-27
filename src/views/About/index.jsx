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
    link: t.string,
    logo: t.string,
    name: t.string,
  })),
  contributors: t.arrayOf(t.shape({
    link: t.string,
    name: t.string,
  })),
  tagline: t.string,
  html: t.string,
  isoKey: t.string.isRequired,
};


About.defaultProps = {
  partners: [],
  contributors: [],
  tagline: null,
  html: null,
};
