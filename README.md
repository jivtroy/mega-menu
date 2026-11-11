# Bootstrap Mega Menu

Bootstrap mega menu with native javascript events support.

### Contents

1. [Compatibility](#compatibility)
2. [Installation](#installation)
   1. [NPM](#npm)
   2. [Bun](#bun)
   3. [Deno](#deno)
   4. [PNPM](#pnpm)
   5. [Yarn](#yarn)
   6. [Nub](#nub)
   7. [Vlt](#vlt)
3. [Usage](#usage)
   1. [CDN](#cdn)
   2. [Local](#local)
   3. [Bundler](#bundler)
4. [Sponsors](#sponsors)
5. [Author](#author)
6. [License](#license)

## Compatibility

Library | Version
------- | -------
Bootstrap | >= 5.3 and < 6.0

## Installation

### NPM

```bash
npm install megamenu
```

### Bun

```bash
bun add megamenu
```

### Deno

```bash
deno add npm:megamenu
```

### PNPM

```bash
pnpm add megamenu
```

### Yarn

```bash
yarn add megamenu
```

### Nub

```bash
nub install megamenu
```

### Vlt

```bash
vlt install megamenu
```

## Usage

### CDN

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mega Menu</title>

    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/megamenu@1/dist/css/mega-menu.min.css" rel="stylesheet">
  </head>
  <body>
    <ul class="nav dropdown">
      <li class="nav-item position-static">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mega menu</a>
        <div class="dropdown-menu mega-menu">
          <div class="p-3">
            <div class="row">
              <div class="col-6">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link active" href="#">Item 1</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link active" href="#">Item 1</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/megamenu@1/dist/js/mega-menu.umd.js"></script>
  </body>
</html>
```

### Local

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Mega Menu</title>

    <!-- CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/mega-menu.min.css" rel="stylesheet">
  </head>
  <body>
    <ul class="nav dropdown">
      <li class="nav-item position-static">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Mega menu</a>
        <div class="dropdown-menu mega-menu">
          <div class="p-3">
            <div class="row">
              <div class="col-6">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link active" href="#">Item 1</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>
                </ul>
              </div>
              <div class="col-6">
                <ul class="nav flex-column">
                  <li class="nav-item"><a class="nav-link active" href="#">Item 1</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 2</a></li>
                  <li class="nav-item"><a class="nav-link" href="#">Item 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- JS -->
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/mega-menu.umd.js"></script>
  </body>
</html>
```

### Bundler

ESM import:

```js
import 'megamenu/css'
/* or */
import 'megamenu/dist/css/mega-menu.min.css'

import 'megamenu'
```

CommonJS import:

```js
require('megamenu/css')
/* or */
require('megamenu/dist/css/mega-menu.min.css')

require('megamenu')
```

CSS import:

```css
@import "megamenu/css";
/* or */
@import "megamenu/dist/css/mega-menu.min.css";
```

## Sponsors

## Author

* [Dev](https://dev.to/jivtroy)
* [YouTube](https://www.youtube.com/@jivtroy)

## License

This project is licensed under the **MIT License** - see the `LICENSE` file for details.