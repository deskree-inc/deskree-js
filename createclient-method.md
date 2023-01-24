# createClient() Method

## Description

Instantiates `deskree-js` SDK.

## Initialization

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>options</td><td>true</td><td>Object</td><td>Name of Deskree table to instantiate connection with</td></tr></tbody></table>

#### Options Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>projectId</td><td>true</td><td>Object</td><td>Name of Deskree table to instantiate connection with</td></tr><tr><td>axios</td><td>true</td><td><a href="https://www.npmjs.com/package/axios">axios</a> instance</td><td>Instance of <code>axios</code> package</td></tr><tr><td>adminToken</td><td>false</td><td>string</td><td>Deskree Admin Token from project Settings -> Access Token<br><br>Read more</td></tr><tr><td>userToken</td><td>false</td><td>string</td><td></td></tr></tbody></table>

### Example

```javascript
import createClient from '@deskree/deskree-js'
import axios from 'axios'

const options = {
  projectId: "YOUR_PROJECT_ID",
  axios: axios,
  adminToken: "YOUR_DESKREE_ADMIN_TOKEN",
  userToken: "USER_IDTOKEN"
}

/* Optional options
* adminToken: this is the access token that you can get from Settings/Access Token
* userToken: this is the token created with the user sign in workflow
*/

const client = createClient(options)
```

## Requests

* [get.md](database-module/from/get.md "mention")
* [getbyuid.md](database-module/from/getbyuid.md "mention")
* [create.md](database-module/from/create.md "mention")
* [update.md](database-module/from/update.md "mention")
* [delete.md](database-module/from/delete.md "mention")
