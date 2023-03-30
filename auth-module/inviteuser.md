# inviteUser()

## Description

Send an invite to a user via email. The system will first create a user in a disabled state until the invite is accepted via a link to be sent to the provided email.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>email</td><td>true</td><td>string</td><td>User email</td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
await client.auth().inviteUser('example@example.com')
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
