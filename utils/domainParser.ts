export interface DomainParser<D, T> {
  parse: (data: D) => T;
}

export function domainParser<D extends Object, T, P extends DomainParser<D, T>>(
  data: D,
  parser: P
) {
  return parser.parse(data);
}
