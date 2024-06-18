import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '6d042e0970ad483d85251be2e6229b08',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Man Parvesh\'s Kitchen website',
  domain: 'kitchen.manparvesh.com',
  author: 'Man Parvesh Singh Randhawa',

  // open graph metadata (optional)
  description: 'Man Parvesh\'s Kitchen Website',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
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
    '/tips': '65918a390b31482bb4882dec7a459cc7',
    '/contact': 'd8b39e70273d464395036df735ecc07a'
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '📝 Tips',
      pageId: '65918a390b31482bb4882dec7a459cc7'
    },
    {
      title: '📫 Contact',
      pageId: 'd8b39e70273d464395036df735ecc07a'
    }
  ]
})
