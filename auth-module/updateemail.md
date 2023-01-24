# updateEmail()

## Description

Update the user email.

## Request

{% hint style="warning" %}
Make sure you send `userToken` is passed to `createClient`()  method as this request always requires authorization. \
[Read more about authorization.](broken-reference)
{% endhint %}

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>email</td><td>true</td><td>string</td><td>User email</td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
const verifyInvite = await client.auth().updateEmail('example@example.com')
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
