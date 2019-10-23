## Telex.blog

A serverless doc writing app built using Cloudflare Workers and KV Store. 

- Write anonymously
- Posts are replicated to 175+ CF data centers across the globe
- Content is served blazing fast ⚡️from a location that is closest to your readers
- Originless

## How to run

```
npm i @cloudflare/wrangler -g
cd telex
npm install
wrangler preview
```

To deploy on your own Cloudflare account:

```
wrangler publish
```

## Live Demo

The product is live at https://telex.blog.

## Discuss

- https://news.ycombinator.com/item?id=21325427
