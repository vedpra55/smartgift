import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE,
  accessToken: process.env.NEXT_PUBLIC_TOKEN,
});

export default client;
