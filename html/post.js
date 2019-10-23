const renderArticle = (data) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>${data.title} ${data.name ? 'by ' + data.name : ''}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.1.2/tailwind.min.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/telexblog/image/upload/v1571647478/apple-touch-icon_bh2pqv.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/telexblog/image/upload/v1571647478/favicon-32x32_dvfdxr.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://res.cloudinary.com/telexblog/image/upload/v1571647478/favicon-16x16_nkbbui.png"/>
        <link rel="manifest" href="https://res.cloudinary.com/telexblog/raw/upload/v1571647646/site_mqsyoe.webmanifest"/>
        <link rel="mask-icon" href="https://res.cloudinary.com/telexblog/image/upload/v1571647477/safari-pinned-tab_nyegt7.svg" color="#000000"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:title" content="${data.title} ${data.name ? 'by ' + data.name : ''}" itemProp="name"/>
        <meta property="og:type" content="article"/>
        <meta property="og:url" content="https://telex.blog/p/${data.key}"/>
        <meta property="og:image" content="https://res.cloudinary.com/telexblog/image/upload/v1571647873/og-image-telex_omqu8a.png"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content="${data.title} ${data.name ? 'by ' + data.name : ''}"/>
        <meta property="twitter:image" content="https://res.cloudinary.com/telexblog/image/upload/v1571647873/og-image-telex_omqu8a.png"/>
        <link rel="canonical" href="https://telex.blog/p/${data.key}"/>
        <style type="text/css">
          h1, h2, h3, h4, h5, h6{
            font-weight: bold;
          }
          h1{
            font-size: 1.875rem;
          }
          h2{
            font-size: 1.5rem;
          }
          h3{
            font-size: 1.25rem;
          }
          h4{
            font-size: 1.125rem;
          }
          h5{
            font-size: 1.125rem;
            font-weight: normal;
          }
          h6{
            font-size: 1.125rem;
            font-weight: normal;
          }
          a{
            color: #1976d2;
          }
          blockquote{
            display: block;
            padding-left: 20px;
            font-style: italic;
            border-left: 1px solid #b0bec5;
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: #455a64;
            font-size: 105%;
          }
        </style>
      </head>
      <body>
        <div class="xl:w-2/3 lg:w-full md:w-full sm:w-full px-4 relative flex flex-col h-screen m-auto py-20">
          <h1 class="text-3xl mb-2 font-bold">${data.title}</h1>
          <div class="text-gray-500 mb-10"><p>${data.name ? 'By ' + data.name + ' · ' : ''} ${new Date(data.dateAdded).toLocaleString()}</p></div>
          ${data.content}
        </div>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-150528501-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-150528501-1');
        </script>
      </body>
    </html>
    `
};

module.exports = renderArticle;
