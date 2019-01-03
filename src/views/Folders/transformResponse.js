
const parseItems = ({ questionaires, type }) => {
  const extractBasedOnType = (item) => {
    if (item.story_template.post_type === type) {
      return item.story_template.ID;
    }

    return null;
  };
  
  const parsed = questionaires.map(extractBasedOnType);                  
  const result = parsed.filter(value => value !== null);
  return result;
}


const transformResponse = (rawData) => {
  const parseItem = (item) => {
    const icon = item.acf.icon;
    const title = item.title.rendered;
    const questionaires = item.acf.questionaires;
    const storyTemplates = parseItems({ questionaires, type: 'story_templates' });
    const resources = parseItems({ questionaires, type: 'resources' });
    
    return {
      icon,
      title,
      storyTemplates,
      resources,
    };
  }
  
  const data = JSON.parse(rawData);
  const result = data.map(parseItem);
  console.log(result);
  return result;
}


export default transformResponse;