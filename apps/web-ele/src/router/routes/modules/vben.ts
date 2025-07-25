import type { RouteRecordRaw } from 'vue-router';

import { VBEN_LOGO_URL } from '@vben/constants';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: VBEN_LOGO_URL,
      order: 9998,
      title: $t('services.title'),
    },
    name: 'Services',
    path: '/services',
    children: [
      {
        name: 'SalesAssistance',
        path: '/services/sales_assistance',
        component: () => import('#/views/services/sales_assistance.vue'),
        meta: {
          icon: 'lucide:messages-square',
          title: $t('services.salesAssistance.title'),
        },
      },
      {
        name: 'OperatorIntelligence',
        path: '/services/operator_intelligence',
        component: () => import('#/views/services/operator_intelligence.vue'),
        meta: {
          icon: 'lucide:server-cog',
          title: $t('services.operatorIntelligence.title'),
        },
      },
      {
        name: 'VoiceBot',
        path: '/services/voice_bot',
        component: () => import('#/views/services/voice_bot.vue'),
        meta: {
          icon: 'lucide:phone-call',
          title: $t('services.voiceBot.title'),
        },
      },
      {
        name: 'VirtualKOL',
        path: '/services/virtual_kol',
        component: () => import('#/views/services/virtual_kol.vue'),
        meta: {
          icon: 'lucide:users-round',
          title: $t('services.virtualKOL.title'),
        },
      },
    ],
  },
  {
    meta: {
      icon: 'lucide:blinds',
      order: 9998,
      title: $t('demos.test.title'),
    },
    name: 'TestPages',
    path: '/test',
    children: [
      {
        name: 'TestPage1',
        path: '/demos/test-page-1',
        component: () => import('#/views/demos/tests/test_page_1.vue'),
        meta: {
          icon: 'lucide:file-code',
          title: 'Test Page 1',
        },
      },
      {
        name: 'TestPage2',
        path: '/demos/test-page-2',
        component: () => import('#/views/demos/tests/test_page_2.vue'),
        meta: {
          icon: 'lucide:file-code-2',
          title: 'Test Page 2',
        },
      },
    ],
  },
  {
    name: 'VbenAbout',
    path: '/vben-admin/about',
    component: () => import('#/views/_core/about/index.vue'),
    meta: {
      icon: 'lucide:copyright',
      title: $t('demos.vben.about'),
      order: 9999,
    },
  },
];

export default routes;
