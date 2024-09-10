import request from '/@/utils/request';

export function getUserList(query:Object) {
    return request({
        url: '/user/list',
        method: 'get',
        params:query
    })
}

export function getDeptTree() {
    return request({
        url: '/dept/treeSelect',
        method: 'get'
    })
}

export function getParams() {
    return request({
        url: '/user/params',
        method: 'get'
    })
}

export function getEditUser(id:number) {
    return request({
        url: '/user/getEdit',
        method: 'get',
        params:{id}
    })
}

export function addUser(data:object) {
    return request({
        url: '/user/add',
        method: 'post',
        data:data
    })
}


export function editUser(data:object) {
    return request({
        url: '/user/edit',
        method: 'put',
        data:data
    })
}

export function resetUserPwd(userId:number, password:string) {
    return request({
        url: '/user/resetPwd',
        method: 'put',
        data:{userId,password}
    })
}

export function changeUserStatus(userId:number, status:number) {
    return request({
        url: '/user/setStatus',
        method: 'put',
        data:{userId,status}
    })
}


export function deleteUser(ids:number[]) {
    return request({
        url: '/user/delete',
        method: 'delete',
        data:{ids}
    })
}


