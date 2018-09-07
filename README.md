# Project Explorer

Sample front-end project repository for implementing features in Dora

## Installation

Ensure you have version `9.6.0` of [nodeJS](https://nodejs.org/en/download/) installed.

Install Dependencies:

```
 npm install
```

## Usage

Launch development environment with live reload

```
npm start
```

Build source code into distributable javascript

```
npm run build
```

Run test suite

```
npm test
```

## Reference Sheet

The following are some quick sheets into the technologies used to build this sample project.

* [bpmn-js](https://github.com/bpmn-io/bpmn-js) - BPMN Diagram viewer and modeller
* [typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - Strict typings and language features
* [mobx](https://mobx.js.org/getting-started.html) - Reactive state management
* [mobx-react](https://github.com/mobxjs/mobx-react) - React bindings for Mobx
* [office-ui-fabric-react](https://developer.microsoft.com/en-us/fabric) - Microsoft Fabric UI

## Coding Guidelines

The project has three configuration files included to help keep to guidelines. If you're using `vscode` ensure you have these extensions installed:

* [Prettier](https://github.com/prettier/prettier-vscode) - ext install prettier-vscode
* [EditorConfig](https://github.com/editorconfig/editorconfig-vscode) - ext install EditorConfig
* [Tslint](https://github.com/Microsoft/vscode-tslint) - ext install eg2.tslint

## Description

![project explorer explanation](project_explorer.png?)

The sample project is a single page application with no router. By default it will display

* The number of diagrams in the store
* Each diagram title

When a diagram title is clicked it will show the title and xml of that diagram underneath. **These UI parts are just to help understand how the project fits together and may be removed**.

Depending on the task provided the `src/features/sandbox/Sandbox.tsx` will generally be the entry point for any new UI code/components added into the system.

### Typescript

If you are unfamiliar with typescript you may tweak the linting by editing the `tslint.json` file in the root of the project to be more ad hoc.

A common issue you may find is from importing JavaScript files into a TypeScript project without proper typings. To get around this try using `npm i -D @types/{javascript library}` to install community typings. Alternatively, for libraries such as `bpmn-js` where there are no official or community typings you may have to import using `require` instead of typescript module importing. For example:

```typescript
import * as bpmn from 'bpmn-js'; // This won't work due to no available typings
import bpmn from 'bpmn-js'; // This is importing a default export. But there are no typings, so this won't work either
import {} from 'bpmn-js'; // There's nothing here.

const BPMN = require('bpmn-js'); // This will work. It will be of type {any} and usable like any other JavaScript.
```
