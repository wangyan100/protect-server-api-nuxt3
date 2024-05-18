<template>
  <div>
    <UiNavbar sticky>
      <UiContainer class="flex h-14 items-center justify-between">
        <UiButton @click="$router.push('/')" variant="outline" size="sm">
          Home
        </UiButton>
        <p class="text-lg font-semibold">Protect API</p>
        <div class="flex items-center gap-2">
          <UiButton @click="$colorMode.preference = $colorMode.value == 'dark' ? 'light' : 'dark'" variant="ghost"
            size="icon-sm">
            <Icon name="lucide:sun-medium" class="h-4 w-4" />
          </UiButton>
          <UiButton @click="$router.push('/test')" variant="outline" size="sm">
            Test
          </UiButton>
          <UiButton @click="navigateTo('/test2')" variant="outline" size="sm">
            Test2
          </UiButton>
          <UiButton v-if="!useAuthStore().loggedIn" @click="navigateToSignIn" variant="outline" size="sm">
            Sign in
          </UiButton>
          <UiButton v-if="useAuthStore().loggedIn" @click="useAuthStore().clear()" variant="outline" size="sm">
            Logout
          </UiButton>
        </div>
      </UiContainer>
    </UiNavbar>
    <slot />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()

const navigateToSignIn = () => {
  router.push('/login')
}

</script>
