import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

export const ROUTERS = [
  {
    path: '/introduce',
    name: 'introduce',
    meta: {
      title: '介绍'
    },
    children: [
      {
        path: '/introduce/explain',
        name: 'explain',
        component: () => import('../view/introduce/explain/index.md'),
        meta: {
          title: '开发说明'
        }
      }
    ]
  },
  {
    path: '/reg',
    name: 'reg',
    meta: {
      title: '正则表达式'
    },
    children: [
      {
        path: '/reg/phone',
        name: 'phone',
        component: () => import('../view/reg/phone/index.md'),
        meta: {
          title: '手机号'
        }
      },
      {
        path: '/reg/special-char',
        name: 'special-char',
        component: () => import('../view/reg/special-char/index.md'),
        meta: {
          title: '特殊字符'
        }
      }
    ]
  },
  {
    path: '/validator',
    name: 'validator',
    meta: {
      title: '表单 Validator'
    },
    children: [
      {
        path: '/validator/password-validator',
        name: 'password-validator',
        component: () => import('../view/validator/password-validator/index.md'),
        meta: {
          title: '密码校验'
        }
      }
    ]
  }
];

export const REDIRECT = {
  path: '/:pathMatch(.*)',
  redirect: ROUTERS[0].children[0].path
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...Object.values(ROUTERS).reduce((pre, cur) => {
      pre.push(...cur.children);
      return pre;
    }, []),
    REDIRECT
  ],
  scrollBehavior() {
    document.getElementById('container').scrollTop = 0;
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
