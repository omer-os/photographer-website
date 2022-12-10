export default {
  name: "categories",
  title: "categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required(), Rule.uniqe()],
    },
    {
      name: "coverImage",
      title: "cover image",
      type: "image",
      validation: (Rule) => [Rule.required(), Rule.uniqe()],
    },
  ],
};
