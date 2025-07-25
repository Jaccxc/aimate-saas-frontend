import { baseRequestClient, requestClient } from '#/api/request';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password?: string;
    email?: string;
  }

  /** 注册接口参数 */
  export interface RegisterParams {
    email: string;
    password: string;
    username: string;
    resellerCode?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    access_token: string;
  }

  /** API 原始返回值 */
  export interface LoginApiResponse {
    token: string;
  }

  /** 注册接口返回值 */
  export interface RegisterResult {
    token?: string;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}

/**
 * 登录
 */
export async function loginApi(data: AuthApi.LoginParams) {
  const response = await requestClient.post<AuthApi.LoginApiResponse>(
    '/auth/login',
    data,
  );
  return {
    access_token: response.token,
  };
}

/**
 * 注册
 */
export async function registerApi(data: AuthApi.RegisterParams) {
  const result = await requestClient.post<AuthApi.RegisterResult>(
    '/auth/register',
    data,
  );
  return result;
}

/**
 * 刷新accessToken
 */
export async function refreshTokenApi() {
  return baseRequestClient.post<AuthApi.RefreshTokenResult>('/auth/refresh', {
    withCredentials: true,
  });
}

/**
 * 退出登录
 */
export async function logoutApi() {
  return baseRequestClient.post('/auth/logout', {
    withCredentials: true,
  });
}

/**
 * 获取用户权限码
 */
export async function getAccessCodesApi() {
  return requestClient.get<string[]>('/auth/codes');
}
