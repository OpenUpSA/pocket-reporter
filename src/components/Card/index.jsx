import React from 'react';
import t from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';


import Icon from '../Icon';
import {
  CardItemStacked,
  TopicCard,
  Content,
  Text,
} from './styled';


const createWrapper = isStacked => (isStacked ? CardItemStacked : 'div');


const Card = (props) => {
  const {
    stacked,
    title,
    icon,
  } = props;

  const Wrapper = createWrapper(!!stacked);

  return (
    <Wrapper key={title}>
      <TopicCard>
        <CardActionArea>
          <Content>
            {!!stacked && <Icon type={icon} />}
            <Text color="inherit">
              {title}
            </Text>
          </Content>
        </CardActionArea>
      </TopicCard>
    </Wrapper>
  );
};


export default Card;


Card.propTypes = {
  stacked: t.bool,
  title: t.string.isRequired,
  icon: t.string.isRequired,
};


Card.defaultProps = {
  stacked: false,
};
