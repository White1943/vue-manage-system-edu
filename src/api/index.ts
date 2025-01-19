import request from '../utils/request';

export const fetchData = () => {
    return request({
        url: './mock/table.json',
        method: 'get'
    });
};

export const fetchUserData = () => {
    return request({
        url: './mock/user.json',
        method: 'get'
    });
};

export const fetchRoleData = () => {
    return request({
        url: './mock/role.json',
        method: 'get'
    });
};

//额，这个是src/api/index.ts,在这里进行接口管理，方便复用，以前每个页面都写请求函数，是有点重用率低

export const loginUser = (data: { username: string; password: string }) => {
    return request({
        url: '/auth/login',  
        method: 'post',
        data: data  
    });
};

export const registerUser = (data: { username: string; email: string; password: string }) => {
    return request({
        url: '/auth/register',  // 后端注册接口
        method: 'post',
        data: data,
    });
};