import { defineConfig, Form, TinaCMS } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'projects',
        label: 'Projetos',
        path: 'content/projects',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Titulo',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'project_description',
            label: 'Descrição do projeto',
            required: true,
          },
          {
            type: 'string',
            name: 'date',
            label: 'Data de execução do projeto',
            required: true,
          },
          {
            type: 'string',
            name: 'read_time',
            label: 'Tempo de leitura',
            required: true,
          },
          {
            type: 'string',
            name: 'link',
            label: 'Link do projeto',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
          {
            type: 'image',
            name: 'images_column_one',
            label: 'Primeira coluna de imagens',
            list: true,
          },
          {
            type: 'image',
            name: 'images_column_two',
            label: 'Segunda coluna de imagens',
            list: true,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
          },
        ],
        ui: {
          filename: {
            slugify: (form) => {
              if (!form || !form.title) return '';
              const slug = form.title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

              return `${slug}`;
            },
          },
          router: ({ collection: Collection, document: Document }) =>
            `portfolio/${Document._sys.filename}`,
        },
      },
    ],
  },
});
