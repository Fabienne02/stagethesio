export const notMaybe = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

export default notMaybe;
