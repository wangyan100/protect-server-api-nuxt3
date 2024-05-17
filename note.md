
### notes 

#### calling stack by user click

- page/login.vue's handleSignin() -> stores/auth.ts signIn --> server/api/auth/login.post.ts 

- middleware (server/middleware/guard.ts) guard to check any URLs need to projection or not 

#### useful nuxt function

setUserSession
requireUserSession
useUserSession

#### middleware 
there are two kinds of middleware, router middleware and server middleware 
the example (server/middleware/guard.ts) here is server middleware
to read about about this at  https://www.the-koi.com/projects/nuxt3-middlewares-everything-you-need-to-know/

