# "scripts":
  {
    "build": "tsc",
    "dev:server": "ts-node-dev -r tsconfig-paths/register --inspect --transpileOnly --ignore-watch node_modules src/shared/infra/http/server.ts",
    "typeorm": "ts-node-dev  -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
    "test": "cross-env NODE_ENV=test jest"
  }

## TESTES-V2

