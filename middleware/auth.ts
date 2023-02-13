

export default defineNuxtRouteMiddleware((to, from) => {

    // get auth with cookies nuxt  
    const auth = useCookie('auth._token') || {}

    console.log(auth)

    // if auth is empty
    if (!auth.value) {
        // redirect to login
        return navigateTo('/login')
    }

    abortNavigation()
})