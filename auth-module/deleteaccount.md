# deleteAccount()

## Description

Delete the account based on the Bearer token. The system will also delete the corresponding user object inside the Users table.

## Request

{% hint style="warning" %}
Make sure you send `userToken` is passed to `createClient`()  method as this request always requires authorization. \
[Read more about authorization.](broken-reference)
{% endhint %}

### Parameters

`No parameters needed`

### Example

{% code overflow="wrap" %}
```javascript
const fetchEmailProviders = await client.auth().deleteAccount()
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
