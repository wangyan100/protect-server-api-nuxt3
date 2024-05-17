<template>
    <div>
        <UiContainer as="section" class="max-w-4xl py-5">
            <form @submit.prevent="login">
                <div class="form-group">
                    <label class="m-2" for="username">Username</label>
                    <input class="m-2" v-model="username" type="text" id="username" required />
                </div>
                <div class="form-group">
                    <label class="m-2" for="password">Password</label>
                    <input class="m-2" v-model="password" type="password" id="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
    try {
        useAuthStore().signIn(username.value, password.value)
        // Handle successful login, e.g., navigate to another page
        console.log('Login successful:');
        const target = router.currentRoute.value.query.target as string ?? '/'
        await router.push(target)
        // Change to your desired route
    } catch (error) {
        console.error('Login failed:', error);
        router.push('/error');
        // Handle login failure, e.g., show an error message
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>