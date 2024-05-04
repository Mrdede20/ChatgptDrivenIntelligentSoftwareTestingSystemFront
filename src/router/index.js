import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',//去掉url后面的#
  routes: [
    {
      path: '/', //主菜单界面
      component: () => import('@/components/common/mainControl'),
      children: [
        {
          path: '/', //首页
          component: () => import('@/components/common/Slide')
        },
        {
        	path: '/BaseChatgpt_1', //错误程序
        	component: () => import('@/components/baseChatgpt/BaseChatgpt_1')
        },
        {
        	path: '/BaseChatgpt_2', //正确程序
        	component: () => import('@/components/baseChatgpt/BaseChatgpt_2')
        },
        {
        	path: '/BaseChatgpt_3', //BaseChatgpt
        	component: () => import('@/components/baseChatgpt/BaseChatgpt_3')
        },
				{
					path: '/Pynguin_1', //错误程序
					component: () => import('@/components/pynguin/Pynguin_1')
				},
        {
        	path: '/Pynguin_2', //正确程序
        	component: () => import('@/components/pynguin/Pynguin_2')
        },
        {
        	path: '/Pynguin_3', //Pynguin
        	component: () => import('@/components/pynguin/Pynguin_3')
        },
				{
					path: '/DfPrompting_1', //错误程序
					component: () => import('@/components/dfPrompting/DfPrompting_1')
				},
        {
        	path: '/DfPrompting_2', //正确程序
        	component: () => import('@/components/dfPrompting/DfPrompting_2')
        },
        {
        	path: '/DfPrompting_3', //程序意图
        	component: () => import('@/components/dfPrompting/DfPrompting_3')
        },
        {
        	path: '/DfPrompting_4', //程序意图
        	component: () => import('@/components/dfPrompting/DfPrompting_4')
        }
      ]
    }
  ]
})
