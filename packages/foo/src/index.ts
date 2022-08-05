import { v4 as uuid4, v5 as uuid5 } from "uuid";

const UUID_NAMESPACE = "my-uuid5-namespace";

export default function getUUID(): string {
  return uuid4();
}

export function getUUID5(input: string): string {
  return uuid5(input, UUID_NAMESPACE);
}

export * as maths from "./maths";
