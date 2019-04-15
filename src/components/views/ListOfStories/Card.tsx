import React from 'react';
import moment from 'moment';
import Icon from './Icon';
import ClickWrapper from '../../global/ClickWrapper';
import {
  StyledButton,
  StyledCard,
  StyledCardContent,
  StyledAction,
  Title,
  Details,
  ProgressContainer,
  ProgressStyled,
  ProgressBackground,
  FloatingWrap,
  EmailIconContainer,
} from './styled';

interface Tprops {
  title?: string;
  type?: string;
  created?: number;
  progress?: number;
}

type Tcard = (Tprops) => JSX.Element;

const Card: Tcard = ({ title, type, created, progress: value, key }): JSX.Element => {
  if (!title) {
    return <StyledCard />;
  }

  const date = moment(created).fromNow();

  return (
    <StyledCard>
      <StyledAction>
        <ClickWrapper onClickEvent={`/story/index.html?id=${key}`} full>
          <StyledCardContent>
            <div>
              <Title>{title}</Title>
              <Details>{type}</Details>
              <Details>{date}</Details>
            </div>
            <ProgressContainer>
              <ProgressBackground variant="determinate" value={100} thickness={7} />
              <FloatingWrap>
                <ProgressStyled variant="determinate" value={value} thickness={7} />
              </FloatingWrap>
            </ProgressContainer>
          </StyledCardContent>
        </ClickWrapper>
      </StyledAction>
      <StyledButton>
        <ClickWrapper onClickEvent={`/story/index.html?id=${key}&whatsapp=1`} full>
          <EmailIconContainer>
            <Icon />
          </EmailIconContainer>
        </ClickWrapper>
      </StyledButton>
    </StyledCard>
  );
};

export default Card;
