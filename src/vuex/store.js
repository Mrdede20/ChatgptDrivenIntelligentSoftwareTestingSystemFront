import VUE from 'vue'
import VUEX from 'vuex'

VUE.use(VUEX)

const state = {
  isPractice: false, //练习模式标志
  flag: false, //菜单栏左右滑动标志
  userInfo: null,
  elmenuitemischoose:[true,false,false,false],
  currentelmenuitem:0,
  menu: [
	{
	  index: '1',
	  title: 'Pynguin',
    icon: 'el-icon-user',
    index: '/Pynguin'
	},
  {
    index: '2',
    title: 'BaseChatgpt',
    icon: 'el-icon-box',
    index: '/BaseChatgpt'
  },
  {
    index: '3',
    title: 'DfPrompting',
    icon: 'el-icon-money',
    index: '/DfPrompting'
  },
  ],
}
const mutations = {

  practice(state,status) {
    state.isPractice = status
  },
  toggle(state) {
    state.flag = !state.flag
  },
  changeUserInfo(state,info) {
    state.userInfo = info
  },
  SET_MENU_ITEM(state, index) {
    if (state.currentelmenuitem !== null) {
      VUE.set(state.elmenuitemischoose, state.currentelmenuitem, false); // 更改为使用 Vue.set 以确保响应性
    }
    VUE.set(state.elmenuitemischoose, index, true);
    state.currentelmenuitem = index;
  }
}
const getters = {

}
const actions = {
  getUserInfo(context,info) {
    context.commit('changeUserInfo',info)
  },
  getPractice(context,status) {
    context.commit('practice',status)
  },
  handleTitle({ commit }, index) {
    commit('SET_MENU_ITEM', index);
  }
}
export default new VUEX.Store({
  state,
  mutations,
  getters,
  actions
})
