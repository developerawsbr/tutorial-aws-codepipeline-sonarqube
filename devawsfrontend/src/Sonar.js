const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl : 'http://your-ec2-public-dns:9000',
    options: {
      'sonar.projectKey': 'br.com.devawsfrontend',
      'sonar.projectVersion': '1.0',
      'sonar.sourceEncoding': 'UTF-8',
      'sonar.sources': 'src',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  },
  () => process.exit()
)