[![MIT Licensed][icon-license]][link-license]
[![NPM Version][icon-npm]][link-npm]
[![Test Coverage][icon-coverage]][link-coverage]

NPM Package JSON Lint config for Radical Condor public repositories

## Installation

```bash
yarn add -D @radicalcondor/npmlint-public-config
npx install-peerdeps @radicalcondor/npmlint-public-config
```

## Usage

Create a `.npmpackagejsonlintrc` in your project with the following:

```json
{
  "extends": "@radicalcondor/npmlint-public-config"
}
```

[icon-license]:
  https://img.shields.io/github/license/cubedevinc/config.svg?longCache=true&style=flat-square
[link-license]: LICENSE
[icon-npm]:
  https://img.shields.io/npm/v/@radicalcondor/npmlint-public-config.svg?longCache=true&style=flat-square
[link-npm]: https://www.npmjs.com/package/@radicalcondor/npmlint-public-config
[icon-coverage]:
  https://img.shields.io/codecov/c/github/cubedevinc/config/develop.svg?longCache=true&style=flat-square
[link-coverage]: https://codecov.io/gh/cubedevinc/config
