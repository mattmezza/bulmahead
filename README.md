BulmAhead
======

## Install

`<script src="https://raw.githubusercontent.com/mattmezza/bulmahead/blob/master/dist/bulmahead.bundle.js"></script>`

```html
<div class="dropdown">
    <div class="dropdown-trigger">
        <input id="prova" class="input" type="text" placeholder="I ❤️ USA" aria-haspopup="true" aria-controls="prova-menu">
    </div>
    <div class="dropdown-menu" id="prova-menu" role="menu" />
</div>
```

```js
let st = ['Alabama', ..., 'Wyoming']
bulmahead('input-id', 'menu-id', v => st.filter(s=>s.startsWith(v)).slice(0,5), 200);
```

Of course you can customize your function and contact your backend, the important thing is that you return an array of strings.

## Develop

- `git clone https://gitbub.com/mattmezza/bulmahead.git`
- `yarn install`
- `yarn start`