# Sleep with Delay

A utility package for delaying function execution and pausing execution in JavaScript/TypeScript. This package provides simple and effective methods to introduce delays in your code, making it useful for testing, animations, or any scenario where controlled timing is required.

## Features

- **`sleep`**: Pause execution for a specified duration.
- **`withDelay`**: Execute a function after a specified delay.
- Lightweight and easy to use.
- Fully written in TypeScript.

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

## API Reference

### `sleep(duration: number): Promise<void>`

Pauses the execution of an asynchronous function for the specified duration.

- **Parameters**:
  - `duration` (number): The delay duration in milliseconds.
- **Returns**: A `Promise` that resolves after the specified duration.

### `withDelay<T>(fn: () => T, duration: number): Promise<T>`

Executes the provided function after the specified delay.

- **Parameters**:
  - `fn` (Function): The function to execute after the delay.
  - `duration` (number): The delay duration in milliseconds.
- **Returns**: A `Promise` that resolves with the return value of the function.

## Examples

### Example 1: Using `sleep` for Delays

```typescript
import { sleep } from "sleep-with-delay";

async function fetchData() {
  console.log("Fetching data...");
  await sleep(2000); // Simulate a delay
  console.log("Data fetched!");
}

fetchData();
```

### Example 2: Using `withDelay` for Deferred Execution

```typescript
import { withDelay } from "sleep-with-delay";

function logMessage() {
  console.log("This message is delayed.");
}

withDelay(logMessage, 1500);
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/sanju1098/sleep-with-delay).

## License

This project is licensed under the ISC License. See the LICENSE file for details.
