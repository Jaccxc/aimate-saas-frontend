/**
 * @zh_CN 登录页面 url 地址
 */
export const LOGIN_PATH = '/auth/login';

export interface LanguageOption {
  label: string;
  value: 'en-US' | 'zh-CN' | 'zh-TW';
}

/**
 * Supported languages
 */
export const SUPPORT_LANGUAGES: LanguageOption[] = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: '繁體中文',
    value: 'zh-TW',
  },
  {
    label: '简体中文',
    value: 'zh-CN',
  },
];
