/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require('path');
const createPagesArray = require('./node-build/services/node/createPagesArray').default;

const query = `{
  allFoldersJson {
    edges {
      node {
        icon
        title
        translations {
          afr
          spa
          xho
          nso
          por
          sot
          tsn
          zul
        }
        questions {
          content {
            title
            questions {
              question
              description
            }
            afr {
              title
              questions {
                question
                description
              }
            }
            spa {
              title
              questions {
                question
                description
              }
            }
            xho {
              title
              questions {
                question
                description
              }
            }
            nso {
              title
              questions {
                question
                description
              }
            }
            por {
              title
              questions {
                question
                description
              }
            }
            tsn {
              title
              questions {
                question
                description
              }
            }
            zul {
              title
              questions {
                question
                description
              }
            }
          }
        }
        resources {
          content {
            title
            body
          }
        }
      }
    }
  }
}`;

const convertTemplatesToAbsolutePath = data => {
  const result = data.map(({ component, ...items }) => {
    const innerResult = { component: resolve(component), ...items };
    return innerResult;
  });

  return result;
};

exports.createPages = ({ graphql, actions }) =>
  new Promise(innerResolve => {
    const { createPage } = actions;

    graphql(query)
      .then(createPagesArray)
      .then(convertTemplatesToAbsolutePath)
      .then(data => data.forEach(pageProps => createPage(pageProps)))
      .then(innerResolve);
  });
