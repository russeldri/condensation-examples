var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1'
      },
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

module.exports = config;
