import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from "@/constants";

export default {
  namespaced: true,
  state: () => ({
    themeType: THEME_LIGHT,
  }),
  mutations: {
    changeThemeType(state, newTheme) {
      state.themeType = newTheme;
    },
  },
};
