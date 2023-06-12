import {NavName, RouterName} from "@/enums";

export default {
    state: {
        routerpath: [
            // {
            //     name: NavName.MainHome,
            //     path: RouterName.MainHome,
            // },
            // {
            //     name: NavName.English,
            //     path: RouterName.English,
            // },
            // {
            //     name: NavName.News,
            //     path: RouterName.News,
            // },
        ],
    },
    getters: {
        routerpath: (state) => state.routerpath,
    },
    mutations: {
        setRouterpath: (state, routerpath) => {
            state.routerpath = routerpath;
        },
    },
};
