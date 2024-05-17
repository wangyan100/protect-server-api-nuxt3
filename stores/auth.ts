export const useAuthStore = defineStore("Auth", () => {
  const { loggedIn, user, session, clear, fetch } = useUserSession();

  console.log("#### useAuthStore is loaded, loggedIn-> ",loggedIn.value)
  async function signIn(username: string, password: string){
    await $fetch("/api/auth/login", {
      method: "POST",
      body: { username, password }
    });
    await fetch();
    console.log("#### useAuthStore  signIn is called, loggedIn-> ",loggedIn.value)
  };
 
  return { signIn, loggedIn, user, session, clear, fetch };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
