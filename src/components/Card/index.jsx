import React from 'react';
import t from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';


import Icon from '../Icon';
import ClickWrapper from '../ClickWrapper';
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
    resource,
    title,
    icon,
    click,
    link,
  } = props;

  const Wrapper = createWrapper(!!stacked);

  return (
    <Wrapper key={title}>
      <ClickWrapper {...{ click, link }} full>
        <TopicCard {...{ resource }}>
          <CardActionArea>
            <Content>
              {!!icon && <Icon type={icon} />}
              <Text color="inherit">
                {title}
              </Text>
            </Content>
          </CardActionArea>
        </TopicCard>
      </ClickWrapper>
    </Wrapper>
  );
};


export default Card;


Card.propTypes = {
  stacked: t.bool,
  resource: t.bool,
  title: t.string.isRequired,
  icon: t.string.isRequired,
  click: t.oneOfType([t.string, t.func]).isRequired,
  link: t.node,
};


Card.defaultProps = {
  stacked: false,
  resource: false,
  link: null,
};
