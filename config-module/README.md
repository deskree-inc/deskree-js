# Config Module

## **Overview**

Config Module handles all requests associated with project configurations. Currently, it includes database model requests. In the future, it will be responsible for permissions, webhooks, and other configuration data access&#x20;

## Authorization

All Config Module methods require a [Deskree Admin Token](https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/admin-token) to be executed. Hence, make sure you provide a valid [Deskree Admin Token](https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/admin-token) when instantiating the client:

```javascript
import createClient from '@deskree/deskree-js'
import axios from 'axios'

const options = {
  projectId: "YOUR_PROJECT_ID",
  axios: axios,
  adminToken: "YOUR_DESKREE_ADMIN_TOKEN"
}

const client = createClient(options)
```

{% hint style="danger" %}
DANGER: Always keep your Deskree Admin token secure as it is a very powerful token that may allow unwanted access to your data if compromised. If you believe that is the case, you can always [refresh your token](https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/admin-token#refresh-token).&#x20;
{% endhint %}

## config**() Methods**

* [getschema.md](getschema.md "mention")
* [generatedatatypes.md](generatedatatypes.md "mention")
