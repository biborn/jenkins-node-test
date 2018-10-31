pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Test') {
            steps {
                sh 'npm --version'
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