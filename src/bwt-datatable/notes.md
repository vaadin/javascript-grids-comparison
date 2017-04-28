# bwt-datatable

[bwt-datatable](https://github.com/bluewatertracks/bwt-datatable) is a supported fork of [David Mulder's paper-datatable](https://github.com/David-Mulder/paper-datatable).

## Install

    <link rel="import" href="/bower_components/bwt-datatable/bwt-datatable.html">

## Usage
```
<paper-datatable>
  <paper-datatable-column property="firstName">
  </paper-datatable-column>
  <paper-datatable-column property="lastName">
  </paper-datatable-column>
  <paper-datatable-column property="address">
    <template>
      <p style="white-space: normal">[[value.street]], [[value.city]]</p>
    </template>
  </paper-datatable-column>
</paper-datatable>
```
- 3 missing imports
```
GET http://127.0.0.1:8081/bower_components/paper-progress/paper-progress.html 404 (Not Found)
GET http://127.0.0.1:8081/bower_components/iron-icons/iron-icons.html 404 (Not Found)
GET http://127.0.0.1:8081/bower_components/iron-iconset-svg/iron-iconset-svg.html 404 (Not Found)
```
- And errors (x3)
```
Uncaught TypeError: Cannot set property '_pdt_getArrayItemLabel' of undefined
    at HTMLElement._registerEvilFunctions (bwt-datatable-column.html:421)
    at HTMLElement.<anonymous> (bwt-datatable.html:582)
    at polymer.html:1363
    at Object._atEndOfMicrotask (polymer-mini.html:2049)
    at MutationObserver.window.MutationObserver.observe.characterData (polymer-mini.html:2064)
```

## Support

Supported in Polymer 1.X versions
