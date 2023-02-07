# getSchema()

## Description

Get a table schema in JSON format.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>options</td><td>true</td><td>Object</td><td><a href="getschema.md#options-object-parameters">Options Object</a> describing filtering, sorting, and other options</td></tr></tbody></table>

#### Options Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>table</td><td>true</td><td>string</td><td>Table name</td></tr><tr><td>database</td><td>false</td><td><code>default</code></td><td>Currently accepts only "default" value, but with multiple databases per project feature coming soon, it will be accepting the name of the database to extract the configs from.<br><br><strong>Default</strong>: "default"</td></tr><tr><td>format</td><td>false</td><td><code>default</code> | <code>formatted</code></td><td><p>Specify the format of how the database schema is to be returned.</p><ul><li><code>default</code> - will return a JSON with Deskree's own <a href="https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/database/datatypes">Datatypes</a> format exactly how it is used internally.</li><li><code>formatted</code> - will return a JSON with JS native datatypes and indication which columns are optional/required.<br><br><strong>Default</strong>: "default"</li></ul></td></tr></tbody></table>

### Example

<pre class="language-javascript"><code class="lang-javascript"><strong>const schema = await client.config().generateDataTypes({
</strong>    database: "default",
    table: "products",
    format: "formatted"
})
</code></pre>

## Response

An object containing the data schema of a given table.

### Example

#### default&#x20;

```json
{
    "data": {
        "arrayOfInt": "Array<integer>?",
        "arrayOfFloats": "Array<float>?",
        "uid": "UID",
        "arrayOfStrings": "Array<string>?",
        "author": "String?",
        "image": "Storage?",
        "name": "String",
        "createdAt": "String?",
        "arrayOfBooleans": "Array<boolean>?",
        "updatedAt": "String?"
    }
}
```

#### formatted

```json
{
    "data": {
        "uid": {
            "type": "string",
            "isOptional": false
        },
        "arrayOfBooleans": {
            "type": "boolean[]",
            "isOptional": true
        },
        "arrayOfFloats": {
            "type": "number[]",
            "isOptional": true
        },
        "author": {
            "type": "string",
            "isOptional": true
        },
        "updatedAt": {
            "type": "string",
            "isOptional": true
        },
        "createdAt": {
            "type": "string",
            "isOptional": true
        },
        "name": {
            "type": "string",
            "isOptional": false
        },
        "arrayOfStrings": {
            "type": "string[]",
            "isOptional": true
        },
        "image": {
            "type": "string",
            "isOptional": true
        },
        "arrayOfInt": {
            "type": "number[]",
            "isOptional": true
        }
    }
}
```
