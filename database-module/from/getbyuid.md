# getByUID()

## Description

Get data from the database table by UID

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>uid</td><td>true</td><td>string</td><td>UID of the object to get</td></tr><tr><td>options</td><td>false</td><td>Object</td><td><a href="getbyuid.md#options-object-parameters">Options Object </a>describing filtering, sorting, and other options</td></tr></tbody></table>

#### Options Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>includes</td><td>false</td><td>Array of string</td><td>An array of columns with <code>one-to-one</code> or <code>one-to-many</code> references that you would like to include in your response.<br><br>For <code>one-to-one</code> reference the value will be returned as an object containing the includes in place of the reference value.<br><br>For <code>one-to-many</code> reference the value will be returned as an array of objects containing the includes in place of the reference value.</td></tr></tbody></table>

### Examples

#### Get by UID

```javascript
const product = await client.database().from('products').getByUID("inom3bu91webuywd1ub9bu9dw1")
```

#### Get by UID with includes

```javascript
const product = await client.database().from('products').getByUID("inom3bu91webuywd1ub9bu9dw1", {
    includes: ["category"]
})
```

## Response

### Parameters

| Field | Data Type | Description                                                 |
| ----- | --------- | ----------------------------------------------------------- |
| data  | Object    | Object containing all database item values                  |
| meta  | Object    | Object containing [metadata](getbyuid.md#metadata-paramers) |

#### Metadata Parameters

| Field         | Data Type | Description                                                                 |
| ------------- | --------- | --------------------------------------------------------------------------- |
| total         | number    | <p>Total number of items in with the given UID<br><br>Always equal to 1</p> |
| page          | number    | <p>Current page number<br><br>Always equal to 1</p>                         |
| limit         | number    | <p>Current limit per page<br><br>Always equal to 1</p>                      |
| includesCount | number    | Number of additional requests for the includes operations                   |

### Example

This is an example response to the [Get by UID with includes](getbyuid.md#get-by-uid-with-includes) request example above.

```json
{
    "data": {
        "name": "T-Shirt",
        "price": 10,
        "category": {
            "uid": "n10234b901489bwduih1dw91",
            "name": "clothing"
        },
        "createdAt": "2022-08-22T16:04:49-04:00",
        "updatedAt": "2022-08-22T16:04:51-04:00"
    },
    "meta": {
        "total": 1,
        "page": 1,
        "limit": 1,
        "includesCount": 1
    }
}
```
