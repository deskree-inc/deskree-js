# create()

## Description

Create an object in the database

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>true</td><td>Object</td><td>Object to create in the database.<br><br>Note: it must follow the database schema. Otherwise, <code>422</code> error will be returned.</td></tr><tr><td>options</td><td>false</td><td>Object</td><td>Object containing additional request parameters</td></tr></tbody></table>

#### Options Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>skipFileExceptions</td><td>false</td><td>boolean</td><td><p>If set to <code>true</code> will skip file upload exceptions in the back-end and will return <code>200</code> even if there is an error during downloading/uploading of files.</p><p></p><p><a href="broken-reference">Read more</a> </p></td></tr></tbody></table>

### Examples

#### Create

```javascript
const product = await client.table('products').create({
    "name": "Hat",
    "price": 12,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
})
```

#### Create and skip file upload errors

{% code overflow="wrap" %}
```javascript
const product = await client.table('products').create(
    {
        "name": "Hat",
        "price": 12,
        "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
    },
    {
        "skipFileExceptions": true
    }
)
```
{% endcode %}

## Response

### Parameters

| Field | Data Type | Description                                               |
| ----- | --------- | --------------------------------------------------------- |
| data  | Object    | Object containing all database item values                |
| meta  | Object    | Object containing [metadata](create.md#metadata-paramers) |
| info  | Object    | Object containing operation information                   |

#### Metadata Parameters

| Field         | Data Type | Description                                                                                  |
| ------------- | --------- | -------------------------------------------------------------------------------------------- |
| total         | number    | <p>Total number of items in with the given UID<br><br>Always equal to 1</p>                  |
| page          | number    | <p>Current page number<br><br>Always equal to 1</p>                                          |
| limit         | number    | <p>Current limit per page<br><br>Always equal to 1</p>                                       |
| includesCount | number    | <p>Number of additional requests for the includes operations</p><p><br>Always equal to 0</p> |

#### Info Parameters

| Field             | Data Type | Description                                   |
| ----------------- | --------- | --------------------------------------------- |
| action            | string    | Operation name                                |
| webhooksTriggered | number    | Number of webhooks triggered by the operation |

### Example

This is an example response to the [Create and skip file upload errors ](create.md#create-and-skip-file-upload-errors)request example above with an imaginary error during file upload. As you can see, the object is still created, but the `image` property is set to an empty string.

{% code overflow="wrap" %}
```json
{
    "data": {
        "uid": "tTvKpi6E7N68Xv8RJOug"
        "name": "Hat",
        "price": 12,
        "image": "",
        "createdAt": "2022-08-22T16:04:49-04:00",
        "updatedAt": "2022-08-22T16:04:51-04:00"
    },
    "meta": {
        "total": 1,
        "page": 1,
        "limit": 1,
        "includesCount": 0
    },
    "info": {
        "action": "post",
        "webhooksTriggered": 0
    }
}
```
{% endcode %}
