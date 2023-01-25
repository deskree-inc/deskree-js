# verifyEmail()

## Description

Endpoint to verify the email based on `oobCode` and `uid` provided in the email sent to the user. The `oobCode` and `uid` are found in the email verification URL. Email verification URL has the following structure: `{email_conf_url}?oobCode={oobCode}&uid={uid}.`

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>email</td><td>true</td><td>string</td><td>User email</td></tr></tbody></table>

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
