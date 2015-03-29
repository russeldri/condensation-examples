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
  dist: 'dist'
};

module.exports = config;
