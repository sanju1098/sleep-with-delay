/**
 * Pause execution for given milliseconds
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Execute a function after a delay
 */
export async function withDelay<T>(
  fn: () => Promise<T> | T,
  ms: number
): Promise<T> {
  await sleep(ms);
  return fn();
}
