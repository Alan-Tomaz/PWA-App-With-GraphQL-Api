# Schema First Approach
Utiliza schema.graphql para configuarar os schemas. Sempre é necessário primeiro configurar o schema da query e depois configurar o resolver. É possível utilizar o graphql-codegen para gerar os tipos automaticamente para o resolver se baseando nos schemas.

# Code First Approach
Não é necessário configurar schemas, schemas são gerados automaticamente com type-graphql com base no código do seu resolver