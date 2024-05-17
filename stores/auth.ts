export const useAuthStore = defineStore("Auth", () => {
  const { loggedIn, user, session, clear, fetch } = useUserSession();

  async function signIn(username: string, password: string){
    await $fetch("/api/auth/login", {
      method: "POST",
      body: { username, password }
    });
    await fetch();
  };
  return { signIn, loggedIn, user, session, clear, fetch };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
