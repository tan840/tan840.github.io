const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/tan840/ThreeDPortfolio.git',
  message: 'Deploy 🚀',
}, function(err) {
  if (err) {
    console.error('Deploy failed ❌', err);
  } else {
    console.log('Deployed successfully 🎉');
  }
});
