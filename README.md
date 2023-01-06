# Deskree's JavaScript SDK

### Initial Setup

First, install the package using npm:

```
npm install @deskree-inc/deskree-js@1.0.1
```

Then, import the createClient method:

```
import createClient from 'deskree-js'
```

Now, create an instance of the client to access the modules: 

```
const client = createClient(YOUR_PROJECT_ID)
```

### Rest Module

To start making requests to a database table, you can structure your code like the following: 

```
const myTable = client.rest.from('YOUR_TABLE_NAME')
```

And then you can get, insert, update and delete entries of this particular table.

##### Get all entries

```
myTable.get()
```

##### Get filtered entries

```
myTable.get({
  page: 1,
  where: '',
  limit: 10,
  "sorted[how]": 'asc',
  "sorted[param]": 'name'
})
```

##### Update an entry

```
myTable.update(OBJECT_ID, params)
```

##### Delete an entry

```
myTable.delete(OBJECT_ID)
```

##### Insert an entry

```
myTable.insert(params)
```

### Authentication Module

To start authenticating your users to you platform, here are some methods you can use. This module is still under development, so for now you can sign up and sign in users using the following methods.

##### Sign up with email and password
```
client.auth.signUpWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSOWRD')
```

##### Sign in with email and password
```
client.auth.signInWithEmailAndPassword('YOUR_EMAIL', 'YOUR_PASSOWRD')
```