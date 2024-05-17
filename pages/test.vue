<template>
    <div>
        <UiContainer as="section" class="max-w-4xl py-5">
            <h1> I am test page</h1>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: async (to) => {
        console.log(to)
        const { loggedIn, user, session, clear, fetch } = useUserSession();
        if (loggedIn.value === false) {
            return `/login?target=${to.path}`
        }
    },
})
</script>