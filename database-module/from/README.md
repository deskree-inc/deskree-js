# from()

## Description

Instantiate connection to Deskree table to manage the data.

## Initialization

### Parameters

| Field | Data Type | Description                                          |
| ----- | --------- | ---------------------------------------------------- |
| table | string    | Name of Deskree table to instantiate connection with |

### Example

{% code overflow="wrap" %}
```javascript
const productsTable = await client.database().from('products')
```
{% endcode %}

## Requests

{% content-ref url="get.md" %}
[get.md](get.md)
{% endcontent-ref %}

{% content-ref url="getbyuid.md" %}
[getbyuid.md](getbyuid.md)
{% endcontent-ref %}

{% content-ref url="create.md" %}
[create.md](create.md)
{% endcontent-ref %}

{% content-ref url="update.md" %}
[update.md](update.md)
{% endcontent-ref %}

{% content-ref url="delete.md" %}
[delete.md](delete.md)
{% endcontent-ref %}
