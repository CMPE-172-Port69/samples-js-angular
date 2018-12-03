pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''whoami; 
 echo "Setting up environment..."; npm install;'''
      }
    }
    stage('Build') {
      steps {
        sh '''cd okta-hosted-login; 
echo "Building..."; ng build; 
mv dist ../docker/landing-page;
cd ../server;
mv * ../docker/okta-server;  
cd ../docker/okta-server; 
npm install; '''
      }
    }
    stage('Deploy') {
      steps {
        sh 'echo "Deploying..."; cd Docker; sudo docker-compose build; nohup sudo docker-compose up &'
      }
    }
  }
}