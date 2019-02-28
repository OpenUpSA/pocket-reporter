import React from 'react';
import t from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';
import { names } from '../../config/icons';

import Icon from '../Icon';
import ClickWrapper from '../ClickWrapper';
import { CardItemStacked, TopicCard, Content, Text } from './styled';

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
              <Text>{title}</Text>
            </Content>
          </CardActionArea>
        </TopicCard>
      </ClickWrapper>
    </Wrapper>
  );
};

export default Card;

const icons = [
  'Public',
  'School',
  'Poll',
  'Person',
  'People',
  'Notifications',
  'FreeBreakfast',
  'FitnessCenter',
  'ChildFriendly',
  'Casino',
  'BusinessCenter',
  'AirportShuttle',
  'Wifi',
  'Wc',
  'TimeToLeave',
  'Power',
  'Cancel',
  'Train',
  'Traffic',
  'StoreMallDirectory',
  'Restaurant',
  'Place',
  'LocalShipping',
  'LocalPostOffice',
  'LocalPlay',
  'LocalPhone',
  'LocalTaxi',
  'LocalHospital',
  'ShoppingCart',
  'LocalGasStation',
  'Flight',
  'WbSunny',
  'Timelapse',
  'Image',
  'FlashOn',
  'ColorLens',
  'Audiotrack',
  'Security',
  'PhoneIphone',
  'KeyboardVoice',
  'Weekend',
  'Report',
  'Mail',
  'HowToVote',
  'VpnKey',
  'VolumeUp',
  'Work',
  'Grade',
  'Info',
];

Card.propTypes = {
  /** Determines whether card should appear as if stacked on top of other cards. */
  stacked: t.bool,
  /** Determines whether card should be grey. By default card is green,
   * however resources use grey cards. */
  resource: t.bool,
  /** The title that will be displayed on the card. */
  title: t.string.isRequired,
  /** The icon that should be displayed. Only accepts pre-determined strings. */
  icon: t.oneOf(icons).isRequired,
  /** Passed to the ClickWrapper component wrapping the card.
   * See ClickWrapper documentation for more information. */
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
