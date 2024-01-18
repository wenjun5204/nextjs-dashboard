/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-17 15:22:53
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
const request = {
  get: async (url: string, params: Record<string, string> = {}) => {
    try {
      // 将查询参数拼接成URL字符串（如果存在的话）
      let queryString = Object.keys(params)
        .map((key) => `${key}=${encodeURIComponent(params[key])}`)
        .join('&');
      if (Object.keys(params).length > 0) {
        url += '?' + queryString;
      }

      const response = await fetch(url);

      // 检查响应状态
      if (!response.ok) {
        throw new Error(`请求错误，错误码! status: ${response.status}`);
      }

      // 返回解析后的JSON数据
      return response.json();
    } catch (error) {
      console.error('Fetch GET request failed:', error);
      throw error; // 可以选择重新抛出错误以便在调用处处理
    }
  },
  post: async (url: string, data = {}, options = {}) => {
    try {
      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 默认发送JSON数据
        },
        body: JSON.stringify(data),
        ...options, // 允许传入额外配置项覆盖默认值
      };

      // 如果数据是FormData类型，则使用FormData的默认content-type
      if (data instanceof FormData) {
        init.headers['Content-Type'] = 'multipart/form-data';
        init.body = data;
      }

      const response = await fetch(url, init);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      console.error('Fetch POST request failed:', error);
      throw error;
    }
  },
};

export default request;
