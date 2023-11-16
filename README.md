# Bunny

This is a template for [Bun](https://bun.sh) projects with eslint support.

Run `bun install` or `bun i` to install dependencies from `package.json`. Scripts can be run with `bun run <script>` similar to the npm counterpart command `npm run <script>`.

## Install

The bun runtime can easily be [installed](https://bun.sh/docs/installation) by running the following command:

```sh
curl -fsSL https://bun.sh/install | bash
```

## Error Checking and Testing

To check the project for errors, run `lint` (eslint rules) or `tsc` (typescript type checking), or both together with `check`. All other scripts depend on `check` and will run it before executing.
In order to execute unit tests, run `test`, which automatically executes all defined tests in all files matching the extension pattern `[.|_][test|spec].[ts|tsx]`.

## Start and Watch

To start the project, run `start`, `start:inspect` or `watch` to start the project in watch mode. To enable [hot-mode](https://bun.sh/docs/runtime/hot#hot-mode) re-compiling without restarting the bun process, run `watch:hot`.

## Build and Compile

### Bun

To build the project for the bun runtime, run the scripts `build:bun` and `build:bun:min`. Alternatively, a native executable can be built by running `comile`.

### Web

If the project should be executable inside a web browser, run the scripts `build:web` and `build:web:min` to create a single javascript file that can be included by a script tag of the type `module` within the `head` tag of the `index.html` file.
To use dom types in a typescript file while having `types` in `tsconfig.json` set to `["bun-types"]`, add the following triple-slash directives at the top of the file:

```ts
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
```
