import faker from 'faker';

export interface Tprops {
  title: string;
  body: string;
}

/**
 * Create mock props to pass to `<Card />`
 */
const mockProps: Tprops = {
  title: faker.commerce.productName(),
  body: faker.lorem.paragraphs(10),
};

export default mockProps;
