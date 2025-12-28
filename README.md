# Sleep with Delay

A utility package for delaying function execution and pausing execution in JavaScript/TypeScript.

## Installation

Install the package via npm:

```bash
npm install sleep-with-delay
```

## Usage

### `sleep`

Pause execution for a given number of milliseconds.

```typescript
import { sleep } from "sleep-with-delay";

async function example() {
  console.log("Start");
  await sleep(1000); // Pause for 1 second
  console.log("End");
}
```

### `withDelay`

Execute a function after a delay.

```typescript
import { withDelay } from "sleep-with-delay";

async function example() {
  await withDelay(() => console.log("Executed after delay"), 1000);
}
```

## License

MIT
