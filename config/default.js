var config = {
  s3: [
    {
      aws: {
        region: 'us-east-1',
        bucket: ''
      },
      labels: ['dev'],
      validate: true,
      create: false
    }
  ],
  dist: 'dist'
};

module.exports = config;
