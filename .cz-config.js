const chalk = require('chalk');
const conventionalCommitTypes = require('conventional-commit-types');
const map = require('lodash.map');
const max = require('lodash.max');
const padEnd = require('lodash.padend');

const extraCommitTypes = {
  "examples": {
    "description": "A change to the examples",
    "title": "Examples"
  },
};

function findLongest(strings) {
  return (
    max(
      map(strings, (key) => {
        return key.length;
      }),
    ) || 0
  );
}

function createCommitTypeChoices() {
  const keys = Object.keys({ ...conventionalCommitTypes.types, ...extraCommitTypes});
  const choicesMaxLength = findLongest(keys) + 1;
  return map(conventionalCommitTypes.types, function(type, key) {
    return {
      name: chalk.cyan(padEnd(key + ':', choicesMaxLength)) + ' ' + type.description,
      value: key,
    };
  });
}

module.exports = {
  types: createCommitTypeChoices(),

  // scopes: [
  //   { name: 'accounts' },
  //   { name: 'admin' },
  //   { name: 'exampleScope' },
  //   { name: 'changeMe' }
  // ],

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: '#',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the scope of this change (optional):',
    customScope: 'Denote the scope of this change:',
    subject: 'Write a short, imperative tense description of the change:\n',
    body: 'Provide a longer description of the change (optional). Use "|" to add line breaks:\n',
    breaking: 'List any breaking changes (optional):\n',
    footer: 'List any issues closed by this change (optional). e.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body'],

  subjectLimit: 120,
  footerPrefix : 'Fixes',
  askForBreakingChangeFirst : false,
};
