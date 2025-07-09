import { HttpResponse } from '../model/http-response-model'

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