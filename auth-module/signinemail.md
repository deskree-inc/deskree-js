# signInEmail()

## Description

Sign in with email and password.

## Request

### Parameters

| Field    | Data Type | Description   |
| -------- | --------- | ------------- |
| email    | string    | User email    |
| password | string    | User password |

### Example

{% code overflow="wrap" %}
```javascript
const signIn = await client.auth().signInEmail('user@example.com', 'qwerty12345')
```
{% endcode %}

## Response

### Parameters

| Field         | Data Type | Description                                                                                                                                                             |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| uid           | string    | User email                                                                                                                                                              |
| email         | string    | User password                                                                                                                                                           |
| emailVerified | boolean   | Whether the user has verified their email by following the link sent to their email.                                                                                    |
| disabled      | boolean   | <p>Whether the user account is disabled.<br><br>It will be set to <code>false</code> if email verification is enforced and the user hasn't verified the email yet. </p> |
| idToken       | string    | User authorization token that should be used for requests that require authorization. View [Permissions](broken-reference) for more information.                        |
| refreshToken  | string    | Token that can be used to refresh idToken via [exchangeRefreshTokenForIdToken() ](broken-reference)method                                                               |
| expiresIn     | string    | How long the token is valid for (in seconds).                                                                                                                           |

### Example

{% code overflow="wrap" %}
```json
{
    "data": {
        "uid": "g16bsf2DN9X3CbGN1osmAjpHlF83",
        "email": "user@example.com",
        "emailVerified": false,
        "disabled": false,
        "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwYTdhYTlkNzg5MmI1MmE4YzgxMzkwMzIzYzVjMjJlMTkwMzI1ZDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVza3JlZS05ODg4ZDQwYy1jNWUzLTQzMDctOCIsImF1ZCI6ImRlc2tyZWUtOTg4OGQ0MGMtYzVlMy00MzA3LTgiLCJhdXRoX3RpbWUiOjE2NTcyMTI0MjEsInVzZXJfaWQiOiJnMTZic2YyRE45WDNDYkdOMW9zbUFqcEhsRjgzIiwic3ViIjoiZzE2YnNmMkROOVgzQ2JHTjFvc21BanBIbEY4MyIsImlhdCI6MTY1NzIxMjQyMSwiZXhwIjoxNjU3MjE2MDIxLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsidXNlckBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ch20lWIO6c26ZHi3Di1zPdGjfAQkndCKO-L17_lORswI6RY8sLrA8LHdkI1Tk73-fMpQJsEO5I9V_QYRToJ7GTRfc0lvgqCSxsWv8K9SQKg-rMfVKUcI9xASY3ol4ih-ezRXCcC0VtSb501iv161Vppa8fgmVd7qfHfO6efV50-ihPA_H6iGtpw-nejNdbuTAiBRd8VOjQApAeKp0Jr3sTS421u9eIlVPySllj4dyX-d5YReTLTGImN5noTs7yBQpj8rc63-TA3hS7BksSoXyHxcJVuKXS8DxeBJi_hmWTXXRFIfj938wnwMqBevmFzVbVTdpyjyP4RL0cISRXikBQ",
        "refreshToken": "AIwUaOn0QXtzI0f_DbKca7QfoHnKhSlswIHoOuL5Hsrg-UGePN5aQID6giYWkvyMlLCk-67pVxNXC5yvoMuvhsTLab6FkSaCM2zK4vwxWplCAjMuTI_Ux7CVl3tTSexEjGd6NZQuNeKHYlI8zWPBLW4bvGtJ1Tc6NwpvIKRAi_ZNDl9Zcir0UDQQp_LPTuQu58F2ZIetfeG_oZB5rDbmo3F7uKOtsDihtywnZYHZm1C7E-Qp7GEWBc8",
        "expiresIn": "3600"
    }
}
```
{% endcode %}
