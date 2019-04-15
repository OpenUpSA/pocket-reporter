import Card from '../../global/Card';
import { Wrapper, CardWrapper, Heading } from './styled';

const CardIteration = props => {
  const { resource, link, title, icon, click } = props;

  const passedProps = {
    resource,
    link,
    title,
    icon,
    click,
  };

  return (
    <CardWrapper>
      <Card {...passedProps} />
    </CardWrapper>
  );
};

const createWrapper = (title, values, callback) => (
  <Fragment>
    <Heading component="h3">{title}</Heading>
    <Wrapper>{!!values && !!values[0] && values.map(callback)}</Wrapper>
  </Fragment>
);
