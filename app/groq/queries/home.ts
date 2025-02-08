import { PORTABLE_TEXT_FRAGMENT } from '../fragments/portable-text'

export const HOME = groq`
  *[_type == 'home'][0] {
    ...,
    description[] {
      ${PORTABLE_TEXT_FRAGMENT}
    }
  }
`
