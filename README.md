# cspace-ui-plugin-ext-nagpra

[![npm package](https://img.shields.io/npm/v/cspace-ui-plugin-ext-nagpra.svg)](https://www.npmjs.com/package/cspace-ui-plugin-ext-nagpra)
[![continuous integration](https://github.com/collectionspace/cspace-ui-plugin-ext-nagpra.js/actions/workflows/ci-js.yml/badge.svg?branch=main&event=push)](https://github.com/collectionspace/cspace-ui-plugin-ext-nagpra.js/actions/workflows/ci-js.yml)

Nagpra extension plugin for the CollectionSpace UI.

## Installation

### For developers

Follow these instructions to download and install the source code of the plugin.

Using git:

```
$ git clone https://github.com/collectionspace/cspace-ui-plugin-ext-nagpra.js.git
$ cd cspace-ui-plugin-ext-nagpra.js
$ npm install
```

To run the cspace-ui application configured with this plugin:

```
$ npm run devserver
```

Then open a browser to http://localhost:8080.

By default, the application served from the dev server will use the CollectionSpace services API
located at http://localhost:8180.

To run the application against CollectionSpace services located on a different host, edit
index.html, and change the `serverUrl` configuration property. For example, to use a server running
on core.dev.collectionspace.org, use the settings:

```
cspaceUI({
  serverUrl: 'https://core.dev.collectionspace.org',
  // ...
});
```
