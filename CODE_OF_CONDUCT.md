# 📏 Code of conduct

> [!IMPORTANT] 
> Please follow predefined code structure 

## 🗂️ Folder Structure:

- **actions** folder contains all server action and api calls.
- **app** folder contains app router.
- **assets** folder contains all image, assets, json files.
- **components** folder contains all re-usable components.
- Add non-reusable components to that specific folder. i.e - `login/_components`.
- **config** folder contains all third party lib config.
- **fonts** folder contains font related configuration.
- **hooks** folder contains all custom hooks.
- **lib** folder contain all custom or 3rd party library functions.
- **styles** folder contains all css files.
- **zod-schema** folder contain zod schema for form validation.

> [!NOTE]
> Export all re-usable components from index so that it can be imported with non-relative url.
> Each component or folder should be in kabab-case.

```
src
:
│
├── actions
│   ├── auth
│   ├── index
├── app
│   ├── api
│   ├── error
│   ├── favicon
│   ├── layout
│   ├── loading
│   ├── not-found
│   ├── other Routes
├── assets
│   ├── images
│   ├── data
│   ├── index
│   ├── svg
├── components
│   ├── data-table
│   ├── layouts
│   ├── ui
│   │   ├── shadcn-components
│   ├── index
│   ├── image-component
│   ├── swiper
│   ├── skeleton-loader
│   ├── tailwind-indocator
│   ├── theme-toggle
├── config
│   ├── app
│   ├── index
│   fonts
│   ├── static
│   ├── index
├── hooks
│   ├── index
│   ├── use-error-log
│   ├── use-local-storage
│   ├── use-media-query
│   ├── use-mobile
├── lib
│   ├── auth
│   ├── env
│   ├── fetcher
│   ├── index
│   ├── local-storage
│   ├── providers
│   ├── utils
│   ├── web-vitals
│   ├── with-auth
├── styles
│   ├── globals
│   ├── loading-skeleton
│   ├── tailwind
├── zod-schema
│   ├── index
├── instrumentation
├── middleware
│
:
```

## 🧾 Code structure to follow:

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

> [!TIP]
> Break large page UI into small section and components.

> [!WARNING]
> Avoid installing any npm packages unless you've consulted with the team lead.

## 🤝 Contributing

Pull requests (PRs) are welcome.
- First, raise an issue on GitHub and create an associated branch.
- Make the necessary changes in that branch.
- Push changes to your branch and create PR to staging branch.
- Get the PR reviewed for authenticity and merge it into staging.
- Then finally merge all changes from staging to master to deploy in prod.
