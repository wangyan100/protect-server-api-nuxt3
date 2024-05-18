<template>
    <div>
        <UiContainer as="section" class="max-w-4xl py-5">
            <div class="form-group">
                <label class="m-2" for="username">Username</label>
                <input class="m-2" v-model="username" type="text" id="username" required />
            </div>
            <div class="form-group">
                <label class="m-2" for="password">Password</label>
                <input class="m-2" v-model="password" type="password" id="password" required />
            </div>
            <button @click="handleSignIn">Sign In</button>

            <p v-if="errorMessage">{{ errorMessage }}</p>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

async function handleSignIn() {
    const { loggedIn, user, session, clear, fetch } = useUserSession();
    try {
        console.log('before signIn ,loggedIn ->', loggedIn.value)
        await useAuthStore().signIn(username.value, password.value);
        console.log('after signIn ,loggedIn ->', loggedIn.value)
        const target = router.currentRoute.value.query.target as string ?? '/'
        console.log('Signed in successfully, target->', target);
        await router.push(target)
    } catch (error: any) {
        errorMessage.value = error.message + ', try again!';
        console.error('error statusCode->', error.statusCode);
        console.log('after signIn ,loggedIn ->', loggedIn.value)
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>