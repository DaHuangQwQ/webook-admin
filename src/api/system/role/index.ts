import request from '/@/utils/request';

export function getRoleList(query:Object) {
    return request({
        url: '/role/list',
        method: 'get',
        params:query
    })
}

export function getRoleParams() {
    return request({
        url: '/role/getParams',
        method: 'get'
    })
}

export function addRole(data:object) {
    return request({
        url: '/role/add',
        method: 'post',
        data:data
    })
}

export function getRole(id:number) {
    return request({
        url: '/role/get',
        method: 'get',
        params:{id}
    })
}


export function editRole(data:object) {
    return request({
        url: '/role/edit',
        method: 'put',
        data:data
    })
}


export function deleteRole(id:number) {
    return request({
        url: '/role/delete',
        method: 'delete',
        data:{ids:[id]}
    })
}

export function dataScope(data:any) {
    return request({
        url: '/role/dataScope',
        method: 'put',
        data:data
    })
}


// 根据角色ID查询部门树结构
export function roleDeptTreeSelect(roleId:number) {
    return request({
        url: '/role/deptTreeSelect',
        method: 'get',
        params:{roleId}
    })
}


