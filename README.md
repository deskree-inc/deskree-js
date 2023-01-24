# Overview

This is the official documentation of [deskree-js](https://www.npmjs.com/package/@deskree/deskree-js) -  Javascript SDK of the [Deskree](https://www.deskree.com/) platform.

## Installation

Install the Deskree SDK using npm:

```
npm install @deskree/deskree-js@latest axios --save
```

{% hint style="warning" %}
`deskree-js` is using [axios](https://www.npmjs.com/package/axios) as a dependency. Hence, it must be installed in your `package.json` for the SDK to work.
{% endhint %}

## Initial Setup

Import the `createClient` method for NodeJS backend projects and create an instance of the client passing the configurations required:

```javascript
import createClient from '@deskree/deskree-js'
import axios from 'axios'

const options = {
  projectId: "YOUR_PROJECT_ID",
  axios: axios
}

/* Optional options
* adminToken: this is the access token that you can get from Settings/Access Token
* userToken: this is the token created with the user sign in workflow
*/

const client = createClient(options)
```

## List of Modules

* [database-module](database-module/ "mention")
* [auth-module](auth-module/ "mention")
* [integrations-module](integrations-module/ "mention")
