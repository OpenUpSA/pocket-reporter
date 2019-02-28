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
  /** Determines whether card should appear to be stacked. **/
  stacked: t.bool,
  /** Determines whether card should be grey. By default cards are green; resource cards are grey. **/
  resource: t.bool,
  /** The title that will be displayed on the card. **/
  title: t.string.isRequired,
  /** The icon that will be displayed on the card. Only accepts pre-determined strings. **/
  icon: t.string.isRequired,
  /** Passed to the ClickWrapper component wrapping the card.
   * See ClickWrapper documentation for more information. **/
  click: t.oneOfType([t.string, t.func]).isRequired,
  /** Whether a custom Link component should be used to resolve links,
   * for example the Link component from React Router or Gatsby.
   * If not supplied, card link will just fall back to a regular <a> tag. */
  link: t.node,
};


Card.defaultProps = {
  stacked: false,
  resource: false,
  link: null,
};
