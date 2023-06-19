# generateDataTypes()

## Description

Generate Typescript Interfaces for your database and save them in a specified path in your local directory.

### Use Cases

You can use this feature to make your development easier by generating database tables interfaces for your Typescript projects. Most likely, you won't need to use this during the runtime, but as a one-time script in your `package.json`. To implement it:

1.  Create a file `deskree-interfaces.ts` that will instantiate Deskree Client together with a [Deskree Admin Token](https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/admin-token):\


    ```javascript
    import createClient from '@deskree/deskree-js'
    import axios from 'axios'

    const options = {
      projectId: "YOUR_PROJECT_ID",
      axios: axios,
      adminToken: "YOUR_DESKREE_ADMIN_TOKEN"
    }

    const client = createClient(options);
    client.config().generateDataTypes({path: "./src/interfaces", name: "deskree.types.ts"})
    ```



    {% hint style="danger" %}
    DANGER: Always keep your Deskree Admin token secure as it is a very powerful token that may allow unwanted access to your data if compromised. If you believe that is the case, you can always [refresh your to](https://app.gitbook.com/s/yI7bLryeVaoczdkvkVAD/fundamentals/other/admin-token#refresh-token)
    {% endhint %}
2.  In your `package.json` `"scripts"` object, create a script that will execute the `deskree-interfaces.ts` file. The script depends on your typescript configuration and file location. Example:\




    ```json
    "scripts": {
        "deskree-interfaces": "tsc && node lib/src/deskree-interfaces.js"
    }
    ```



    \
    Or you can use packages like [TS Node](https://github.com/TypeStrong/ts-node) to run typescript files directly. For more information, [visit](https://stackoverflow.com/questions/33535879/how-to-run-typescript-files-from-command-line).\


    ```json
    "scripts": {
        "deskree-interfaces": "npx ts-node /src/deskree-interfaces.ts"
    }
    ```
3. Run the newly created script in your console:\
   \
   `npm run deskree-interfaces`
4. The interfaces file should appear in the specified directory for you to use throughout your project.

## Request

### Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>options</td><td>true</td><td>Object</td><td><a href="generatedatatypes.md#options-object-parameters">Options Object</a> describing filtering, sorting, and other options</td></tr></tbody></table>

#### Options Object Parameters

<table><thead><tr><th>Field</th><th data-type="checkbox">Required</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>database</td><td>false</td><td><code>default</code></td><td>Currently accepts only "default" value, but with multiple databases per project feature coming soon, it will be accepting the name of the database to extract the configs from.<br><br><strong>Default</strong>: "default"</td></tr><tr><td>path</td><td>false</td><td><code>string</code></td><td><p>Relative path where typescript interfaces should be saved. Should always end with <code>/</code> <br><br>Example: <code>./src/interfaces/</code></p><p></p><p><strong>Default:</strong> will save the file in the same directory where the method is executed.</p></td></tr><tr><td>fileName</td><td>false</td><td>`string`</td><td>File name of the interfaces. <br><br>Default: <code>deskree-types.interface.ts</code></td></tr></tbody></table>

### Example

{% code overflow="wrap" %}
```javascript
await client.config().generateDataTypes({
    database: "default",
    path: "../interfaces"
})
```
{% endcode %}

## Response

Creates Typescript Interface file in the specified path.

### Example

<pre class="language-typescript"><code class="lang-typescript"><strong>export type UsersDataType = {
</strong>	roles: string[]
	uid: string
	email: string
	createdAt?: string
	updatedAt?: string
}

export type BooksDataType = {
	uid: string
	name: string
	arrayOfBooleans?: boolean[]
	updatedAt?: string
	author?: string
	arrayOfInt?: number[]
	arrayOfStrings?: string[]
	arrayOfFloats?: number[]
	createdAt?: string
	image?: string
}
</code></pre>
