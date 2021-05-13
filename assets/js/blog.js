import GhostContentAPI from '@tryghost/content-api'

export const blogAPI = new GhostContentAPI({
  url: 'https://ghost.cryptic-game.net',
  key: '6495bcf3e9a85556cb1e5519ab',
  version: 'v3'
})

blogAPI.mappings = {
  post: {
    feature_image: 'image',
    created_at: 'createdAt',
    updated_at: 'updatedAt',
    published_at: 'publishedAt',
    custom_excerpt: 'customExcerpt',
    codeinjection_head: 'codeinjectionHead',
    codeinjection_foot: 'codeinjectionFoot',
    custom_template: 'customTemplate',
    canonical_url: 'canonicalURL',
    reading_time: 'readingTime',
    og_image: 'ogImage',
    og_title: 'ogTitle',
    og_description: 'ogDescription',
    twitter_image: 'twitterImage',
    twitter_title: 'twitterTitle',
    twitter_description: 'twitterDescription',
    meta_title: 'metaTitle',
    meta_description: 'metaDescription',
    comment_id: 'commentID'
  }
}
