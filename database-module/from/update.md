# update()

## Description

Update an object in the database

{% hint style="info" %}
To delete a file, just set the value to an empty string during the update request
{% endhint %}

{% hint style="info" %}
You do not need to pass the entire object to update it. The system will only update the values that have been passed.
{% endhint %}

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>uid</td><td>true</td><td>string</td><td>UID of the object to update</td></tr><tr><td>body</td><td>true</td><td>Object</td><td>Object to update in the database.<br><br>Note: it must follow the database schema. Otherwise, <code>422</code> error will be returned.</td></tr><tr><td>options</td><td>false</td><td>Object</td><td>Object containing additional request parameters</td></tr></tbody></table>

#### Options Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>skipFileExceptions</td><td>false</td><td>boolean</td><td><p>If set to <code>true</code> will skip file upload exceptions in the back-end and will return <code>200</code> even if there is an error during downloading/uploading of files.</p><p></p><p><a href="https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/uploading-files">Read more</a> </p></td></tr></tbody></table>

### Examples

#### Update

```javascript
const product = await client.table('products').update("tTvKpi6E7N68Xv8RJOug", {
    "name": "Hat",
    "price": 12,
    "image": "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
})
```

#### Update and skip file upload errors

```javascript
const product = await client.table('products').update("tTvKpi6E7N68Xv8RJOug", 
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

## Response

### Parameters

| Field | Data Type | Description                                               |
| ----- | --------- | --------------------------------------------------------- |
| data  | Object    | Object containing all database item values                |
| meta  | Object    | Object containing [metadata](update.md#metadata-paramers) |
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

This is an example response to the [Update and skip file upload errors ](update.md#create-and-skip-file-upload-errors)request example above with an imaginary error during file upload. As you can see, the object is still created, but the `image` property is set to an empty string.

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
        "action": "patch",
        "webhooksTriggered": 0
    }
}
```
