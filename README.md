# is-ulid

A library validating [ulid](https://github.com/ulid/spec) with [class-validator](https://github.com/typestack/class-validator). Inspired by validator.js(uuid validation) and class-validator(uuid decorator).

## Installation

```sh
npm -S @yuzu441/is-ulid

# or 

yarn add @yuzu441/is-ulid
```

## How to use

```typescript
import {IsULID} from '@yuzu441/is-ulid'
class Sample {
  @IsULID()
  id: string
}
```