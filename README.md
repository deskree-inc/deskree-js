# Deskree's JavaScript SDK

## Initial Setup

Install the Deskree SDK using npm:

```
npm install @deskree/deskree-js@latest axios --save
```

### Deskree Client
Import the createClient method for NodeJS backend projects and create an instance of the client passing the configurations required:

```
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

## Database Module

To start making requests to a database table, you can structure your code like the following: 

```
const myTable = client.database().from('YOUR_TABLE_NAME')
```

And then you can get, insert, update and delete entries of this particular table.

#### Get all entries

```
const allEntries = await myTable.get()
```

#### Get filtered entries

```
const filteredEntries = await myTable.get({
  page: 1,
  where: '',
  limit: 10,
  "sorted[how]": 'asc',
  "sorted[param]": 'name'
})
```

#### Update an entry

```
const updatedEntry = await myTable.update(OBJECT_ID, params)
```

#### Delete an entry

```
await myTable.delete(OBJECT_ID)
```

#### Insert an entry

```
const newEntry = await myTable.insert(params)
```

## Authentication Module

To start authenticating your users to your platform, here are some methods you can use. This module is still under development, so for now you can sign up and sign in users using the following methods.

#### Sign up with email and password
```
const signUp = await client.auth().signUpWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSOWRD')
```

#### Sign in with email and password
```
const signIn = await client.auth().signInWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSOWRD')
```

#### Refresh Token
```
const refreshToken = await client.auth().exchangeRefreshTokenForIdToken('YOUR_REFRESH_TOKEN')
```

#### Sign in / Sign up response example

```
data: {
    "uid": string,
    "email": string,
    "emailVerified": boolean,
    "disabled": boolean,
    "idToken": string,
    "refreshToken": string,
    "expiresIn": string
}
```

## Integration Module

To start using the integrations configured in your projects, just follow this simple example:

```
let customers = [];
let results = await client.integration("stripe").get("/customers");

if (results.status === 200) {
  customers = results.data.data;
}

```

The integration() function receive as parameter the name of the integration in lower case format, also the second parameters is the headers required for custom requests. 

You will use the following REST functions:

- get()
- post()
- put()
- patch()
- delete()

Each function receive 2 parameters:

- path: this is the path of the integration endpoint. Example Stripe Customers Endpoint is "customers".
- options: this is a JavaScript object with body or params to be send in the Request method.

#### GET + Params Example

```

let customers = [];
let results = await client.integration("stripe").get("/customers". { params: { email: "customer@email.com" } });

if (results.status === 200) {
  customers = results.data.data;
}

```

#### POST + Body + Custom Headers Example

By default the Content-Type is "application/json", but you can override this value passing your own headers. To create a new customer in Stripe, we must add a custom header. 

```

const qs = require('qs');

let customer = {};
let results = await client.integration("stripe", { "Content-Type": "application/x-www-form-urlencoded" }).post("/customers". qs.stringify({ email: "customer@email.com" }));

if (results.status === 200) {
  customer = results.data.data;
}

```