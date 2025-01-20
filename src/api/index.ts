import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: 'http://localhost:5173/mock/table.json',
        method: 'get'
    });
};

export const fetchUserData = () => {
    return request({
        url: 'http://localhost:5173/mock/user.json',
        method: 'get'
    });
};

export const fetchRoleData = () => {
    return request({
        url: 'http://localhost:5173/mock/role.json',
        method: 'get'
    });
};


export const loginUser = (data: { username: string; password: string }) => {
    return request({
        url: '/auth/login',  
        method: 'post',
        data: data  
    });
};

export const registerUser = (data: { username: string; email: string; password: string }) => {
    return request({
        url: '/auth/register',   
        method: 'post',
        data: data,
    });
};
export const generateSQL = (query: string) => {
    return request({
        url: '/sql/generator',  // 后端接口
        method: 'post',
        data: { query }   
    });
};
export const validateSQL = (data: { query_description: string; generated_sql: string }) => {
    return request({
        url: '/sql/validator',  // 后端接口
        method: 'post',
        data: { data }   
    });
};
//额，这个是src/api/index.ts,在这里进行接口管理，方便复用，以前每个页面都写请求函数，是有点重用率低