# verifyPasswordReset()

## Description

Endpoint to verify password reset request based on `oobCode` provided in the email sent to the user. The `oobCode` can be found in the password reset URL. Password reset URL has the following structure: `{email_conf_url}?oobCode={oobCode}`

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>oobCode</td><td>true</td><td>string</td><td>Can be found in the URL sent to the user by the <a href="resetpassword.md">resetPassword()</a> method.</td></tr><tr><td>newPassword</td><td>true</td><td>string</td><td>New password for the user</td></tr></tbody></table>

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
