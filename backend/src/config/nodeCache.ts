import NodeCache from "node-cache";

export const cache = new NodeCache({
  stdTTL: 10, // segundos
});
