# Next js 15 Boilerplate with Auth js V5@beta

## Getting Started

### Get preview:
[https://nextjs-boilerplate-with-auth.vercel.app](https://nextjs-boilerplate-with-auth.vercel.app/)

### Clone the repository:
```bash
git clone https://github.com/VikashMaurya10/nextjs-boilerplate-with-auth .
# or
git clone git@github.com:VikashMaurya10/nextjs-boilerplate-with-auth.git .

```
### Install all dependencies:
```bash
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
### Setup environment variable

```js
// In the root folder of the project, create a .env.local file and paste the content of example.env into it.
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

### Perform a deep clean (remove node_modules and .next dir):
```bash
npm run cls #or cls:all
# or
bun run cls #or cls:all
```

### Checkout development or production server:
```bash
http://localhost:3000
```

### Install new shadcn component in the application:
```bash
# Example:
npx shadcn@latest add dialog
# or
bun x --bun shadcn@latest add dialog
```

> [!IMPORTANT] 
> Please follow predefined Code structure 

### Folder Structure:
- **actions** Folder contains all server action.
- **app** Folder contains all routes.
- **assets** Folder contains all Add all image, assets, json files.
- **components** folder contains all re-usable components. *`Add non-reusable components to that specific folder. i.e - Login/_components`*.
- Export all re-usable components from index so that it can be imported with non-relative url.
- **config** Folder contains all third party lib and application config.
- **fonts** Folder contains all static and google fonts.
- **hooks** Folder contains all custom hooks.
- **lib** Folder contain all custom or 3rd party library, utility function.
- **styles** Folder contains global css and module css.
- **zod-schema** Folder contain all zod schema for form validation.

```
src
:
├── ...
├── action
│   ├── index
├── app
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
│   ├── constants
│   ├── index
├── fonts
│   ├── static
│   ├── index
├── hooks
│   ├── index
├── lib
│   ├── fetcher
│   ├── wrapper
│   ├── utils
│   ├── index
├── styles
│   ├── index
│   ├── global
├── zod-schema
│   ├── index
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
  description: 'Home page description',
  ...others
};

```
- Any reusable constant and common function should go to **config** and **lib** accordingly.
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
const handleError = useErrorLog('login/index');
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

export default function ClientComponent() {
  const session = useSession()
  
  // return JSX
  return <>your JSX code here</>
}
```

## Use localstorage hook
- **Client components**

```js
"use client"
import { useLocalStorage } from '@/hooks';
import Loading from './loading';

export default function ClientComponent() {
  const { value, setValue, isLoading } = useLocalStorage();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <pre>{JSON.stringify(value, null, 2)}</pre>
       <Button
          onClick={() =>
            setValue((prev) => ({
              ...prev,
              theme: prev.theme === 'light' ? 'dark' : 'light'
            }))
          }
        >
          Toggle Theme
        </Button>
    </>
  );
}
```

## Use React Suspense
- **Client components**

```js
'use client';
import dynamic from 'next/dynamic';
import { Suspense } from "react";

// Dynamically load Test component
const Test = dynamic(() => import('./Test'));

const Parent = ({ _this }) => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Test />
      </Suspense>
    </div>
  );
};

export default Parent;

// Test.jsx
'use client';

import { useLocalStorage } from "@/hooks";
import { Button } from "@/components";

const Test = () => {
    const { value, setValue, isLoading } = useLocalStorage();
    return (
        <div>
            value: {JSON.stringify(value, null, 2)}
            <Button
                variant="reset"
                size="reset"
                onClick={() => {
                    setValue((prev) => ({
                        ...prev,
                        theme: prev?.theme === 'light' ? 'dark' : 'light'
                    }));
                }}
            >
                Toggle Theme
            </Button>
        </div>
    );
};

export default Test;
```

> [!TIP]
> Break large page UI into small section and components.

### Used Technologies:
- ``Next.js @15.1.2``: Flexible React framework.
- ``React @19``: React is the javaScript library for web and native user interfaces.
- ``Auth.js @5.0.0-beta.25``: An open-source authentication library for JavaScript applications.
- ``Shadcn``: React component library that offers a set of pre-built, customizable components for building modern web apps.
- ``React Hook Form @7.54.2``: Performant, flexible and extensible forms with easy-to-use validation.
- ``zod @3.24.1``: Zod is a schema declaration and validation library.
- ``crypto-js @4.2.0``: Zod is a schema declaration and validation library.
- ``swiper @11.1.15``: Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior.
- ``Tailwind CSS @3.4.1``: Utility-first CSS framework.
- ``Tailwind Merge @3.4.1``: Merge the tailwind css util classes.
- ``ESLint @9``: Linting tool for identifying and reporting on patterns in JavaScript.
- ``Prettier @3.4.2``: Opinionated code formatter.
- ``prettier plugin tailwindcss" @0.6.9``: Plugin that automatically sorts classes based on our recommended class order.
- ``React Icons @5.4.0 and lucide-react @0.469.0``: Include popular icons in the project.
- ``sharp @0.33.5``:  High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, GIF, AVIF and TIFF images.

> [!WARNING]
> Avoid installing any npm packages unless you've consulted with the team lead.

## Contributing
Pull requests (PRs) are welcome.
- First, raise an issue on GitHub and create an associated branch.
- Make the necessary changes in that branch.
- Push changes to the associated branch and create a PR to the staging branch.
- Get the PR reviewed for authenticity and merge it into the staging branch.
- Finally, merge all changes from the staging branch to the master branch to deploy to production.

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