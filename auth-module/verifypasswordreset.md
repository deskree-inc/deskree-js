# verifyPasswordReset()

## Description

Endpoint to verify password reset request based on `oobCode` provided in the email sent to the user. The `oobCode` can be found in the password reset URL. Password reset URL has the following structure: `{email_conf_url}?oobCode={oobCode}`

## Request

### Parameters

| Field       | Data Type | Description                                                                              |
| ----------- | --------- | ---------------------------------------------------------------------------------------- |
| oobCode     | string    | Can be found in the URL sent to the user by the [inviteUser()](broken-reference) method. |
| newPassword | string    | New password for the user                                                                |

### Example

{% code overflow="wrap" %}
```javascript
const verifyInvite = await client.auth().verifyPasswordReset('na9uubnkloaf9n18n9u112u41', 'qwerty12345')
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
