var gitrev = require('git-rev-sync');

var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: 'condensation-examples.us-east-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'us-west-2',
        bucket: 'condensation-examples.us-west-2'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'us-west-1',
        bucket: 'condensation-examples.us-west-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'eu-west-1',
        bucket: 'condensation-examples.eu-west-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'eu-central-1',
        bucket: 'condensation-examples.eu-central-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'ap-southeast-1',
        bucket: 'condensation-examples.ap-southeast-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'ap-southeast-2',
        bucket: 'condensation-examples.ap-southeast-2'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'ap-northeast-1',
        bucket: 'condensation-examples.ap-northeast-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    },
    {
      aws: {
        region: 'sa-east-1',
        bucket: 'condensation-examples.sa-east-1'
      },
      prefix: '/'+gitrev.branch(),
      validate: true,
      create: false
    }
  ],
  dist: 'dist'
};

module.exports = config;
