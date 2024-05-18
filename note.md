
### notes 

#### calling stack by user click

- page/login.vue's handleSignin() -> stores/auth.ts signIn --> server/api/auth/login.post.ts 

- page/index.vue click loadData -> stores/users.ts loadData -> server/api/users/index.get.ts , this will be checkd by server middleware 
- page/test or page/test2 -> it will be checked by  route middleware

- server middleware (server/middleware/serverguard.ts)  to check if calling any backend API is allowed or not 
- route middleware (middlewares/auth.ts), to check if any frontend page nivigation is allowed or not 

#### useful nuxt function

setUserSession
requireUserSession
useUserSession

#### middleware 
there are two kinds of middleware, router middleware and server middleware 
the example (server/middleware/guard.ts) here is server middleware
to read about about this at  https://www.the-koi.com/projects/nuxt3-middlewares-everything-you-need-to-know/

