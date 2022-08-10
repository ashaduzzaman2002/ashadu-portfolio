import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'k1fuphvy',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skBEvLQAMHiblG0w9k2qmIKGh36kLT7dmZUwT4wdL8e5CgNOPhwkcHhGKXk5l5QbHnnYhtrxwAmwTczxJPGyZLNM5mMmlKOYnz1OgOo5OGJhb0feH3FE7WAQ82diDHUwafrLeyLO4cPwRDqhDrS7UOQmMP2Tz3FuvfwFFxzsgPkkADWlgb27',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
