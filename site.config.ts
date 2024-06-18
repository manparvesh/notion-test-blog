import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '55e4a745c9c44dd6af2374ce6e70777a',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Man Parvesh\'s Photography website',
  domain: 'photos.manparvesh.com',
  author: 'Man Parvesh Singh Randhawa',

  // open graph metadata (optional)
  description: 'Man Parvesh Singh Randhawa\'s Website',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: 'manparvesh',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: {
    '/pathankot': 'b2c19ca4d05e4668a148d633c2ceaed8',
    '/guwahati': '0be444d10ac34878ad0d01c3e7e7d80c',
    '/bangalore': 'efb78fac1a3b48bfb843a3a203504140',
    '/singapore': 'd1261114bde64647b3cc2856d1f270d7',
    '/gili': '911cf5590ecb47738168cbeb47138a5e',
    '/langkawi': 'd1dca5c185a941c9814120fe8c69b9ae',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: '📫 Contact',
  //     pageId: '984efa531cbd4908acd14b2fb5e40331'
  //   },
  // ]
})
