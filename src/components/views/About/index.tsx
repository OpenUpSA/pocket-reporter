import React from 'react';

import { Tprops } from './schema';
import Layout from '../../global/Layout';
import { AboutWrapper, AboutButton, AboutText } from './styled';
import Contributors from './Contributors';
import Partners from './Partners';

const About = (props: Tprops): JSX.Element => {
  const { partners, contributors, tagline, isoKey, body } = props;

  return (
    <Layout title="About Pocket Reporter" back="/profile" {...{ isoKey }}>
      <AboutWrapper>
        <p>{tagline}</p>
        <AboutButton variant="contained">Send us feedback</AboutButton>
        <AboutText source={body} />
        {partners.length > 0 && <Partners {...{ partners }} />}
        {contributors.length > 0 && <Contributors {...{ contributors }} />}
      </AboutWrapper>
    </Layout>
  );
};

export default About;
