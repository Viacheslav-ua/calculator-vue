import { createStore } from "vuex";
import { calculationsModule } from "./calculationsModule";

export default createStore({
  modules: {
    calc: calculationsModule,
  },
});
