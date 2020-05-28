# pwa-add-home-ios

> pwa-add-home-ios

[![NPM](https://img.shields.io/npm/v/test.svg)](https://www.npmjs.com/package/test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Bring your pwa to iOS!

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

## License

MIT © [LucasMallmann](https://github.com/LucasMallmann)
