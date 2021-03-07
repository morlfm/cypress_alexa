

## Overview

This repo shows a basic example of using Cypress and Docker Compose to create simple end-to-end tests for any web application. This example uses a Go application, but you can reuse the pattern in this repository for any web application that can run in Docker.

For more information, see the blog post, ["Easy End-to-End Testing with Cypress."](https://mtlynch.io/painless-web-app-testing)


## Run end-to-end tests

To execute the end-to-end tests for docker_cypress_alexa, enter the following commands:

```bash
cd e2e
docker-compose up --exit-code-from cypress
```

When the command completes, you will see test output on the console and a video of the test run will appear in the folder `e2e/cypress/integration/videos`.
