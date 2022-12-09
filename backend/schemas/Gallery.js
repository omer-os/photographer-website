export default {
  name: "gallery",
  title: "gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "categories",
      type: "reference",
      to: [{ type: "categories" }],
    },

    {
      name: "Image",
      title: "Image",
      type: "image",
    },
  ],
};
