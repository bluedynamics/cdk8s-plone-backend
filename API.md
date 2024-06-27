# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Plone <a name="Plone" id="cdk8s-plone.Plone"></a>

#### Initializers <a name="Initializers" id="cdk8s-plone.Plone.Initializer"></a>

```typescript
import { Plone } from 'cdk8s-plone'

new Plone(scope: Construct, id: string, options?: PloneOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.Plone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-plone.Plone.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.Plone.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s-plone.PloneOptions">PloneOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-plone.Plone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-plone.Plone.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-plone.Plone.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s-plone.PloneOptions">PloneOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.Plone.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-plone.Plone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.Plone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-plone.Plone.isConstruct"></a>

```typescript
import { Plone } from 'cdk8s-plone'

Plone.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-plone.Plone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.Plone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk8s-plone.Plone.property.backendServiceName">backendServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.Plone.property.frontendServiceName">frontendServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-plone.Plone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `backendServiceName`<sup>Required</sup> <a name="backendServiceName" id="cdk8s-plone.Plone.property.backendServiceName"></a>

```typescript
public readonly backendServiceName: string;
```

- *Type:* string

---

##### `frontendServiceName`<sup>Required</sup> <a name="frontendServiceName" id="cdk8s-plone.Plone.property.frontendServiceName"></a>

```typescript
public readonly frontendServiceName: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### PloneOptions <a name="PloneOptions" id="cdk8s-plone.PloneOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-plone.PloneOptions.Initializer"></a>

```typescript
import { PloneOptions } from 'cdk8s-plone'

const ploneOptions: PloneOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendEnvironment">backendEnvironment</a></code> | <code>cdk8s-plus-24.Env</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendImage">backendImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendImagePullPolicy">backendImagePullPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendImagePullSecret">backendImagePullSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendMaxUnavailable">backendMaxUnavailable</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendMinAvailable">backendMinAvailable</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.backendReplicas">backendReplicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendEnvironment">frontendEnvironment</a></code> | <code>cdk8s-plus-24.Env</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendImage">frontendImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendImagePullPolicy">frontendImagePullPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendImagePullSecret">frontendImagePullSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendMaxUnavailable">frontendMaxUnavailable</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendMinAvailable">frontendMinAvailable</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneOptions.property.frontendReplicas">frontendReplicas</a></code> | <code>number</code> | *No description.* |

---

##### `backendEnvironment`<sup>Optional</sup> <a name="backendEnvironment" id="cdk8s-plone.PloneOptions.property.backendEnvironment"></a>

```typescript
public readonly backendEnvironment: Env;
```

- *Type:* cdk8s-plus-24.Env

---

##### `backendImage`<sup>Optional</sup> <a name="backendImage" id="cdk8s-plone.PloneOptions.property.backendImage"></a>

```typescript
public readonly backendImage: string;
```

- *Type:* string

---

##### `backendImagePullPolicy`<sup>Optional</sup> <a name="backendImagePullPolicy" id="cdk8s-plone.PloneOptions.property.backendImagePullPolicy"></a>

```typescript
public readonly backendImagePullPolicy: string;
```

- *Type:* string

---

##### `backendImagePullSecret`<sup>Optional</sup> <a name="backendImagePullSecret" id="cdk8s-plone.PloneOptions.property.backendImagePullSecret"></a>

```typescript
public readonly backendImagePullSecret: string;
```

- *Type:* string

---

##### `backendMaxUnavailable`<sup>Optional</sup> <a name="backendMaxUnavailable" id="cdk8s-plone.PloneOptions.property.backendMaxUnavailable"></a>

```typescript
public readonly backendMaxUnavailable: string | number;
```

- *Type:* string | number

---

##### `backendMinAvailable`<sup>Optional</sup> <a name="backendMinAvailable" id="cdk8s-plone.PloneOptions.property.backendMinAvailable"></a>

```typescript
public readonly backendMinAvailable: string | number;
```

- *Type:* string | number

---

##### `backendReplicas`<sup>Optional</sup> <a name="backendReplicas" id="cdk8s-plone.PloneOptions.property.backendReplicas"></a>

```typescript
public readonly backendReplicas: number;
```

- *Type:* number

---

##### `frontendEnvironment`<sup>Optional</sup> <a name="frontendEnvironment" id="cdk8s-plone.PloneOptions.property.frontendEnvironment"></a>

```typescript
public readonly frontendEnvironment: Env;
```

- *Type:* cdk8s-plus-24.Env

---

##### `frontendImage`<sup>Optional</sup> <a name="frontendImage" id="cdk8s-plone.PloneOptions.property.frontendImage"></a>

```typescript
public readonly frontendImage: string;
```

- *Type:* string

---

##### `frontendImagePullPolicy`<sup>Optional</sup> <a name="frontendImagePullPolicy" id="cdk8s-plone.PloneOptions.property.frontendImagePullPolicy"></a>

```typescript
public readonly frontendImagePullPolicy: string;
```

- *Type:* string

---

##### `frontendImagePullSecret`<sup>Optional</sup> <a name="frontendImagePullSecret" id="cdk8s-plone.PloneOptions.property.frontendImagePullSecret"></a>

```typescript
public readonly frontendImagePullSecret: string;
```

- *Type:* string

---

##### `frontendMaxUnavailable`<sup>Optional</sup> <a name="frontendMaxUnavailable" id="cdk8s-plone.PloneOptions.property.frontendMaxUnavailable"></a>

```typescript
public readonly frontendMaxUnavailable: string | number;
```

- *Type:* string | number

---

##### `frontendMinAvailable`<sup>Optional</sup> <a name="frontendMinAvailable" id="cdk8s-plone.PloneOptions.property.frontendMinAvailable"></a>

```typescript
public readonly frontendMinAvailable: string | number;
```

- *Type:* string | number

---

##### `frontendReplicas`<sup>Optional</sup> <a name="frontendReplicas" id="cdk8s-plone.PloneOptions.property.frontendReplicas"></a>

```typescript
public readonly frontendReplicas: number;
```

- *Type:* number

---



