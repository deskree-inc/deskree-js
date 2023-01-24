# signInOAuth()

## Description

Sign in with a selected OAUTH provider

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>providerId</td><td>true</td><td>string</td><td><code>google.com</code>, <code>facebook.com</code>, or <code>github.com</code></td></tr><tr><td>sessionId</td><td>true</td><td>string</td><td>The ID of the OAUTH session returned from <a href="broken-reference">createUrlForOAuthSignIn()</a></td></tr><tr><td>callBackUri</td><td>true</td><td>string</td><td>URL to redirect users after a successful OAUTH sign-in.</td></tr><tr><td>token</td><td>false</td><td>string</td><td><p><strong>Used only for Google and Facebook sign-in.</strong> </p><p><strong></strong></p><p>If the token is provided, <code>code</code> parameter is ignored.</p><p><strong></strong></p><p>The parameter will be returned in the <code>callBackUri</code> of <a href="broken-reference">createUrlForOAuthSignIn()</a> after a successful OAUTH sign-in.</p></td></tr><tr><td>code</td><td>false</td><td>string</td><td>The parameter will be returned in the <code>callBackUri</code> of <a href="broken-reference">createUrlForOAuthSignIn()</a> after a successful OAUTH sign-in.</td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
const signInWithOAuth = await client.auth().signInOAuth('google.com', 'kasdoa0123-012sdasd', 'http://localhost/sign-in-oauth', 'asdkmaskdsadmapoin0i', '0aksd09d0jd091ij0')
```
{% endcode %}

## Response

### Parameters

| Field            | Data Type | Description                                                                                                                                                        |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| providerId       | string    | `google.com`, `facebook.com`, or `github.com`                                                                                                                      |
| localId          | string    | User email                                                                                                                                                         |
| email            | string    | User password                                                                                                                                                      |
| emailVerified    | boolean   | Whether the user has verified their email by following the link sent to their email.                                                                               |
| rawUserInfo      | string    | The stringified JSON response containing all the IdP data corresponding to the provided OAuth credential.                                                          |
| idToken          | string    | User authorization token that should be used for requests that require authorization. View [Permissions](broken-reference) for more information.                   |
| firstName        | string    | User first name if present in OAUTH provider                                                                                                                       |
| lastName         | string    | User last name if present in OAUTH provider                                                                                                                        |
| fullName         | string    | User full name if present in OAUTH provider                                                                                                                        |
| displayName      | string    | User display name if present in OAUTH provider                                                                                                                     |
| photoUrl         | string    | User photo if present in OAUTH provider                                                                                                                            |
| refreshToken     | string    | Token that can be used to refresh idToken via [exchangeRefreshTokenForIdToken() ](broken-reference)method                                                          |
| expiresIn        | string    | How long the token is valid for (in seconds).                                                                                                                      |
| needConfirmation | boolean   | Whether another account with the same credential already exists. The user will need to sign in to the original account and then link the current credential to it. |

### Example

{% code overflow="wrap" %}
```json
{
    "data": {
        "providerId": "google.com",
        "localId": "a9nsiasjdi1d9wd1dwm9w1wd",
        "emailVerified": true,
        "email": "example@example.org",
        "rawUserInfo": "",
        "firstName": "Johnathan",
        "lastName": "Doe",
        "fullName": "Johnathan Doe",
        "displayName": "John Doe",
        "photoUrl": ""
        "idToken": "eyJahbGciOiJSUzI1NiIsImtpZCI6IjUwYTdhYTlkNzg5MmI1MmE4YzgxMzkwMzIzYzVjMjJlMTkwMzI1ZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVza3JlZS1mYzY3ODUyYy1jYTRlLTQ4MTQtYSIsImF1ZCI6ImRlc2tyZWUtZmM2Nzg1MmMtY2E0ZS00ODE0LWEiLCJhdXRoX3RpbWUiOjE2NTc1NTc2MzEsInVzZXJfaWQiOiJpOVhVWEo1QXJEUFlHeTkwc0VYdU5LVWliaEczIiwic3ViIjoiaTlYVVhKNUFyRFBZR3k5MHNFWHVOS1VpYmhHMyIsImlhdCI6MTY1NzU2NzA3MiwiZXhwIjoxNjU3NTcwNjcyLCJlbWFpbCI6ImJpbWV4aXM0NjNAbGV1cHVzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJiaW1leGlzNDYzQGxldXB1cy5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.noxnUOenJmxaGbm9gKq_tZQoWAPwvRDEKpxHJ3gLfd-mzWWs3AqHXlqYvtV7jtlJDIuHisTk5MQeugRiUjVaN0RHuraFMO9gSpuv4-7roIjVRpp7GoFPHRjdzge8WMBM-obtsDC-D1QhjvCXqXcvmbcFS2ej1zbHDvANncOQckXxGdT0dFHIiZGWmUqMnUxKpWuiYhsci7Odf7TWiKUPFuGrzCBV2QbA8veAklNdIAHmbAvwFFnJtl8A4FsOYbwpmr-TB3RFBWBo1SzZUzyzLb4ffbV4k5Monkp3i1mqRphByLiynrkKohPa0sLun2jjbXRHK6iPQOKPYaFNHaxbDQ"
        "refreshToken": "AIwUaOn0QXtzI0f_DbKca7QfoHnKhSlswIHoOuL5Hsrg-UGePN5aQID6giYWkvyMlLCk-67pVxNXC5yvoMuvhsTLab6FkSaCM2zK4vwxWplCAjMuTI_Ux7CVl3tTSexEjGd6NZQuNeKHYlI8zWPBLW4bvGtJ1Tc6NwpvIKRAi_ZNDl9Zcir0UDQQp_LPTuQu58F2ZIetfeG_oZB5rDbmo3F7uKOtsDihtywnZYHZm1C7E-Qp7GEWBc8",
        "expiresIn": "3600",
        "needConfirmation": true
    }
}
```
{% endcode %}

##
