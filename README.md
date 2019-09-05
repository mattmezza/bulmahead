BulmAhead
======

## Install

`<script src="https://cdn.rawgit.com/mattmezza/bulmahead/master/dist/bulmahead.bundle.js"></script>`

```html
<div class="dropdown">
    <div class="dropdown-trigger">
        <input id="prova" class="input" type="text" placeholder="I ❤️ USA" aria-haspopup="true" aria-controls="prova-menu">
    </div>
    <div class="dropdown-menu" id="prova-menu" role="menu" />
</div>
```

```js
let st = [{label: 'Alabama', value: 'AL'}, ..., {label: 'Wyoming', value: 'WY'}]
bulmahead('input-id', 'menu-id', v => new Promise((rs,rj) => rs(st.filter(s=>s.startsWith(v))), 200, 2);
```

Of course you can customize your function and contact your backend, the important thing is that you return an array of strings (you can see an example of an usage with fetch).

## Develop

- `git clone https://github.com/mattmezza/bulmahead.git`
- `yarn install`
- `yarn start`
- open up your local version of `index.html` in `demo`
