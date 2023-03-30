# updatePassword()

## Description

Update user password without password reset email flow.

## Request

{% hint style="warning" %}
Make sure you send `userToken` is passed to `createClient`()  method as this request always requires authorization. \
[Read more about authorization.](../authorization.md)
{% endhint %}

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>oldPassword</td><td>true</td><td>string</td><td>Old user password</td></tr><tr><td>newPassword</td><td>true</td><td>string</td><td>New password for the user</td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
await client.auth().updatePassword('qwerty12345', 'not-qwerty12345')
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
