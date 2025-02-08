import { LINK_EXTERNAL_FRAGMENT } from './link-external'
import { LINK_INTERNAL_FRAGMENT } from './link-internal'

export const PORTABLE_TEXT_FRAGMENT = groq`
  _type == 'block' => {
    ...,
    markDefs[] {
      ...,
      ${LINK_EXTERNAL_FRAGMENT},
      ${LINK_INTERNAL_FRAGMENT}
    }
  }
`
