# verifyEmail()

## Description

Endpoint to verify the email based on `oobCode` and `uid` provided in the email sent to the user. The `oobCode` and `uid` are found in the email verification URL. Email verification URL has the following structure: `{email_conf_url}?oobCode={oobCode}&uid={uid}.`

## Request

### Parameters

| Field | Data Type | Description |
| ----- | --------- | ----------- |
| email | string    | User email  |

### Example

{% code overflow="wrap" %}
```javascript
const verifyEmail = await client.auth().verifyEmail('example@example.com')
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
