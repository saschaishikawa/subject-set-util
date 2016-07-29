'use strict';
const api = require('panoptes-client');

exports.command = 'link-subjects';
exports.describe = 'creates a linked list among subjects in a set';
exports.builder = {
  'project': {
    describe: 'project id',
    alias: 'p',
    type: 'integer',
    demand: true
  },
  'subject-set': {
    describe: 'subject set id',
    alias: 's',
    type: 'integer',
    demand: true
  },
  'params': {
    describe: 'parameters in valid JSON format',
    type: 'string',
    demand: true
  }
}

exports.handler = function (argv) {
  let metadata = JSON.parse('{"metadata": ' + argv.params + '}');
  api.type('subject_sets').get({id: argv.subjectSet}).update(metadata).save()
    .catch( function(err) {
      console.log(err);
    })
}
