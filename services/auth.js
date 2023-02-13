import api from "@/utils/api.js";

class AuthServices {
  async login({ payload }) {
    const res = await api.doPost(`auth/login`, payload);
    return res;
  }

  async profile() {
    const res = await api.doGet("v1/profile");
    return res;
  }

  async logout() {
    const res = await api.doPost(`v1/logout`);

    return res;
  }
}

export default new AuthServices();
