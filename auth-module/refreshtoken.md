# refreshToken()

## Description

Exchange `refreshToken` for `idToken`

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>refresh_token</td><td>true</td><td>string</td><td>Refresh token obtained from sign-up or sign-in methods<br><code></code><br><code></code>Examples: <br><a href="signinemail.md">signInEmail()</a><br><a href="signupemail.md">signUpEmail()</a><br><a href="signinoauth.md">signInOAuth()</a></td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
const idToken = await client.auth().refreshToken('AOEOulbFrpu25a7BwDxFzjPp67kenvwi3N7kJnXx6pCBaFMDWcBeHTTu1N_t6IGwxFm8lB44h2t2RD96Xcw2iMgvfMZCzkp8o6UJrCjjDQGjXOcO7u-wU5C3rZxUk5QvhWEvnxOpdIVJ5V7FRefWKfUzYVraIvgvTo3WnpbJ9Czx5IbadvknQxzfMt7OjCH7RfGrwEmA47huc-aoE2XZfLTOqRsfApKiHfaKAQtxNAie904p1lZEuMT2Ntss8fxTg61BrYvYO_XQr')
```
{% endcode %}

## Response

### Parameters

| Field        | Data Type | Description                                                                                                                                      |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| user\_id     | string    | UID of the user                                                                                                                                  |
| idToken      | string    | User authorization token that should be used for requests that require authorization. View [Permissions](broken-reference) for more information. |
| refreshToken | string    | Token that can be used to refresh idToken via [refreshToken()](refreshtoken.md) method                                                           |
| expiresIn    | string    | How long the token is valid for (in seconds).                                                                                                    |

### Example

```json
{
    "data": {
        "expires_in": "3600",
        "refresh_token": "AOEOulbFrpu25a7BwDxFzjPp67kenvwi3N7kJnXx6pCBaFMDWcBeHTTu1N_t6IGwxFm8lB44h2t2RD96Xcw2iMgvfMZCzkp8o6UJrCjjDQGjXOcO7u-wU5C3rZxUk5QvhWEvnxOpdIVJ5V7FRefWKfUzYVraIvgvTo3WnpbJ9Czx5IbadvknQxzfMt7OjCH7RfGrwEmA47huc-aoE2XZfLTOqRsfApKiHfaKAQtxNAie904p1lZEuMT2Ntss8fxTg61BrYvYO_XQr",
        "id_token": "eyJahbGciOiJSUzI1NiIsImtpZCI6IjUwYTdhYTlkNzg5MmI1MmE4YzgxMzkwMzIzYzVjMjJlMTkwMzI1ZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVza3JlZS1mYzY3ODUyYy1jYTRlLTQ4MTQtYSIsImF1ZCI6ImRlc2tyZWUtZmM2Nzg1MmMtY2E0ZS00ODE0LWEiLCJhdXRoX3RpbWUiOjE2NTc1NTc2MzEsInVzZXJfaWQiOiJpOVhVWEo1QXJEUFlHeTkwc0VYdU5LVWliaEczIiwic3ViIjoiaTlYVVhKNUFyRFBZR3k5MHNFWHVOS1VpYmhHMyIsImlhdCI6MTY1NzU2NzA3MiwiZXhwIjoxNjU3NTcwNjcyLCJlbWFpbCI6ImJpbWV4aXM0NjNAbGV1cHVzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiaW1leGlzNDYzQGxldXB1cy5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.noxnUOenJmxaGbm9gKq_tZQoWAPwvRDEKpxHJ3gLfd-mzWWs3AqHXlqYvtV7jtlJDIuHisTk5MQeugRiUjVaN0RHuraFMO9gSpuv4-7roIjVRpp7GoFPHRjdzge8WMBM-obtsDC-D1QhjvCXqXcvmbcFS2ej1zbHDvANncOQckXxGdT0dFHIiZGWmUqMnUxKpWuiYhsci7Odf7TWiKUPFuGrzCBV2QbA8veAklNdIAHmbAvwFFnJtl8A4FsOYbwpmr-TB3RFBWBo1SzZUzyzLb4ffbV4k5Monkp3i1mqRphByLiynrkKohPa0sLun2jjbXRHK6iPQOKPYaFNHaxbDQ",
        "user_id": "i9XsUXJ5ArDPYGy90sEXuNKUibhG3"
    }
}
```
