# fetchEmailProviders()

## Description

Get a list of authentication providers for the given email.

## Request

### Parameters

| Field | Data Type | Description |
| ----- | --------- | ----------- |
| email | string    | User email  |

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
