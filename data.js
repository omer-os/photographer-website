import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const SanityClient = createClient({
  projectId: "theyuzzp",
  dataset: "production",
  apiVersion: "2022-08-31",
  useCdn: false,
});
const builder = ImageUrlBuilder(SanityClient);

export function urlFor(source) {
  return builder.image(source);
}
