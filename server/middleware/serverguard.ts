export default defineEventHandler(async (event) => {
  // get the url being called
  const url = getRequestURL(event);
  // get the pathname from the url
  const { pathname } = new URL(url);
  console.log("pathname->", pathname)
  // create a list of endpoints that we want to protect
  const protectedRoutes = ["/api/users"];
  // check if the pathname is in the list of protected routes
  for (let i = 0; i < protectedRoutes.length; i++) {
    const r = protectedRoutes[i];
    if (pathname.startsWith(r)) {

      await requireUserSession(event);

      // if any error -- not allowed call, just throw error, dont do router nivivagation as frontend !
      //  const target = encodeURIComponent(event.req.url);
      //   event.res.writeHead(302, { Location: `/login?target=${target}` });
      //  event.res.end();

    }
  }
});
