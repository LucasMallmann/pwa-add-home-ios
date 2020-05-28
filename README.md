# pwa-add-home-ios

> pwa-add-home-ios

[![NPM](https://img.shields.io/npm/v/test.svg)](https://www.npmjs.com/package/test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Bring your pwa to iOS with notch detection out of the box!

## Install

```bash
npm install --save pwa-add-home-ios
```

Or with yarn

```
yarn add pwa-add-home-ios
```

## Usage

```tsx
import React, { Component } from 'react';

import logo from './logo.svg';

import Modal from 'pwa-add-home-ios';

const Example: React.FC = () => {
  return (
    <Modal
      title="Add this page to your home screen"
      image={logo}
      onClickBanner={() => console.log('You clicked the banner :)')}
      style={{
        backgroundColor: 'red',
      }}
    />
  );
};
```

## Usage with nextJs

With NextJS you must use the dynamic import. Since the lib needs to use the window object, it won't work on the server side. With dynamic import you can prevent the lib from loading on the server-side, and only import it on the client-side.

```tsx
import React, { Component } from 'react';
import dynamic from 'next/dynamic';

const AddToHomeScreen = dynamic(() => import('pwa-add-home-ios'), {
  ssr: false,
});

import logo from './logo.svg';

const Example: React.FC = () => {
  return (
    <Modal
      title="Add this page to your home screen"
      image={logo}
      onClickBanner={() => console.log('You clicked the banner :)')}
      style={{
        backgroundColor: 'red',
      }}
    />
  );
};
```

## License

MIT © [LucasMallmann](https://github.com/LucasMallmann)
