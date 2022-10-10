export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/api/')) {
    return new Response(`API request for ${event.url.pathname} is OK!`);
  }
  return await resolve(event);
}