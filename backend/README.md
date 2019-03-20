

#### Intalando as dependências
O -E é para instalar a versão exata. Esta seram usadas tbm em frontend
```sh

npm i --save -E body-parser@1.15.2 express@4.14.0 mongoose@4.7.
0 node-restful@0.2.5 pm2@2.1.5
```

Este, abaixo, somente em desenvolvimento:

```sh
npm i --save-dev -E nodemon@1.11.0
```

## Docker
### MongoDB
```sh
docker-compose -f stack.yml up
```
#### Acessando Mongo
`
http://localhost:8081
`