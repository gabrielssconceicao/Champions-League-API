import { HttpResponse } from '../model/http-response-model'

export const ok = async (data: any): Promise<HttpResponse>=>{
  return {
    body: data,
    statusCode: 200
  }
}

export const created = async (): Promise<HttpResponse>=>{
  return {
    body: {
      message: 'Player created successfully',
    },
    statusCode: 201
  }
}

export const noContent = async (): Promise<HttpResponse>=>{
  return {
    body: null,
    statusCode: 204
  }
}

export const badRequest = async (): Promise<HttpResponse>=>{
  return {
    body: null,
    statusCode: 400
  }
}