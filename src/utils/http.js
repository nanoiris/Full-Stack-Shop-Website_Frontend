const jsonContentType = { "Content-type": "application/json;charset=UTF-8" };
export const request = async (method,url,data) => {
  let content = {method: method,headers:jsonContentType};
  if(data)
    content.body = JSON.stringify(data);
  
  let token = sessionStorage.getItem("token");
  if(token)
    content.headers['Authorization'] = token; 
 
  const response = await fetch(url, content);
  const json = await response.json();
  if(json.success)
       return json.content;
  throw new Error(json.message);
};

export const get = async (url,data) => {
    return request('get',url,data);
};

export const post = async (url,data) => {
    return request('post',url,data);
};

export const put = async (url,data) => {
    return request('put',url,data);
};

export const patch = async (url,data) => {
    return request('patch',url,data);
};

export const remove = async (url,data) => {
    return request('delete',url,data);
};

const http = {
    get : get,
    post : post,
    put: put,
    patch:patch,
    delete:remove,
    request:request
}

export default http;