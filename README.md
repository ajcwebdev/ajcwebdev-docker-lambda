# Example Project for [How to Deploy a Docker Container on AWS Lambda](https://dev.to/ajcwebdev/how-to-deploy-a-docker-container-on-aws-lambda-57gg)

This project has been generated using the `aws-nodejs-docker` template from the [Serverless framework](https://www.serverless.com/). See the [documentation](https://www.serverless.com/framework/docs/providers/aws/) for detailed instructions.

## Deployment instructions

> **Requirements**: Docker. In order to build images locally and push them to ECR, you need to have Docker installed on your local machine. Please refer to [official documentation](https://docs.docker.com/get-docker/).

In order to deploy your service, run the following command

```
sls deploy
```

## Test your service

After successful deployment, you can test your service remotely by using the following command:

```
sls invoke --function hello
```
