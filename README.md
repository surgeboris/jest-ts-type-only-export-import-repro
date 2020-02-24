# Reproduction repo

Created to demonstrate a bug: Jest test runner fails to parse a "type-only imports/exports" ([a feature introduced in TS 3.8](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-exports)).

## Reproduction

First install dependencies with
```bash
$ npm ci
```

Then you can run the test with
```bash
$ npx jest
```

You can also make sure that the code is indeed valid TypeScript with
```bash
$ npx tsc -p .
```
