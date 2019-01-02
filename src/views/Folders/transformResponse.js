
const transformResponse = (rawData) => {
  const result = JSON.parse(rawData).map((item) => ({
    icon: item.acf.icon,
    title: item.title.rendered,
    storyTemplates: item.acf.questionaires.map(
      (template) => template.story_template.ID
    ),
  }))
    
  return result;
}


export default transformResponse;
