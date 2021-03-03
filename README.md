# robho-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Build Docker Image
docker build -t bithero-ui .

# Run Docker Image
docker run -it -p 8080:80 --rm --name bithero-ui bithero-ui-app

