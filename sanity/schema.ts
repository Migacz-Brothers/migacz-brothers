import localizedBody from '@/sanity/schemaTypes/objects/localizedBody';
import localizedSlug from '@/sanity/schemaTypes/objects/localizedSlug';
import localizedString from '@/sanity/schemaTypes/objects/localizedString';
import project from '@/sanity/schemaTypes/project';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [localizedString, localizedBody, localizedSlug, project],
};
