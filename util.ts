type Create<T = Object> = (Model: { new (...params: any[]): T }, ...rest: any[]) => T
export const create: Create = (Model, ...rest) => {
  return new Model(...rest)
}