# createUrlForOAuthSignIn()

## Description

Generate a sign-in link with a selected OAUTH provider.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>providerId</td><td>true</td><td>string</td><td><code>google.com</code>, <code>facebook.com</code>, or <code>github.com</code></td></tr><tr><td>callBackUri</td><td>true</td><td>string</td><td>URL where the request will be redirected to after successful OAUTH sign-in. <br><strong>Note</strong>: for most OAUTH providers the redirect URL must be specified in the app settings.<br>Examples: <a href="https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred">Google</a>, <a href="https://developers.facebook.com/blog/post/2017/12/18/strict-uri-matching/">Facebook</a>, <a href="https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app">GitHub</a></td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
const OAuthSignInURL = await client.auth().createUrlForOAuthSignIn('google.com', 'https://localhost:8080/oauth-signup')
```
{% endcode %}

## Response

### Parameters

| Field      | Data Type | Description                                                                                                                                                 |
| ---------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authUri    | string    | The authorization URI for the requested provider. This is where the user needs to be redirected to complete the OAUTH sign-in with the provider.            |
| providerId | string    | The provider ID from the request.                                                                                                                           |
| sessionId  | string    | The session ID from the request. It is used to prevent session fixation attacks. This property will be used for the [signInOAuth()](signinoauth.md) method. |

### Example

{% code overflow="wrap" %}
```json
{
    "data": {
        "authUri": "https://accounts.google.com/o/oauth2/auth?response_type=id_token&client_id=623213283749-0o0tto76nqu3ikn3as8eocdk41aag5tb.apps.googleusercontent.com&redirect_uri=http://localhost&state=AMbdmDlwnf12GgLWzl8ITv-AFHeyVLAiqXzE_9goszlPjO0QhOR8iTn5I6ZtdGNYCBCwhyJhI1diEoZgyDk7peY16selAeq4vmcDf2qClOt7ns_WqU1Gc07Cuymkyfqz60zFRhSHU1S_YumikZahR1nmv6WxQoxJyRlSyjYHY39G-fSCZN7itE9tA3WNO1j24TP9_t6hKFRfcc-8NYIbqRhitPOFjmUemtWUueWqUDDN5kv3b4fgnq5-elwRrDtQ74TX9v05Q8_AK4bDODVMOget-A&scope=openid+https://www.googleapis.com/auth/userinfo.email&nonce=b0fd25ce8f554880e9000d1bce463efeeeaa1f65332bf036bd3db3cef3c07400&include_profile=true",
        "providerId": "google.com",
        "sessionId": "Y31RHgVt30cTUZfbh3KYVTJbUT0"
    }
}
```
{% endcode %}

##
