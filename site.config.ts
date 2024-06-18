import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1afa57a764ce4d90bc7ca7f330fb2485',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Man Parvesh Singh Randhawa',
  domain: 'manparvesh.com',
  author: 'Man Parvesh Singh Randhawa',

  // open graph metadata (optional)
  description: 'Man Parvesh Singh Randhawa\'s Website',

  // social usernames (optional)
  twitter: '',
  github: 'manparvesh',
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
    '/blog': '4659dbf8e9004897b02fce0c2ff2682c',
    '/publications': '528b1a63bf7d4b1d9b38bb9bcbb10a4f',
  },

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '✍️ Blog',
      pageId: '4659dbf8e9004897b02fce0c2ff2682c'
    },
    {
      title: '📑 Publications',
      pageId: '528b1a63bf7d4b1d9b38bb9bcbb10a4f'
    },
  ]
})
