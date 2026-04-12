import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, url, image, schema }) {
  return (
    <Helmet>
      { /* Standard metadata tags */ }
      <title>{title}</title>
      <meta name='description' content={description} />
      { /* End standard metadata tags */ }

      { /* Facebook tags */ }
      {type && <meta property='og:type' content={type} />}
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
      {url && <meta property='og:url' content={url} />}
      {image && <meta property='og:image' content={image} />}
      { /* End Facebook tags */ }

      { /* Twitter tags */ }
      {name && <meta name='twitter:creator' content={name} />}
      <meta name='twitter:card' content={'summary_large_image'} />
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {image && <meta name='twitter:image' content={image} />}
      { /* End Twitter tags */ }
      
      { /* Structured data */ }
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
