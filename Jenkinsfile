pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Copy environment variables') {
            steps {
                sh 'cp .env.sample .env'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
    }
    post {
        always {
            echo 'Running'
        }
        success {
            echo 'Success'
        }
        failure {
            echo 'Fail'
        }
        unstable {
            echo 'Unstable'
        }
        changed {
            echo 'Status changed'
        }
    }
}