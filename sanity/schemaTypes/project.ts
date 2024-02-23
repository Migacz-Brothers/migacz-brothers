const projectSchema = {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'localizedString',
      title: 'Description',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: `title`,
        maxLength: 200,
      },
    },
    {
      name: 'executedAt',
      type: 'localizedString',
      title: 'Executed at',
    },
    {
      name: 'read_time',
      type: 'localizedString',
      title: 'Read Time',
    },
    {
      name: 'link',
      type: 'string',
      title: 'Link',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localizedBody',
    },
    {
      title: 'First column of images',
      name: 'image_column_1',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Second column of images',
      name: 'image_column_2',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

export default projectSchema;
