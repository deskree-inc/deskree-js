# delete()

## Description

Delete an object in the database

{% hint style="info" %}
If you delete an object the associated file will automatically be deleted in storage as well
{% endhint %}

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>uid</td><td>true</td><td>string</td><td>UID of the object to update</td></tr></tbody></table>

### Examples

#### Delete

```javascript
const product = await client.database().from('products').delete("tTvKpi6E7N68Xv8RJOug")
```

## Response

### Parameters

| Field | Data Type | Description                                                                 |
| ----- | --------- | --------------------------------------------------------------------------- |
| data  | Object    | Object containing [operation information](delete.md#delete-data-parameters) |
| meta  | Object    | Empty object                                                                |
| info  | Object    | Object containing operation information                                     |

#### Delete Data Operation Information Parameters

| Field    | Data Type | Description                         |
| -------- | --------- | ----------------------------------- |
| uid      | string    | UID of the deleted object           |
| resource | string    | Table name where object was deleted |

#### Info Parameters

| Field             | Data Type | Description                                   |
| ----------------- | --------- | --------------------------------------------- |
| action            | string    | Operation name                                |
| webhooksTriggered | number    | Number of webhooks triggered by the operation |

### Example

This is an example response to the [Delete](delete.md#delete) request example above.

```json
{
    "data": {
        "uid": "tTvKpi6E7N68Xv8RJOug",
        "resource": "products"
    },
    "meta": {},
    "info": {
        "action": "delete",
        "webhooksTriggered": 0
    }
}
```
