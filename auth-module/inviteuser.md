# inviteUser()

## Description

Send an invite to a user via email. The system will first create a user in a disabled state until the invite is accepted via a link to be sent to the provided email.

## Request

### Parameters

| Field | Data Type | Description |
| ----- | --------- | ----------- |
| email | string    | User email  |

### Example

{% code overflow="wrap" %}
```javascript
const inviteUser = await client.auth().inviteUser('example@example.com')
```
{% endcode %}

## Response

`No content`

### Example

{% code overflow="wrap" %}
```json
{}
```
{% endcode %}

##
