## --legacy-peer-deps

## instalando o vue test utils
npm install --save-dev @vue/test-utils

### Run your unit tests
```
npm run test:unit
```

### Run your unit tests with specifc file
```
npm run test:unit -- src/store/user.spec.js
```

### Run your unit tests with specifc file and rebuild the snapshoot
```
npm run test:unit -- -u/
npm run test:unit -- src/store/user.spec.js -- -u/
```

### Run your end-to-end tests
```
npm run test:e2e
```
## Cypress list methods
https://docs.cypress.io/guides/references/assertions

## esse comando ira gravar video/screenshots de erros na pasta test>specs
passa o diretório do node_modules\.bin+/cypress run
D:\Cursos\VuejsBR\treinamento-vue3-code\frontend\dashboard\node_modules\.bin/cypress run

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
