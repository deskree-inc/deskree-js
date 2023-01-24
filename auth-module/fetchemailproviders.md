# fetchEmailProviders()

## Description

Get a list of authentication providers for the given email.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>email</td><td>true</td><td>string</td><td>User email</td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
const fetchEmailProviders = await client.auth().fetchEmailProviders('example@example.com')
```
{% endcode %}

## Response

| Field        | Data Type        | Description                                                         |
| ------------ | ---------------- | ------------------------------------------------------------------- |
| allProviders | Array of strings | List of all identity providers for a given user within your project |
| registered   | boolean          | Whether the person is registered                                    |

### Example

{% code overflow="wrap" %}
```json
{
    "data": {
        "allProviders": [
            "password"
        ],
        "registered": true,
    }
}
```
{% endcode %}
