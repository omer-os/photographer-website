export default {
  name: "gallery",
  title: "gallery",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => [Rule.required(), Rule.uniqe()],
    },
    {
      name: "categories",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => [Rule.required(), Rule.uniqe()],
    },
    {
      name: "Image",
      title: "Image",
      type: "image",
    },
    {
      title: "Video link",
      name: "videoLink",
      type: "string",
      description:
        "add youtube video link here. NOTE: if you add a video link to this filed the image will dismissed by front end.",
    },
  ],
};
