# getRoles()

## Description

Delete the account based on the Bearer token. The system will also delete the corresponding user object inside the Users table.

## Request

{% hint style="warning" %}
Make sure you send `adminToken` is passed to `createClient`()  method as this request requires Deskree Admin Token. \
[Read more about authorization.](../authorization.md)\
[Read more about Deskreee Admin Token.](https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/admin-token)
{% endhint %}

### Parameters

`No parameters needed`

### Example

{% code overflow="wrap" %}
```javascript
const fetchEmailProviders = await client.auth().getRoles()
```
{% endcode %}

## Response

`No content`

### Example

{% code overflow="wrap" %}
```json
{
    "data": [
        {
            "uid": "njiasd91n2mkoaskmoadsko",
            "name": "admin"
        }
    ]
}
```
{% endcode %}
