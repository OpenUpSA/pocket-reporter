/* eslint-disable import/no-extraneous-dependencies */

import { kebab } from 'change-case';

import createResources from './createResources';
import createQuestions from './createQuestions';
import formatResourcesPreview from './formatResourcesPreview';

const createNestedAll = (isoKeys, dataSource) => {
  const result = isoKeys.map(isoKey =>
    dataSource
      .map(object => {
        if (!object) {
          return null;
        }

        const resources = object.resources ? object.resources.map(createResources(isoKey)) : [];
        const questions = object.questions ? object.questions.map(createQuestions(isoKey)) : [];

        const addParentLinks = (items, parentUrl) =>
          items.map(innerObject => {
            if (!innerObject) {
              return null;
            }

            const key = Object.keys(innerObject)[0];
            const newValue = {
              [key]: {
                ...innerObject[key],
                parentUrl,
              },
            };

            return newValue;
          });

        const { title, translations, icon } = object;

        if (isoKey === 'eng') {
          const link = `/eng/folders/${kebab(title)}/index.html`;
          return [
            {
              [`/eng/folders/index.html`]: {
                type: 'folder',
                isoKey,
                folders: [
                  {
                    icon,
                    title,
                    click: link,
                  },
                ],
              },
            },
            {
              [link]: {
                type: 'content',
                title,
                isoKey,
                fallback: false,
                icon,
                resources: formatResourcesPreview(resources),
                questions: questions.filter(notNull => !!notNull),
              },
            },
            ...addParentLinks(resources, link),
          ];
        }

        if (!translations[isoKey] || /^\s+$/.test(translations[isoKey])) {
          const link = `/${isoKey}/folders/${kebab(title)}/index.html`;
          return [
            {
              [`/${isoKey}/folders/index.html`]: {
                type: 'folder',
                isoKey,
                folders: [
                  {
                    icon,
                    title,
                    click: link,
                  },
                ],
              },
            },
            {
              [link]: {
                type: 'content',
                isoKey,
                fallback: true,
                title,
                icon,
                resources: formatResourcesPreview(resources),
                questions: questions.filter(notNull => !!notNull),
              },
            },
            ...addParentLinks(resources, link),
          ];
        }

        const link = `/${isoKey}/folders/${translations[kebab(isoKey)]}/index.html`;
        return [
          {
            [`/${isoKey}/folders/index.html`]: {
              type: 'folder',
              isoKey,
              folders: [
                {
                  icon,
                  title: translations[isoKey],
                  click: link,
                },
              ],
            },
          },
          {
            [link]: {
              type: 'content',
              title: translations[isoKey],
              isoKey,
              fallback: false,
              icon,
              resources: formatResourcesPreview(resources),
              questions: questions.filter(notNull => !!notNull),
            },
          },
          ...addParentLinks(resources, link),
        ];
      })
      .filter(notNull => !!notNull),
  );

  return result;
};

export default createNestedAll;
