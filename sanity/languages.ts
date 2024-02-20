const languages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'pt', title: 'Portuguese' },
  { id: 'es', title: 'Spanish' },
];

const i18n = {
  languages,
  base: 'en', // Default language
};

const googleTranslateLanguages = languages.map(({ id, title }) => ({
  id,
  title,
}));

// For v3 studio
export { i18n, googleTranslateLanguages };
