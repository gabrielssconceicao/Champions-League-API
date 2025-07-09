import { HttpResponse } from '../helper/http-response';

export const ok = async (data: any): Promise<HttpResponse>=>{
  return {
    body: data,
    statusCode: 200
  }
}

export const noContent = async (): Promise<HttpResponse>=>{
  return {
    body: null,
    statusCode: 204
  }
}