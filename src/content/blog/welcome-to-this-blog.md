---
title: 'Welcome Back!'
description: 'Welcome to my little corner of the internet'
publishedDate: '12/28/2023'
tags: ['astro', 'vercel']
---

Welcome to the latest incarnation of my personal blog. While I have maintained my own personal corner of the internet of several years, this is the first time I have built something bespoke. Previous builds have utilised themes from various frameworks, such as Hugo, but this time I wanted to have complete control and develop my own visual identity.

In 2023 there are a myriad of web frameworks one might choose when building a website. For this use case, the chosen framework should be:

- **Fast** - a statically generated blog should be blazing fast to provide a fantastic content-first User Experience.
- **Simple** - a simple framework will make it easy for me to make maintain my blog for several years to come with minimal effort.
- **React-based** - React is the JavaScript framework I have the most experience in, with a rich ecosystem of components I might wish to use (such as [shadcn/ui](https://ui.shadcn.com/)).
- **MDX-compatible** - a CMS would likely be overkill for this website and MDX provides more than enough power to craft rich content.

With these requirements in mind, there was only really one option - [Astro](https://astro.build/). With its Islands architecture, Astro provides statically generated pages that only ship JavaScript where needed. This makes a website like this, with minimal iteractivity or dynamic content, blazingly fast. Astro's ability to write almost pure HTML makes it simple to maintain. Astro is also compatible with React components and provides native support for Markdown and MDX. 

Next.js was a strong contender for this website, given my previous positive experience with it, however Astro was a more compelling choice due to the ability to ship no unnecessary JavaScript to the client. 

This website is hosted on [Vercel](https://vercel.com), due to its first class support for Astro via the [Astro Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/). Currently I only use this in `static` mode to leverage Vercel's Web Analytics.

Finally, I must properly acknowledge several website which have served as inspiration. I am an average designer (at best) and have drawn inspiration from:

- [Joe Bell](/joebell.co.uk)
- [Guillermo Rauch](https://rauchg.com/)
- Tailwind UI's [Spotlight](https://tailwindui.com/templates/spotlight) Template

I'm really happy with how this website has turned out and I plan to use it as a test bed for honing my web development skills over the coming year. 

Happy reading!