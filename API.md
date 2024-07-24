# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Plone <a name="Plone" id="@bluedynamics/cdk8s-plone.Plone"></a>

#### Initializers <a name="Initializers" id="@bluedynamics/cdk8s-plone.Plone.Initializer"></a>

```typescript
import { Plone } from '@bluedynamics/cdk8s-plone'

new Plone(scope: Construct, id: string, options?: PloneOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.Initializer.parameter.options">options</a></code> | <code><a href="#@bluedynamics/cdk8s-plone.PloneOptions">PloneOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@bluedynamics/cdk8s-plone.Plone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@bluedynamics/cdk8s-plone.Plone.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="@bluedynamics/cdk8s-plone.Plone.Initializer.parameter.options"></a>

- *Type:* <a href="#@bluedynamics/cdk8s-plone.PloneOptions">PloneOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@bluedynamics/cdk8s-plone.Plone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@bluedynamics/cdk8s-plone.Plone.isConstruct"></a>

```typescript
import { Plone } from '@bluedynamics/cdk8s-plone'

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

###### `x`<sup>Required</sup> <a name="x" id="@bluedynamics/cdk8s-plone.Plone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.property.backendServiceName">backendServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.Plone.property.frontendServiceName">frontendServiceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@bluedynamics/cdk8s-plone.Plone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `backendServiceName`<sup>Required</sup> <a name="backendServiceName" id="@bluedynamics/cdk8s-plone.Plone.property.backendServiceName"></a>

```typescript
public readonly backendServiceName: string;
```

- *Type:* string

---

##### `frontendServiceName`<sup>Required</sup> <a name="frontendServiceName" id="@bluedynamics/cdk8s-plone.Plone.property.frontendServiceName"></a>

```typescript
public readonly frontendServiceName: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### PloneBaseOptions <a name="PloneBaseOptions" id="@bluedynamics/cdk8s-plone.PloneBaseOptions"></a>

#### Initializer <a name="Initializer" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.Initializer"></a>

```typescript
import { PloneBaseOptions } from '@bluedynamics/cdk8s-plone'

const ploneBaseOptions: PloneBaseOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.environment">environment</a></code> | <code>cdk8s-plus-24.Env</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.imagePullPolicy">imagePullPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.limitCpu">limitCpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.limitMemory">limitMemory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.maxUnavailable">maxUnavailable</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.minAvailable">minAvailable</a></code> | <code>string \| number</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.environment"></a>

```typescript
public readonly environment: Env;
```

- *Type:* cdk8s-plus-24.Env

---

##### `image`<sup>Optional</sup> <a name="image" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imagePullPolicy`<sup>Optional</sup> <a name="imagePullPolicy" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.imagePullPolicy"></a>

```typescript
public readonly imagePullPolicy: string;
```

- *Type:* string

---

##### `limitCpu`<sup>Optional</sup> <a name="limitCpu" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.limitCpu"></a>

```typescript
public readonly limitCpu: number;
```

- *Type:* number

---

##### `limitMemory`<sup>Optional</sup> <a name="limitMemory" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.limitMemory"></a>

```typescript
public readonly limitMemory: string;
```

- *Type:* string

---

##### `maxUnavailable`<sup>Optional</sup> <a name="maxUnavailable" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: string | number;
```

- *Type:* string | number

---

##### `minAvailable`<sup>Optional</sup> <a name="minAvailable" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.minAvailable"></a>

```typescript
public readonly minAvailable: string | number;
```

- *Type:* string | number

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@bluedynamics/cdk8s-plone.PloneBaseOptions.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

### PloneOptions <a name="PloneOptions" id="@bluedynamics/cdk8s-plone.PloneOptions"></a>

#### Initializer <a name="Initializer" id="@bluedynamics/cdk8s-plone.PloneOptions.Initializer"></a>

```typescript
import { PloneOptions } from '@bluedynamics/cdk8s-plone'

const ploneOptions: PloneOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneOptions.property.backend">backend</a></code> | <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions">PloneBaseOptions</a></code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneOptions.property.frontend">frontend</a></code> | <code><a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions">PloneBaseOptions</a></code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneOptions.property.imagePullSecrets">imagePullSecrets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@bluedynamics/cdk8s-plone.PloneOptions.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@bluedynamics/cdk8s-plone.PloneOptions.property.backend"></a>

```typescript
public readonly backend: PloneBaseOptions;
```

- *Type:* <a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions">PloneBaseOptions</a>

---

##### `frontend`<sup>Optional</sup> <a name="frontend" id="@bluedynamics/cdk8s-plone.PloneOptions.property.frontend"></a>

```typescript
public readonly frontend: PloneBaseOptions;
```

- *Type:* <a href="#@bluedynamics/cdk8s-plone.PloneBaseOptions">PloneBaseOptions</a>

---

##### `imagePullSecrets`<sup>Optional</sup> <a name="imagePullSecrets" id="@bluedynamics/cdk8s-plone.PloneOptions.property.imagePullSecrets"></a>

```typescript
public readonly imagePullSecrets: string[];
```

- *Type:* string[]

---

##### `version`<sup>Optional</sup> <a name="version" id="@bluedynamics/cdk8s-plone.PloneOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---



