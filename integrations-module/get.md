# get()

## Description

Get data from an integration endpoint

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>path</td><td>true</td><td>string</td><td>The path of the integration endpoint. You can find it by downloading the postman collection for the integration from the <a href="https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/api-docs">API Docs</a> page.<br><br>Example: Stripe Customers Endpoint is "/customers".</td></tr><tr><td>options</td><td>false</td><td>Object</td><td>A JavaScript object with body or params to be sent </td></tr></tbody></table>

### Examples

#### Get without parameters

```javascript
const results = await client.integration("stripe").get("/customers");
```

#### Get with parameters

```javascript
const results = await client.integration("stripe").get("/customers", { params: { email: "customer@email.com" } });
```

## Response

Response schema is defined by the integration you are activating. Deskree passes the entire object received by the integration.
