[![MIT Licensed][icon-license]][link-license]
[![NPM Version][icon-npm]][link-npm]
[![Test Coverage][icon-coverage]][link-coverage]

`tsconfig.json` for Radical Condor repositories

## Installation

```bash
yarn add -D @radicalcondor/tsconfig
npx install-peerdeps @radicalcondor/tsconfig
```

## Usage

Create a `tsconfig.json` in your project with the following:

```json
{
  "extends": "@radicalcondor/tsconfig",
  "compilerOptions": {
    "outDir": "dist",
    "target": "es2018",
    "lib": [
      "es2018"
    ]
  }
}
```

[icon-license]: https://img.shields.io/github/license/cubedevinc/config.svg?longCache=true&style=flat-square
[link-license]: LICENSE
[icon-npm]: https://img.shields.io/npm/v/@radicalcondor/tsconfig.svg?longCache=true&style=flat-square
[link-npm]: https://www.npmjs.com/package/@radicalcondor/tsconfig
[icon-coverage]: https://img.shields.io/codecov/c/github/cubedevinc/config/develop.svg?longCache=true&style=flat-square
[link-coverage]: https://codecov.io/gh/cubedevinc/config
