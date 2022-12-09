import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

const SanityClient = createClient({
  projectId: "theyuzzp",
  dataset: "production",
  apiVersion: "2022-08-31",
  useCdn: false,
});
const builder = ImageUrlBuilder(SanityClient);

export function urlFor(source) {
  return builder.image(source);
}
export function youtube_parser(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

export default SanityClient;
