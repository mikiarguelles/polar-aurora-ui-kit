# polar-aurora-ui-kit

`polar-aurora-ui-kit` is a sleek, React-based UI component library, drawing inspiration from the mesmerizing lights of
the polar auroras. Utilizing `styled-components` and `framer-motion`, it offers beautifully animated, responsive
components designed to elevate the user experience of any web application. Begin with our `AuroraButton` to add a splash
of vibrant colors and smooth interactions to your project.

## Installation

To incorporate `polar-aurora-ui-kit` into your project, install it via npm:

```bash
npm install polar-aurora-ui-kit
```

or with yarn:

```bash
yarn add polar-aurora-ui-kit
```

## Usage

To get started, import and use a component from the library like so:

```javascript
import React from 'react';
import { AuroraButton } from 'polar-aurora-ui-kit';

function MyApp () {
  return (
    <AuroraButton onClick={() => console.log('AuroraButton clicked!')}>
      Click Me
    </AuroraButton>
  );
}

export default MyApp;
```

## Components

### AuroraButton

An eye-catching button component that features a fluid gradient and engaging hover animation, perfect for making your
calls to action stand out.

#### Props

- `children`: ReactNode (required) - The content displayed within the button.
- All standard button props are supported and passed down to the underlying button element.

#### Example

```javascript
<AuroraButton onClick={yourHandler}>
  Your Button Text
</AuroraButton>
```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
