export const LINK_EXTERNAL_FRAGMENT = groq`
  _type == 'linkExternal' => {
    _key,
    _type,
    title,
    url,
    newTab
  }
`;
