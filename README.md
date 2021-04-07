[![Build](https://github.com/kwetterr/ui/actions/workflows/build.yml/badge.svg)](https://github.com/robhogo/ui/actions/workflows/build.yml)
[![Publish Docker image](https://github.com/kwetterr/ui/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/robhogo/ui/actions/workflows/docker-publish.yml)
[![CodeQL](https://github.com/kwetterr/user-service/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/robhogo/ui/actions/workflows/codeql-analysis.yml)

# 🕸️ ui
web front end for robhogo application. Made with:
- VueJs + Typescript

## How to run?
Setup the project by installing its dependencies:
```zsh
npm install
```

Serve the application on http://localhost:8080.
```zsh
npm run serve
```


# Run as Docker Image
create image
```zsh
docker build -t bithero-ui .
```

run image
```zsh
docker run -it -p 8080:8080 --rm --name bithero-ui-app bithero-ui
```


