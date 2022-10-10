export async function GET({params, url}) {
  return new Response(`API request for ${params.rest} is OK!`);
}
