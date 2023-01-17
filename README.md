# Deskree's JavaScript SDK

## Initial Setup

Create an .npmrc file under your root project folder, and add the following line to it:

```
@deskree-inc:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=[ADD_YOUR_TOKEN]
```
notes: You must replace the [ADD_YOUR_TOKEN] with your own token.

Now, install the Deskree SDK using npm:

```
npm install @deskree-inc/deskree-js@1.0.4 axios --save
```

### Deskree Client
Import the createClient method for NodeJS backend projects and create an instance of the client passing the configurations required:

```
import createClient from '@deskree-inc/deskree-js'
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
const allEntries = myTable.get()
```

#### Get filtered entries

```
const filteredEntries = myTable.get({
  page: 1,
  where: '',
  limit: 10,
  "sorted[how]": 'asc',
  "sorted[param]": 'name'
})
```

#### Update an entry

```
const updatedEntry = myTable.update(OBJECT_ID, params)
```

#### Delete an entry

```
myTable.delete(OBJECT_ID)
```

#### Insert an entry

```
const newEntry = myTable.insert(params)
```

## Authentication Module

To start authenticating your users to your platform, here are some methods you can use. This module is still under development, so for now you can sign up and sign in users using the following methods.

#### Sign up with email and password
```
const signUp = client.auth().signUpWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSOWRD')
```

#### Sign in with email and password
```
const signIn = client.auth().signInWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSOWRD')
```

#### Refresh Token
```
const refreshToken = client.auth.exchangeRefreshTokenForIdToken('YOUR_REFRESH_TOKEN')
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