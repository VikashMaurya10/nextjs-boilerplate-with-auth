# Next js 14.2 Bolierplate with Auth V5

## Getting Started

### Clone the repositroy
```bash
git clone https://github.com/VikashMaurya10/nextjs-boilerplate-with-auth .
```

### Install all dependencies
```bash
bun i
# or
npm i
```

### Start the development server:
```bash
npm run dev
# or
bun dev
```

### Checkout browser:
```bash
http://localhost:3000
```


> [!IMPORTANT] 
> Code structure to follow

> [!TIP]
> Folder Structure
- Add all image, assets, json files to **assets** folder.
- **components** folder contains all re-usable components.
- Add non-reusable components to that specific folder. i.e - `page/Login/components`.
- Each component or page folder should be in camelcase and starts with Capital letter.
- Export all re-usable components from index so that it can be imported with non-relative url.
- **config** folder contains all third party lib config.
- **hooks** folder contains all custom hooks.
- **lib** folder contain all custom or 3rd party library.
- **page** folder contain all the web page UI component.
- **services** folder contain all API services and other 3rd party service.
- **styles** folder contains global css and module css.
- **util** folder contain constants and common functions.
- **zod-schema** folder contain zod schema for form validation.


```
src
.
├── ...
├── app
│   ├── fonts
│   ├── favicon
│   ├── layout
│   ├── loading
│   ├── not-found
│   ├── page
│   ├── other Routes
├── assets
│   ├── images
│   ├── json
│   ├── index
├── components
│   ├── ui
│   ├── index
├── config
├── hooks
│   ├── index
├── lib
│   ├── utils
│   ├── Wrapper
├── page
│   ├── index
│   ├── other
├── services
│   ├── api
│   ├── core
├── styles
│   ├── index
│   ├── global
├── utils
│   ├── index
```

### Code structure to follow
- All route contains Loading.jsx file, while data fetching is this file trigger a loading state for ui.
- All route page.jsx file must export metadata object like: 

```js
/**
 * Metadata details for this page
 */
export const metadata = {
  title: 'Home',
  description: 'Home page description'
};

```
- Any reusable constant and common function should go to **utils**
- Any global styles should go to global.css and any module based css goes to file like moduleName.css
- Any module based css should have a container to isolate css code and prevent overwrite
- All page should contain a description at top like :
```js
/**
 * This is a wrapper element on the root component.
 * It handles all additional work and states needed before initializing root component.
 */

// or

/**
 * Home page for application
 * Route name "/login"
 */
```

- Maintain standard code structure with comment. Declare all states and variables first and the the UseEffect and then all other method.
```js
//-------------- State & Variables --------------//

//-------------- Use Effects --------------//

//-------------- Other Methods --------------//
```
- Each method should contain description, parameter and return type comment such as :
```js
/**
 * Console the error log
 * @param {*} error
 */
```

- Each component should use handleError hook :
```js
const handleError = useErrorLog('page/login');
```

- Each method should use try catch and pass catch error to handleError :
```js
try{
  throw Exception "error message";
}
catch(e){
    handleError(e);
}
```

> [!TIP]
> Break large page UI into small section and components.

## Contributing
Pull requests (PRs) are welcome.
- Create a branch with your name from dev branch.
- Do changes in that branch.
- Push changes to your branch and create PR to staging branch.
- Get the PR reviewed for authenticity and merge it into staging.
- Then finally merge all changes from staging to master to deploy in prod.