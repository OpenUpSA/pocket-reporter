import transformResponse from '.';
import { basic } from './mocks.json';


const output = [
  {
    title: 'Example 1',
    icon: 'fa-bell',
    storyTemplates: [123, 456]
  },
  {
    title: 'Example 2',
    icon: 'fa-user',
    storyTemplates: [789]
  }, 
]


const assertion = () => expect(transformResponse(JSON.stringify(basic))).toEqual(output);
test('basic', assertion);
