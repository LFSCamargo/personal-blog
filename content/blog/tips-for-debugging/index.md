---
title: "Tips to improove React Debugging"
date: "2020-05-05"
description: "In this article i'll show how to improove react debugging with some little tips using: Debug, React DevTools, and using the chrome debugging with breakpoints"
image: ./cover.png
---

Hello my name is Luiz i'm a software engineer and in this article im going to show you how to improove
debugging on your react applications.
So without any further ado let's get started

# Debug

Do you know how expressjs and other nodejs libraries handle console.logs? They use debug for it

Do you know what debug is? debugjs is an npm library that will help you cleaning production logs and also
cleaning your console under development by using some filters.

Now im going to show you how debug works.

First you need to install the library, by running this command:

```sh
yarn add --dev debug
```

After this add this before your `yarn start` command `REACT_APP_DEBUG=*`, and create this config `debugConfig.js` file:

```jsx
import debug from "debug"

const { NODE_ENV, REACT_APP_DEBUG } = proccess.env

if (NODE_ENV === "development") {
  return debug.enable(REACT_APP_DEBUG)
} else {
  return debug.disable("*")
}
```

After create import the `debugConfig.js` to the root component:

(NOTE: I'll show in an example but apply the same proccess to your project)

```jsx
import React from 'react';
import debug from 'debug'
import 'debugConfig'

const log = debug('root:component');

const Root = () => {
  React.useEffect(() => {
    log('Welcome to the root application')
  }, [])
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

...
```

Now i'll show you a quick example of the filtering that i told you lets apply the same code but with two console.logs,
and we will change the env variable with `REACT_APP_DEBUG=root:component*`:

```jsx
import React from 'react';
import debug from 'debug'
import 'debugConfig'

const log = debug('root:component');
const secondLog = debug('not:show')

const Root = () => {
  React.useEffect(() => {
    log('Welcome to the root application')
    // this log will never show until we change the REACT_APP_DEBUG variable
    secondLog('This log will not show')
  }, [])
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

...
```

# React Dev Tools

There's a chrome extension that you can add to chrome and inspect the react code props, state and context values; and it's called [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) Install this to your chrome and go to the chrome developer tools and after go to: ``

<!--

I am sure that you already found a website with an image not loading, maybe you don't really cared that much, but a lot of users care and find it very irritating. It's something incredible simple to solve, that adds a solid value to your application/website.

What we will build, is a image component that can handle broken images, by having a fallback URL.
To start off, let's build a simple Image React component with Typescript.

```jsx
interface Props {
  url: string;
}

const Image: React.FC<Props> = ({ url, ...rest }) => <img src={url} {...rest} />
```

As you can see, it's just a component that returns a `img` tag, now to add the fallback url we can use the property `onError` that the `img` tag has and almost no one knows about it.

```jsx
interface Props {
  url: string;
  fallback?: string;
}

const handleImageError = fallback => event => (event.target.src = fallback)

const Image: React.FC<Props> = ({ url, fallback, ...rest }) => (
  <img src={url} onError={handleImageError(fallback)} {...rest} />
)
```

So if the main url fails, it will change the `src` from the image to the passed fallback url, which could be for example a default image. And it works! you can already try it, check the gif below on how to manually test it.

![gif](./fallback-image.gif)

Just change the URL to something non-existent and you will see that it will change the image source to the fallback one.
Now, how to test it with Jest? After long and painful hours of trying to test it properly, I found (with the help of the community), a not-too-bad solution, it's not the best, but at least we can test it properly.

```jsx
import React from "react"
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent, screen } from "@testing-library/react"
import Image from ".."

const imageUrl =
  "https://images.unsplash.com/photo-1531436107035-40b2e85b7a1b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;w=1000&amp;q=80"
const fallbackUrl =
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
const imageErrorUrl = "error://test"

describe("Image", () => {
  it("should render the fallback image if the main one has an error", () => {
    render(<Image src={imageErrorUrl} fallback={fallbackUrl} />)

    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", imageErrorUrl)
    fireEvent.error(image) // Here we trigger the error event
    expect(image).toHaveAttribute("src", fallbackUrl) // and check if the src changed
  })
})
```

Remembering we need the `@testing-library/jest-dom/extend-expect` to be able to use the `toHaveAttribute` property.
It's a simple test, we are getting the image tag, forcing an error event to happen there, and checking if the image `src` has changed to the `fallbackUrl`.

That's it! now you have a simple image component with a fallback, that you can reuse it in your application. -->
