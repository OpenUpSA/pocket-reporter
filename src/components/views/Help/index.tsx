import React from 'react';

import Layout from '../../global/Layout';
import Grid from '@material-ui/core/Grid';
import pr1 from '../../../../static/assets/pr1.jpg';
import pr2 from '../../../../static/assets/pr2.jpg';
import pr3 from '../../../../static/assets/pr3.jpg';
import pr4 from '../../../../static/assets/pr4.jpg';
import pr5 from '../../../../static/assets/pr5.jpg';


const Help = (): JSX.Element => {

  return (
    <Layout title="How to Use Pocket Reporter" back="/profile">
        <div style={{fontFamily: 'sans-serif'}}>
            <Grid container spacing={24}>
                <Grid item xs={12}><h1 style={{textAlign: 'center'}}>How to use pocket reporter for comprehensive<br/>&amp; accurate reporting</h1></Grid>
                
                <Grid item xs={12} sm={6}>
                    <img style={{width: '100%', display: 'block'}} src={pr1}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Visit and familiarise yourself with the Pocket Reporter tool</h3>
                    <p>Pocket reporter has checklists and questions for various reporting situations. Resources downloaded while online can be used even when you are offline!</p>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <img style={{width: '100%', display: 'block'}} src={pr2}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>When reporting, choose the checklist relevant to your story</h3>
                    <p>Pocket Reporter has more than 50 checklists to choose from across 7 categories. These checklists have been created by veteran journalists to ensure they are valuable and up to date.</p>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img style={{width: '100%', display: 'block'}} src={pr3}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Gather critical information by following the story checklist</h3>
                    <p>Complete the checklist to ensure you don’t forget to gather any important information when reporting in the field.</p>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img style={{width: '100%', display: 'block'}} src={pr4}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Easily share your reporting with colleagues and editors</h3>
                    <p>Pocket Reporter automatically saves all your stories to your device, even while offline. You can then easily choose to share only specific stories once you have access to the internet.</p>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <img style={{width: '100%', display: 'block'}} src={pr5}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Reference Pocket Reporter when writing your story</h3>
                    <p>When writing your story, use the details gathered using Pocket Reporter to construct a well researched and accurate description of events.</p>
                </Grid>
                
               

            </Grid>

        </div>
    </Layout>
  );
};

export default Help;