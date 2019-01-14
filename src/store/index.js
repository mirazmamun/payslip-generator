import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
        fileChanged: false,
        fileData: false
	},
	mutations: {
		fileHasChanged(state, fileData) {
            state.fileChanged = true;
            state.fileData = fileData;
		}
	},
	actions: {
	}
});