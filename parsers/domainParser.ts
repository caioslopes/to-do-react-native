export interface DomainParser<D, T> {
  parse: (data: D) => T;
}
