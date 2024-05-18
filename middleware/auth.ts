export default defineNuxtRouteMiddleware((to, from) => {
    const { loggedIn, user, session, clear, fetch } = useUserSession();
    if (loggedIn.value === false) {
        return `/login?target=${to.path}`
    }
})