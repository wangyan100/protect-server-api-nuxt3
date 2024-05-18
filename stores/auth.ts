export const useAuthStore = defineStore("Auth", () => {
  const { loggedIn, user, session, clear, fetch } = useUserSession();

  console.log("#### useAuthStore is loaded, loggedIn-> ", loggedIn.value);

  async function signIn(username: string, password: string) {
    try {
      await $fetch("/api/auth/login", {
        method: "POST",
        body: { username, password }
      });
      await fetch();
      console.log("#### useAuthStore signIn is called, loggedIn-> ", loggedIn.value);
    } catch (error: any) {
      console.error("#### useAuthStore signIn error-> ", error);
      // Throw a 401 error
      const authError = new Error("Unauthorized") as any;
      authError.name = "UnauthorizedError";
      authError.statusCode = 401;
      throw authError;
    }
  };

  return { signIn, loggedIn, user, session, clear, fetch };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
