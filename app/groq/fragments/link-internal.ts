export const LINK_INTERNAL_FRAGMENT = groq`
  _type == 'linkInternal' => {
    _key,
    _type,
    title,
    ...reference->{
      'documentType': _type,
      (_type == 'home') => {
        'slug': '/',
      },
      (_type == 'collection') => {
        'slug': '/collections/' + store.slug.current,
      },
      (_type == 'product') => {
        'slug': '/products/' + store.slug.current,
      }
    }
  }
`;
