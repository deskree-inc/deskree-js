# Authorization

Deskree has a [Permissions](https://docs.deskree.com/documentation/fundamentals/middleware/permissions) feature that allows to define endpoint-level permissions for databases and integrations. Hence, based on the configuration, some of the requests require `Authorization` header with a valid user `idToken` or even `deskree-admin` header with Deskree Admin Token to proceed.&#x20;

## User Token

For the requests that require a user token, make sure you are passing a valid `idToken` from your sign-in or sign-up requests when creating a client.

{% hint style="warning" %}
Make sure that you save the token expiration and always refresh the token before the expiry to avoid `403` errors
{% endhint %}

### Example

```javascript
import createClient from '@deskree/deskree-js'
import axios from 'axios'

const options = {
  projectId: "YOUR_PROJECT_ID",
  axios: axios,
  userToken: "USER_IDTOKEN"
}

const client = createClient(options)
```

### Requests Returning idToken

* [signupemail.md](auth-module/signupemail.md "mention")
* [signinemail.md](auth-module/signinemail.md "mention")
* [signinoauth.md](auth-module/signinoauth.md "mention")
* [refreshtoken.md](auth-module/refreshtoken.md "mention")

## Admin Token

For the requests that require an Admin Token, make sure you are passing a valid token when creating a client.

{% hint style="danger" %}
DANGER: Always keep your Deskree Admin token secure as it is a very powerful token that may allow unwanted access to your data if compromised. If you believe that is the case, you can always [refresh your token](broken-reference).&#x20;
{% endhint %}

### Example

```javascript
import createClient from '@deskree/deskree-js'
import axios from 'axios'

const options = {
  projectId: "YOUR_PROJECT_ID",
  axios: axios,
  adminToken: "YOUR_DESKREE_ADMIN_TOKEN",
}

const client = createClient(options)
```

### Requests Returning idToken

* [signupemail.md](auth-module/signupemail.md "mention")
* [signinemail.md](auth-module/signinemail.md "mention")
* [signinoauth.md](auth-module/signinoauth.md "mention")
* [refreshtoken.md](auth-module/refreshtoken.md "mention")

## Useful Resources

* Authentication
* How to use permissions?
* Admin Token
