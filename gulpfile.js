var gulp = require('gulp');

var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: ''
      },
      labels: ['dev'],
      validate: false,
      create: false
    }
  ],
  src: './',
  dependencySrc: [
    'bower_components'
  ],
  projectName: 'condensation-examples',
  dist: 'dist',
};

// Will add necessary gulp tasks to build, compile and validate
// CloudFormation templates
require('condensation').buildTasks(gulp,config);
