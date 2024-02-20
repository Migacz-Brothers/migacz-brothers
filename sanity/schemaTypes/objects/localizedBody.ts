import { i18n } from '@/sanity/languages';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'localizedBody',
  title: 'Localized Body',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: i18n.languages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      fieldset: lang.isDefault ? undefined : 'translations',
    }),
  ),
});
