import { createStore } from "vuex";
import configure from "./configure";
import user from "./user";
import song from "./song";
import picture from "./picture";
import route from "./route";

export default createStore({
  modules: {
    configure,
    user,
    song,
    picture,
    route,
  },
});
