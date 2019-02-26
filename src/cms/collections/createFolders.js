const createFolders = () => ({
  name: 'folders',
  label: '📁 Folders',
  folder: 'src/data/folders/',
  identifier_field: 'folders_title',
  create: true,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'hidden',
      default: 'folders',
    },
    {
      name: 'folders_title',
      label: 'Folder Title',
      widget: 'string',
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'icon-selector',
    },
    {
      name: 'questions_link',
      label: '✏️ Questions Title',
      widget: 'list',
      field: {
        name: 'title',
        label: 'Title',
        collection: 'questions',
        valueField: 'questions_title',
        searchFields: ['questions_title'],
        widget: 'relation',
        required: false,
      },
    },
    {
      name: 'resources_link',
      label: '📚 Resource Title',
      widget: 'list',
      field: {
        name: 'title',
        label: 'Title',
        collection: 'resources',
        valueField: 'resources_title',
        searchFields: ['resources_title'],
        widget: 'relation',
        required: false,
      },
    },
  ],
});

export default createFolders;
