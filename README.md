# School-wischool-frontend

## Getting Started

### Clone the repositroy:
```bash
# repo url here
```

### Install all dependencies:
```basha
bun i
# or
npm i
```

### Generate auth secret:
```bash
npx auth secret
# or
bunx auth secret
```

### Start the development server:
```bash
npm run dev
# or
bun dev
```

### Build the application for production:
```bash
npm run build
# or
bun run build
```

### Format the code using Prettier:
```bash
npm run format
# or
bun run format
```

### Perform a deep clean (remove node_modules and .next dir):
```bash
npm run deepclean
# or
bun run deepclean
```

### Checkout development or production server:
```bash
http://localhost:3000
```

### Install new shadcn component in app:
```bash

# Exmaple:

npx shadcn@latest add dialog
# or
bun x --bun shadcn@latest add dialog
```



> [!IMPORTANT] 
> Please follow predefined Code structure 

### Folder Structure:
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
:
├── ...
├── app
│   ├── fonts
│   │     ├── static
│   │     ├── index
│   ├── favicon
│   ├── api
│   ├── layout
│   ├── loading
│   ├── not-found
│   ├── other Routes
├── assets
│   ├── images
│   ├── data
│   ├── index
├── components
│   ├── ui
│   ├── index
├── config
│   ├── index
├── hooks
│   ├── index
├── lib
│   ├── Wrapper
│   ├── utils
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
│   ├── common
│   ├── constants
│   ├── index
├── zod-schema
├── middleware
│
:
```

### Code structure to follow:
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
 * Login page for application
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

## Get user session

- **Server components**

```js
// import auth, signOut from config
import { auth, signOut } from '@/config';

// Make async page.jsx file then
export default async function Page() {
  const session = await auth();
  
  // return JSX
  return <>your JSX code here</>
}
```
- **Client components**

```js
// import useSession and signOut from next-auth/react
import { signOut, useSession } from 'next-auth/react';

// Make async then page.jsx file than
export default async function ClientComponent() {
  const session = useSession()
  
  // return JSX
  return <>your JSX code here</>
}
```

> [!TIP]
> Break large page UI into small section and components.

### Used Technologies:
- ``Next.js @14.2.15``: Flexible React framework.
- ``React @18``: Library for building user interfaces.
- ``Tailwind CSS @3.4.1``: Utility-first CSS framework.
- ``ESLint @8``: Linting tool for identifying and reporting on patterns in JavaScript.
- ``Prettier @3.3.3``: Opinionated code formatter.
- ``Shadcn``: React component library that offers a set of pre-built, customizable components for building modern web apps.
- ``Auth.js @5.0.0-beta.21``: An open-source authentication library for JavaScript applications.
- ``React Icons @5.3.0``: Include popular icons in the project.

> [!WARNING]
> Avoid installing any npm packages unless you've consulted with the team lead.

## Contributing
Pull requests (PRs) are welcome.
- Create a branch with your name from dev branch.
- Do changes in that branch.
- Push changes to your branch and create PR to staging branch.
- Get the PR reviewed for authenticity and merge it into staging.
- Then finally merge all changes from staging to master to deploy in prod.

## Resources
- [Next js](https://nextjs.org/docs)
- [React](https://react.dev/learn)
- [Tailwind css](https://tailwindcss.com)
- [Eslint](https://eslint.org/)
- [Shadcn](https://ui.shadcn.com/docs)
- [Prettier](https://prettier.io/)
- [Auth v5](https://authjs.dev/getting-started/migrating-to-v5)
- [React icons](https://react-icons.github.io/react-icons/)
- [Figma](https://www.figma.com/)
