# 📄 Examles of some functions

## 🔐 Get user session

- 🖥️ **Server components**

```js
// import auth, signOut
import { auth, signOut } from '@/lib';

// Make async page.jsx file then
export default async function Page() {
  const session = await auth();
  
  return <>your JSX code here</>
}
```
- 🧑‍💻 **Client components**

```js
// import useSession and signOut from next-auth/react
import { signOut, useSession } from 'next-auth/react';

export default function ClientComponent() {
  const session = useSession()
  
  return <>your JSX code here</>
}
```

## 💾 Use local storage hook

- 🧑‍💻 **Client components**

```js
"use client"
import { useLocalStorage } from '@/hooks';
import Loading from './loading';

export default function ClientComponent() {
  const { value, setValue, isLoading } = useLocalStorage();

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
- 🧑‍💻 **Client components**

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

## Use `fetchAPI` to Get User Profile Data

This example demonstrates how to use the `fetchAPI` function to retrieve user profile data in a server-side component.

- 🧪 Using `fetchAPI` in a `page.jsx`

```js
// app/profile/page.jsx
import { fetchAPI } from '@/lib';

export default async function ProfilePage() {
  // Call your custom fetch function
  const response = await fetchAPI('/user/profile');

  if (response.status_code !== 200) {
    return <div>Error fetching profile data</div>;
  }

  const user = response.data;

  return (
    <div>
      <h1>👤 User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Add more fields as needed */}
    </div>
  );
}
```
