import authServices from "@/services/auth";
import { defineStore } from "pinia";
import Cookie from "js-cookie";

export const useProductStore = defineStore("product", () => {
  const user = ref();
  const profile = ref([]);

  const getUser = computed(() => user.value);
  const getAuth = computed(() => isAuth.value);
  const getProfile = computed(() => profile.value);

  async function login(payload) {
    try {
      const res = await authServices.login({
        payload,
      });
      Cookie.set("auth._token", res.token, { expires: 1 });
      Cookie.set("auth._user", JSON.stringify(res), { expires: 1 });

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      Cookie.remove("auth._token");
      Cookie.remove("auth._user");
    } catch (error) {
      console.error(error);
    }
  }

  return {
    login,
    getProfile,
    getUser,
    getAuth,
    logout,
  };
});
