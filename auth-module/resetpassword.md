# resetPassword()

## Description

Endpoint to reset the user password. The user will receive an email prompting him to change the existing password by following a URL. Note that you need to have a reset password URL specified in authentication settings in order for this endpoint to work.

## Request

### Parameters

| Field | Data Type | Description |
| ----- | --------- | ----------- |
| email | string    | User email  |

### Example

{% code overflow="wrap" %}
```javascript
const resetPassword = await client.auth().resetPassword('example@example.com')
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
