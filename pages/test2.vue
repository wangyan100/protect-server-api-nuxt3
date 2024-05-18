<template>
    <div>
        <UiContainer as="section" class="max-w-4xl py-5">
            <h1> I am test2 page using router middleware from middleware/auth </h1>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ["auth"]
})
</script>