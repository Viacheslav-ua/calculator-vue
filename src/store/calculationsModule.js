export const calculationsModule = {
  state: () => ({
    calculations: "0",
  }),
  mutations: {
    inputValue(state, value) {
      if (state.calculations === "0") {
        state.calculations = "";
      }
      state.calculations += value;
    },

    operations(state, value) {
      switch (value) {
        case "CE":
          if (state.calculations.length === 1) {
            state.calculations = "0";
            return;
          }
          state.calculations = state.calculations.substring(
            0,
            state.calculations.length - 1
          );
          break;

        case "C":
          state.calculations = "0";
          break;

        case "=":
          state.calculations = eval(state.calculations);
          break;
      }
    },
  },
};
