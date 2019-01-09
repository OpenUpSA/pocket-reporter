const { camel, param, snake } = require('change-case');
const { writeFile } = require('fs');
const languages = require('../config/languages.json');


const config = `
backend:
  name: github
  repo: OpenUpSA/pocket-reporter
media_folder: static/assets
public_folder: assets
editor:
   preview: false
`


const createRelation = (type, language) => `
      -
        name: ${snake(`${language}_${type}`)}
        label: Linked ${(type)} Entry Title
        required: false
        widget: relation
        collection: ${snake(type)}
        searchFields: 
          - title
        valueField: title
`;


const createRefs = type => language => `
      -
        name: title
        label: Linked English Entry Title
        required: true
        widget: relation
        collection: english
        searchFields: 
          - title
        valueField: title
${createRelation(type, language)}
`;


const calcNumber = (language) => {
  const index = languages.indexOf(language).toString();

  switch (index) {
    case '0': return '1️⃣';
    case '1': return '2️⃣';
    case '2': return '3️⃣';
    case '3': return '4️⃣';
    case '4': return '5️⃣';
    case '5': return '6️⃣';
    case '6': return '7️⃣';
    case '7': return '8️⃣';
    case '8': return '9️⃣';
    case '9': return '🔟';
    default: return '*️⃣'
  }
}


const createQuestionsRefs = createRefs('Questions');
const createResourcesRefs = createRefs('Resource');


const createResource = language => `
  -
    name: ${snake(language)}_resources
    label: ${calcNumber(language)} ${language} Resources
    folder: src/data/resources/${param(language)}/
    create: true
    fields:
        - 
          name: title
          label: Title
          widget: string
        -
          name: type
          label: Type
          widget: hidden
          default: resources
        -
          name: language
          label: language
          widget: hidden
          default: ${param(language)}        
        - 
          name: body
          label: Content
          widget: markdown
`


const createQuestions = language => `
  -
    name: ${snake(language)}_questions
    label: ${calcNumber(language)} ${language} Questions
    folder: src/data/questions/${param(language)}/
    create: true
    fields:
      - 
        name: title
        label: Title
        widget: string
      -
        name: type
        label: Type
        widget: hidden
        default: questions
      -
        name: language
        label: language
        widget: hidden
        default: ${param(language)}      
      - 
        name: Questions
        label: Questions
        widget: list
        fields:
          -
            name: question
            label: Question
            widget: string
          -
            name: description
            label: Description
            widget: markdown
            required: false
          -
            name: formatOfAnswer
            label: Format of answer
            widget: select
            options:
              - Single line of text
              - Multiple lines of text
              - True or False
              - One from pre-selected options
              - Several from pre-selected options
          -
            name: options
            label: Options
            widget: list
            required: false
            fields:
              -
                name: option
                label: option
                widget: string
`;


const questionsRef = languages
  .map(createQuestionsRefs)
  .join('');


const resourcesRef = languages
  .map(createResourcesRefs)
  .join('');

const buildContent = (language) => `
${createQuestions(language)}
${createResource(language)}
`
const content = languages
  .map(buildContent)
  .join('');


const translatedTitle = (language) => `
          -
            name: ${param(language)}
            label: ${language}
            widget: string
            required: false
            default: ""           
`;


const translatedTitles = languages
  .filter(language => language !== 'English')
  .map(translatedTitle)
  .join('');


const file = `
${config}
collections:
  - 
    name: pages-folders
    label: 🗃 Folders Pages
    folder: src/data/pages/folders/
    create: true
    fields:
      -
        name: title
        label: Title
        widget: string
      -
        name: type
        label: Type
        widget: hidden
        default: pages
      -
        name: page
        label: Page
        widget: hidden
        default: folders
      -
        name: translated-title
        label: Title Translations
        widget: object
        fields:
${translatedTitles}
      -
        name: icon
        label: Icon
        widget: icon-selector 
      -
        name: storyPages
        label: Question Pages
        widget: list
        required: false
        field:
          name: storyPage
          label: Linked Questions Page Entry Title
          widget: relation
          collection: pages-questions
          searchFields: 
            - title
          valueField: title

      -
        name: resourcesPages
        label: Resource Pages
        widget: list
        required: false
        field:
          name: resourcesPage
          label: Linked Resources Page Entry Title
          widget: relation
          collection: pages-resources
          searchFields: 
            - title
          valueField: title
  -
    name: pages-questions
    label: 📁 Questions Pages
    folder: src/data/pages/questions/
    identifier_field: english
    create: true
    fields:
      -
        name: type
        label: Type
        widget: hidden
        default: pages
      -
        name: page
        label: Page
        widget: hidden
        default: questions 
${questionsRef}
  -
    name: pages-resources
    label: 📂 Resources Pages
    folder: src/data/pages/resources/
    identifier_field: english
    create: true
    fields:
      -
        name: type
        label: Type
        widget: hidden
        default: pages
      -
        name: page
        label: Page
        widget: hidden
        default: resources 
${resourcesRef}
${content}
  -
    name: pages-static
    label: 📌 Static Page Content
    files:
      - 
        name: about
        label: About Page
        file: src/data/pages/static/about.md
        fields:
          -
            name: tagline
            label: Tagline
            widget: string
          -
            name: body
            label: Description
            widget: markdown
          -
            name: partners
            label: Partners Organisations
            widget: list
            required: false
            fields:
              -
                name: name
                label: Name
                widget: string
              -
                name: link
                label: URL Link
                widget: string
              -
                name: logo
                label: Logo
                widget: image
          -
            name: contributors
            label: Individual Contributors
            widget: list
            required: false
            fields:
              -
                name: name
                label: Name
                widget: string
              -
                name: link
                label: URL Link
                widget: string
`;


const createFile = (err) => {
  if (err) {
    return new Error (err);
  }

  console.log('New "config.yml" file created.');
  return true;
}


writeFile('./static/admin/config.yml', file, createFile);

