# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PloneBackend <a name="PloneBackend" id="cdk8s-plone.PloneBackend"></a>

#### Initializers <a name="Initializers" id="cdk8s-plone.PloneBackend.Initializer"></a>

```typescript
import { PloneBackend } from 'cdk8s-plone'

new PloneBackend(scope: Construct, id: string, options?: PloneBackendOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackend.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s-plone.PloneBackendOptions">PloneBackendOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-plone.PloneBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-plone.PloneBackend.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-plone.PloneBackend.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s-plone.PloneBackendOptions">PloneBackendOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.PloneBackend.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-plone.PloneBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.PloneBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-plone.PloneBackend.isConstruct"></a>

```typescript
import { PloneBackend } from 'cdk8s-plone'

PloneBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-plone.PloneBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-plone.PloneBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### PloneBackendDeployment <a name="PloneBackendDeployment" id="cdk8s-plone.PloneBackendDeployment"></a>

#### Initializers <a name="Initializers" id="cdk8s-plone.PloneBackendDeployment.Initializer"></a>

```typescript
import { PloneBackendDeployment } from 'cdk8s-plone'

new PloneBackendDeployment(scope: Construct, id: string, options?: PloneBackendDeploymentOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackendDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackendDeployment.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s-plone.PloneBackendDeploymentOptions">PloneBackendDeploymentOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-plone.PloneBackendDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-plone.PloneBackendDeployment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-plone.PloneBackendDeployment.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s-plone.PloneBackendDeploymentOptions">PloneBackendDeploymentOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendDeployment.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-plone.PloneBackendDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-plone.PloneBackendDeployment.isConstruct"></a>

```typescript
import { PloneBackendDeployment } from 'cdk8s-plone'

PloneBackendDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-plone.PloneBackendDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-plone.PloneBackendDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### PloneBackendService <a name="PloneBackendService" id="cdk8s-plone.PloneBackendService"></a>

#### Initializers <a name="Initializers" id="cdk8s-plone.PloneBackendService.Initializer"></a>

```typescript
import { PloneBackendService } from 'cdk8s-plone'

new PloneBackendService(scope: Construct, id: string, options?: PloneBackendServiceOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackendService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackendService.Initializer.parameter.options">options</a></code> | <code><a href="#cdk8s-plone.PloneBackendServiceOptions">PloneBackendServiceOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk8s-plone.PloneBackendService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk8s-plone.PloneBackendService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `options`<sup>Optional</sup> <a name="options" id="cdk8s-plone.PloneBackendService.Initializer.parameter.options"></a>

- *Type:* <a href="#cdk8s-plone.PloneBackendServiceOptions">PloneBackendServiceOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk8s-plone.PloneBackendService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk8s-plone.PloneBackendService.isConstruct"></a>

```typescript
import { PloneBackendService } from 'cdk8s-plone'

PloneBackendService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdk8s-plone.PloneBackendService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk8s-plone.PloneBackendService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### PloneBackendDeploymentOptions <a name="PloneBackendDeploymentOptions" id="cdk8s-plone.PloneBackendDeploymentOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-plone.PloneBackendDeploymentOptions.Initializer"></a>

```typescript
import { PloneBackendDeploymentOptions } from 'cdk8s-plone'

const ploneBackendDeploymentOptions: PloneBackendDeploymentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendDeploymentOptions.property.image">image</a></code> | <code>string</code> | Specify a custom image for Plone Backend. |
| <code><a href="#cdk8s-plone.PloneBackendDeploymentOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Extra labels to associate with resources. |
| <code><a href="#cdk8s-plone.PloneBackendDeploymentOptions.property.port">port</a></code> | <code>number</code> | Port number. |
| <code><a href="#cdk8s-plone.PloneBackendDeploymentOptions.property.replicas">replicas</a></code> | <code>number</code> | Number of replicas. |

---

##### `image`<sup>Optional</sup> <a name="image" id="cdk8s-plone.PloneBackendDeploymentOptions.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string
- *Default:* "plone/plone-backend:latest"

Specify a custom image for Plone Backend.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s-plone.PloneBackendDeploymentOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

Extra labels to associate with resources.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-plone.PloneBackendDeploymentOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 8080

Port number.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="cdk8s-plone.PloneBackendDeploymentOptions.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number
- *Default:* 2

Number of replicas.

---

### PloneBackendOptions <a name="PloneBackendOptions" id="cdk8s-plone.PloneBackendOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-plone.PloneBackendOptions.Initializer"></a>

```typescript
import { PloneBackendOptions } from 'cdk8s-plone'

const ploneBackendOptions: PloneBackendOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendOptions.property.deployment">deployment</a></code> | <code><a href="#cdk8s-plone.PloneBackendDeploymentOptions">PloneBackendDeploymentOptions</a></code> | *No description.* |
| <code><a href="#cdk8s-plone.PloneBackendOptions.property.service">service</a></code> | <code><a href="#cdk8s-plone.PloneBackendServiceOptions">PloneBackendServiceOptions</a></code> | *No description.* |

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="cdk8s-plone.PloneBackendOptions.property.deployment"></a>

```typescript
public readonly deployment: PloneBackendDeploymentOptions;
```

- *Type:* <a href="#cdk8s-plone.PloneBackendDeploymentOptions">PloneBackendDeploymentOptions</a>

---

##### `service`<sup>Optional</sup> <a name="service" id="cdk8s-plone.PloneBackendOptions.property.service"></a>

```typescript
public readonly service: PloneBackendServiceOptions;
```

- *Type:* <a href="#cdk8s-plone.PloneBackendServiceOptions">PloneBackendServiceOptions</a>

---

### PloneBackendServiceOptions <a name="PloneBackendServiceOptions" id="cdk8s-plone.PloneBackendServiceOptions"></a>

#### Initializer <a name="Initializer" id="cdk8s-plone.PloneBackendServiceOptions.Initializer"></a>

```typescript
import { PloneBackendServiceOptions } from 'cdk8s-plone'

const ploneBackendServiceOptions: PloneBackendServiceOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk8s-plone.PloneBackendServiceOptions.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Extra labels to associate with resources. |
| <code><a href="#cdk8s-plone.PloneBackendServiceOptions.property.port">port</a></code> | <code>number</code> | Port number. |
| <code><a href="#cdk8s-plone.PloneBackendServiceOptions.property.targetPort">targetPort</a></code> | <code>number</code> | Port number. |

---

##### `labels`<sup>Optional</sup> <a name="labels" id="cdk8s-plone.PloneBackendServiceOptions.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

Extra labels to associate with resources.

---

##### `port`<sup>Optional</sup> <a name="port" id="cdk8s-plone.PloneBackendServiceOptions.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 8080

Port number.

---

##### `targetPort`<sup>Optional</sup> <a name="targetPort" id="cdk8s-plone.PloneBackendServiceOptions.property.targetPort"></a>

```typescript
public readonly targetPort: number;
```

- *Type:* number
- *Default:* 8080;

Port number.

---



