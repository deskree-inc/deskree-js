# verifyInvite()

## Description

Endpoint to verify invitation based on `oobCode` and `uid` provided in the email sent to the user. The `oobCode` and `uid` are found in the password reset URL. Password reset URL has the following structure: `{email_conf_url}?oobCode={oobCode}&uid={uid}`.

## Request

### Parameters

| Field       | Data Type | Description                                                                              |
| ----------- | --------- | ---------------------------------------------------------------------------------------- |
| oobCode     | string    | Can be found in the URL sent to the user by the [inviteUser()](broken-reference) method. |
| uid         | string    | User UID                                                                                 |
| newPassword | string    | Password set by the invited user                                                         |

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
