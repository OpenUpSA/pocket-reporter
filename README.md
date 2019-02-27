# 📱 Pocket Reporter

**Pocket Reporter is a free, open-source news editor in your pocket.**

## Getting Started

### 1. Set up local environment
1. Clone repository by running `git clone https://help.github.com/OpenUpSA/pocket-reporter/`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Make sure you have the latest release of [Yarn](https://yarnpkg.com/en/docs/install) installed.
4. Run `yarn` in the root folder of the repository.
5. Run `yarn start` to spin up the development server.
6. Open `localhost:8000` in your browser.])

### 2. Modifying existing component/module
1. Run `yarn start:docs` and review documentation for existing code.
2. If modification is to a component or view, then run `yarn start:storybook` to spin up sandbox environment.

### 3. Making a pull request
1. If you are making a public pull request (no write access) use the [forking Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow).
2. If you are a project contributor (write access) use the [feature branch Git workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow).
3. Make a [pull request](https://www.atlassian.com/git/tutorials/making-a-pull-request) via the [Github](#github) dashboard to the `master` branch.
4. The owner of the repository will automatically be tagged in pull requests via the `docs/CODEOWNERS` file.
5. Once your code has been accepted and merged into `master` [Netlify](#netlify) will automatically deploy the changes to [pocketreporter.co.za](http://pocket-reporter.netlify.com).
