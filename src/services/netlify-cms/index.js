/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/camelcase */

import CMS, { init } from 'netlify-cms';
import IconSelector from './widgets/IconSelector';
import IconSelectorMarkup from './widgets/IconSelector/Markup';
import createFolders from './collections/createFolders';
import createQuestions from './collections/createQuestions';
import createResources from './collections/createResources';

import FolderPreview  from './previews/FolderPreview'


const config = {
  backend: {
    name: 'github',
    repo: 'OpenUpSA/pocket-reporter',
  },
  media_folder: 'static/assets',
  public_folder: 'assets',
  publish_mode: 'editorial_workflow',
  load_config_file: false,
  editor: {
    preview: false,
  },
  collections: [createFolders(), createQuestions(), createResources()],
};

CMS.registerWidget('icon-selector', IconSelector, IconSelectorMarkup);
CMS.registerPreviewTemplate("folders", FolderPreview);

init({ config });
