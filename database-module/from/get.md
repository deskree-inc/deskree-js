# get()

## Description

Get data from the database table

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>options</td><td>false</td><td>Object</td><td><a href="get.md#options-object-parameters">Options Object</a> describing filtering, sorting, and other options</td></tr></tbody></table>

#### Options Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>page</td><td>false</td><td>number</td><td>Page number to navigate to if the response is paginated</td></tr><tr><td>limit</td><td>false</td><td>number</td><td>Number of results per page if the response is paginated<br><br><strong>Default</strong>: 50</td></tr><tr><td>where</td><td>false</td><td>number</td><td><a href="get.md#where-object-parameters">Where Object</a> describing query parameters</td></tr><tr><td>sorted[how]</td><td>false</td><td><code>asc</code> | <code>desc</code></td><td>How to sort response results: ascending vs descending<br><br>Must be used with <code>sorted[param]</code> parameter</td></tr><tr><td>sorted[param]</td><td>false</td><td>string</td><td><p>How to sort response results: what parameter to sort by </p><p><br>Must be used with <code>sorted[param]</code> parameter</p></td></tr><tr><td>includes</td><td>false</td><td>Array of string</td><td>An array of columns with <code>one-to-one</code> or <code>one-to-many</code> references that you would like to include in your response.<br><br>For <code>one-to-one</code> reference the value will be returned as an object containing the includes in place of the reference value.<br><br>For <code>one-to-many</code> reference the value will be returned as an array of objects containing the includes in place of the reference value.</td></tr></tbody></table>

#### Where Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>attribute</td><td>false</td><td>string</td><td>Column name that you would like to query by</td></tr><tr><td>operator</td><td>false</td><td><code>&#x3C;</code> | <code>></code> | <code>==</code> | <code>!=</code> | <code>&#x3C;=</code> | <code>>=</code> | <code>array-contains</code> | <code>array-contains-any</code> | <code>in</code> | <code>not-in</code></td><td>An operator to perform the query</td></tr><tr><td>value</td><td>false</td><td>any</td><td>Value of the query</td></tr></tbody></table>

### Examples

#### Get all

{% code overflow="wrap" %}
```javascript
const products = await client.table('products').get()
```
{% endcode %}

#### Get all with filters

```javascript
const products = await client.table('products').get({
    page: 1,
    limit: 10,
    where: {
        attribute: "price",
        operator: ">",
        value: 10
    },
    "sorted[how]": "asc",
    "sorted[param]": "price",
    "includes": ["category"]
})
```

## Response

### Parameters

| Field | Data Type        | Description                                                |
| ----- | ---------------- | ---------------------------------------------------------- |
| data  | Array of objects | Array of [data objects](get.md#database-object-parameters) |
| meta  | Object           | Object containing [metadata](get.md#metadata-paramers)     |

#### Database Object Parameters

| Field      | Data Type | Description                                |
| ---------- | --------- | ------------------------------------------ |
| uid        | string    | UID of a database item                     |
| attributes | Object    | Object containing all database item values |

#### Metadata Parameters

| Field         | Data Type | Description                                               |
| ------------- | --------- | --------------------------------------------------------- |
| total         | number    | Total number of items in the database                     |
| page          | number    | Current page number                                       |
| limit         | number    | Current limit per page                                    |
| includesCount | number    | Number of additional requests for the includes operations |

### Example

This is an example response to the [Get all with filters](get.md#get-all-with-filters) request example above.

{% code overflow="wrap" %}
```json
{
    "data": [
        {
            "uid": "iaijasdiadsi14in",
            "attributes": {
                "name": "T-Shirt",
                "price": 10,
                "category": {
                    "uid": "n10234b901489bwduih1dw91",
                    "name": "clothing"
                },
                "createdAt": "2022-08-22T16:04:49-04:00",
                "updatedAt": "2022-08-22T16:04:51-04:00"
            }
        }
    ],
    "meta": {
        "total": 1,
        "page": 1,
        "limit": 1,
        "includesCount": 1
    }
}
```
{% endcode %}
