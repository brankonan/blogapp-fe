import HttpService from "./Http.service";

export default class PostService extends HttpService {
  static async getAll(page = 1) {
    console.log("a");
    const response = await this.request({
      method: "GET",
      url: "/posts",
      params: {
        perPage: 8,
        page,
      },
    });
    return {
      data: response.data,
      metadata: response.metadata,
    };
  }
  static async getSingle(id) {
    const response = await this.request({
      method: "GET",
      url: `/posts/${id}`,
    });
    return response?.data;
  }
}
