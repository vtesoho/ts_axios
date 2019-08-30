import {AxiosRequestConfig} from './types'
import xhr from './xhr';
import { buildURL } from './helpers/url';
import { transformRequest } from './helpers/data';
import { processHeader } from './helpers/headrs';
function axios(config:AxiosRequestConfig){
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void{
  config.url = transformURL(config)
  config.headers = transformHeader(config)
  config.data = transformRequestData(config)
  
}

function transformURL(config:AxiosRequestConfig): string{
  const {url,params} = config
  return buildURL(url,params)
}

function transformRequestData(config:AxiosRequestConfig): any{
  return transformRequest(config.data)
}

function transformHeader(config:AxiosRequestConfig): any{
  const {headers = {},data} = config
  return processHeader(headers,data)
}

export default axios