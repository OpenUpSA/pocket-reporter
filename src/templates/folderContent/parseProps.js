import { param, snake } from 'change-case';


const parseProps = ({ pageContext, data }) => {
  const {
    title,
    icon,
    language,
  } = pageContext;

  const { edges } = data.urls;
  const resources = edges.map(({ node }) => {
    const rawTitle = node.frontmatter.translations[snake(language)];
    const title = !!rawTitle  ? rawTitle : node.frontmatter.title;
    if (node.frontmatter.page !== 'resources') {
      return null;
    }

    return {
      title,
      url: `${param(language)}/resources/${param(title)}/index.html`
    }
  });

  const questions = edges.map(({ node }) => {
    const rawTitle = node.frontmatter.translations[snake(language)];
    const title = !!rawTitle  ? rawTitle : node.frontmatter.title;
    
    if (node.frontmatter.page !== 'questions') {
      return null;
    }

    return {
      title,
      url: `${param(language)}/resources/${param(title)}/index.html`,
      fallback: !rawTitle,
    }
  });

  return { 
    title,
    icon,
    resourcesPages: resources.filter(value => !!value),
    questionsPages: questions.filter(value => !!value),
  };
}


export default parseProps;