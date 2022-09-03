# my-store-ultra-system-incremented-mongo

Depois de ver como async/await deixa o código muito mais legível que deixar várias promessas umas dentros das outras, decidiu refatorar o sistema para que fosse utilizado async/await em todos os lugares possíveis.

Refatore as funções das rotas de **produto** do arquivo `src/app.js`, retirando `then` e `catch` para utilizar `async`/`await` dentro de blocos `try`/`catch`.
