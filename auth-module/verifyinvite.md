# verifyInvite()

## Description

Endpoint to verify invitation based on `oobCode` and `uid` provided in the email sent to the user. The `oobCode` and `uid` are found in the password reset URL. Password reset URL has the following structure: `{email_conf_url}?oobCode={oobCode}&uid={uid}`.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>oobCode</td><td>true</td><td>string</td><td>Can be found in the URL sent to the user by the <a href="inviteuser.md">inviteUser()</a> method.</td></tr><tr><td>uid</td><td>true</td><td>string</td><td>User UID</td></tr><tr><td>newPassword</td><td>true</td><td>string</td><td>Password set by the invited user</td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
const verifyInvite = await client.auth().verifyInvite('na9uubnkloaf9n18n9u112u41', '0193j401nd18en18dj1nm29dn8nuk', 'qwerty12345')
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
