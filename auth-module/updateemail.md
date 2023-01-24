# updateEmail()

## Description

Update the user email.

## Request

{% hint style="warning" %}
Make sure you send `userToken` is passed to `createClient`()  method as this request always requires authorization. \
[Read more about authorization.](broken-reference)
{% endhint %}

### Parameters

| Field | Data Type | Description |
| ----- | --------- | ----------- |
| email | string    | User email  |

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
