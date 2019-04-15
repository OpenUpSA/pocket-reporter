import React, { FunctionComponent } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';

import Icon from '../Icon';
import ClickWrapper from '../ClickWrapper';
import { CardItemStacked, TopicCard, Content, Text } from './styled';

const createWrapper = (isStacked): FunctionComponent | string =>
  isStacked ? CardItemStacked : 'div';

const Card = props => {
  const { stacked, resource, title, icon, onClickEvent } = props;
  const Wrapper = createWrapper(!!stacked);

  return (
    <Wrapper key={title}>
      <ClickWrapper {...{ onClickEvent }} full>
        <TopicCard {...{ resource }}>
          <CardActionArea component="div">
            <Content>
              {!!icon && <Icon type={icon} />}
              <Text>{title}</Text>
            </Content>
          </CardActionArea>
        </TopicCard>
      </ClickWrapper>
    </Wrapper>
  );
};

export default Card;
