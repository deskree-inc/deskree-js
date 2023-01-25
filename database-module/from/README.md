# from()

## Description

Instantiate connection to Deskree table to manage the data.

## Initialization

### Parameters

| Field | Data Type | Description                                          |
| ----- | --------- | ---------------------------------------------------- |
| table | string    | Name of Deskree table to instantiate connection with |

### Example

```javascript
const productsTable = await client.database().from('products')
```

## Requests

* [get.md](get.md "mention")
* [getbyuid.md](getbyuid.md "mention")
* [create.md](create.md "mention")
* [update.md](update.md "mention")
* [delete.md](delete.md "mention")
