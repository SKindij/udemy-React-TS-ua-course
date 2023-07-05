# udemy-React-ua-course

## Vite - Next Generation Frontend Tooling
_Get ready for a development environment that can finally catch up with you._

> _Typically, you might create a new project using Create React App, but it can take a lot of time to install over 140 MB of dependencies. Vite is a lightweight tool that takes up 31 MB of dependencies, which will save time in starting a new project. Vite also uses the browser-native ES (ECMAScript) modules for linking to JavaScript files, which doesn’t rebuild the entire bundle after each file change. These differences result in a faster experience when creating, updating, and building a React App with Vite._

It consists of two major parts:
* dev server that provides rich feature enhancements over native ES modules;
* build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### Scaffolding Your Vite Project
  * `npm create vite@latest` => _Then follow the prompts!_
     - `? Project name:   » vite-project`
     - `? Select a framework:   » React`
     - `? Select a variant:    » JavaScript`
  * in package.json
    - ```javascript
        {
          "name": "vite-project",
          "private": true,
          "version": "0.0.0",
          "type": "module",
          "scripts": {
            "dev": "vite",
            "build": "vite build",
            "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",
            "preview": "vite preview"
          },
          "dependencies": {
            "react": "^18.2.0",
            "react-dom": "^18.2.0"
          },
          "devDependencies": {
            "@types/react": "^18.0.37",
            "@types/react-dom": "^18.0.11",
            "@vitejs/plugin-react": "^4.0.0",
            "eslint": "^8.38.0",
            "eslint-plugin-react": "^7.32.2",
            "eslint-plugin-react-hooks": "^4.6.0",
            "eslint-plugin-react-refresh": "^0.3.4",
            "vite": "^4.3.9"
          }
        }
      ```





- - -

### udemy-project
> 1. install Vite globally by running following command:\
>  &emsp; &emsp;``npm install -g create-vite``
> 2. run following command to create new Vite project with React and TypeScript:\
>  &emsp; &emsp;`create-vite mastering-react --template react-ts``\
>  _this  will create new folder called "mastering-react" with initial Vite project structure_
> 3. navigate to the newly created project folder:\
>  &emsp; &emsp;``cd mastering-react``
> 4. then execute such command:\
>   &emsp; &emsp;``npm install``.

- - -

### mastering-react

Available commands:
  * ``cd mastering-react``
  * ``npm run dev``

Add Dependencies:
  + ``npm i vite-tsconfig-paths``
    - _Give vite ability to resolve imports using TypeScript's path mapping_

