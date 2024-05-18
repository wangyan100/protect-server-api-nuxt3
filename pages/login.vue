<template>
    <div>
        <UiContainer as="section" class="max-w-4xl py-5">
            <div class="flex flex-row gap-2 w-64">
                <UiLabel class="m-2 " for="username">Username</UiLabel>
                <UiInput class="m-2" v-model="username" type="text" id="username" required />
            </div>
            <div class="flex flex-row gap-2 w-64">
                <UiLabel class="m-2" for="password">Password</UiLabel>
                <UiInput class="m-2 " v-model="password" :type="showPassword ? 'text' : 'password'" id="password"
                    required />
                <span @click="togglePasswordVisibility" class="mt-3">
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                </span>
            </div>
            <div class="flex gap-2 ">
                <UiButton @click="handleSignIn">Sign In</UiButton>
            </div>
            <div class="flex w-full items-center gap-2 m-4">
                <UiDivider />
            </div>

            <p v-if="errorMessage">{{ errorMessage }}</p>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS


const username = ref('');
const password = ref('');
const errorMessage = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
const router = useRouter();

async function handleSignIn() {
    const { loggedIn, user, session, clear, fetch } = useUserSession();
    if (!username.value || !password.value) {
        errorMessage.value = 'Both username and password are required';
        return;
    }
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

<style scoped></style>