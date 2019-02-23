import React, { Fragment } from 'react';
import t from 'prop-types';


import {
  AboutWrapper,
  AboutButton,
  AboutHead,
  AboutText,
  AboutList,
  AboutLogos,
  LogoImage,
  AboutLink,
} from './styled';


const createLogo = partner => <LogoImage key={partner} src={partner.logo} alt={partner.name} />;

const createContributor = contributor => (
  <li key={contributor}>
    <AboutLink href={contributor.link}>{contributor.name}</AboutLink>
  </li>
);


const createContributors = contributors => (
  <Fragment>
    <AboutHead>Contributors</AboutHead>
    <AboutList>{contributors.map(createContributor)}</AboutList>
  </Fragment>
);


const About = (props) => {
  const {
    partners,
    contributors,
    tagline,
    html: __html,
  } = props;

  return (
    <Fragment>
      <AboutWrapper>
        <p>{tagline}</p>
        <AboutButton variant="contained">Change language</AboutButton>
        <AboutButton variant="contained">Send us feedback</AboutButton>
        <AboutText dangerouslySetInnerHTML={{ __html }} />
        <AboutLogos>{partners.map(createLogo)}</AboutLogos>

        <AboutButton
          variant="contained"
          href="https://pocketreporter.co.za"
          target="_blank"
        >
          PocketReporter.co.za
        </AboutButton>

        {contributors.length > 0 && createContributors(contributors)}
      </AboutWrapper>
    </Fragment>
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
};


About.defaultProps = {
  partners: [],
  contributors: [],
  tagline: null,
  html: null,
};
