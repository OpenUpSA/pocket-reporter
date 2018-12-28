import React from 'react'
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const Cards = () => (
  <React.Fragment>

    <Card>
      <CardContent>
        <AddIcon />
        <Typography color="textSecondary" gutterBottom>
          Legal
        </Typography>
      </CardContent>
    </Card>

  </React.Fragment>
);

export default Cards;