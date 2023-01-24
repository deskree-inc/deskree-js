# patch()

## Description

PATCH data to an integration endpoint.

{% hint style="info" %}
By default the `Content-Type` is set to `application/json`, but you can override this value by passing your own headers in the `integration()` method.
{% endhint %}

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>true</td><td>string</td><td>The path of the integration endpoint. You can find it by downloading the postman collection for the integration from the <a href="https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/api-docs">API Docs</a> page.<br><br>Example: Stripe Customers Endpoint is "/customers".</td></tr><tr><td>body</td><td>false</td><td>Object</td><td>Data to be sent to the integration</td></tr></tbody></table>

### Examples

#### PATCH without custom headers

```javascript
const results = await client.integration("stripe").patch("/customers", JSON.stringify({ email: "customer@email.com" }));
```

#### PATCH with custom headers

```javascript
const results = await client.integration("stripe", { "Content-Type": "application/x-www-form-urlencoded" }).patch("/customers", JSON.stringify({ email: "customer@email.com" }));
```

## Response

Response schema is defined by the integration you are activating. Deskree passes the entire object received by the integration.
