# resetPassword()

## Description

Endpoint to reset the user password. The user will receive an email prompting him to change the existing password by following a URL. Note that you need to have a reset password URL specified in authentication settings in order for this endpoint to work.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>email</td><td>true</td><td>string</td><td>User email</td></tr></tbody></table>

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
