const createFolderContentPages = require('./src/templates/folderContent/createPages');
const createListOfFoldersPages = require('./src/templates/listOfFolders/createPages');
const createResourcePages = require('./src/templates/resourcePage/createPages');
const createQuestionsPages = require('./src/templates/questionsPage/createPages');


exports.createPages = (params) => {
  createFolderContentPages(params);
  createListOfFoldersPages(params);
  createResourcePages(params);
  createQuestionsPages(params);
}