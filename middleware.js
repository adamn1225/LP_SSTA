import { next } from '@vercel/edge';

export default function middleware() {
  return next({
    headers: { 'x-from-middleware': 'true' },
  });
}
 
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 
async function getProduct() {
  const res = await fetch('https://api.vercel.com/v1/edge-config/ecfg_lnmmefr6mzlxw3ppyuerwnaxybir/items?teamId=prj_2WvmpcIwsCOPTEuqoCoC3lkUTbeS');
  await wait(10000);
  return res.json();
}
 
export default function middleware(request, context) {
  context.waitUntil(getProduct().then((json) => console.log({ json })));
 
  return Response.json(
    { hello: 'world' },
    {
      status: 200,
      headers: { 'content-type': 'application/json' },
    },
  );
}