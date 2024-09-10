import request from '/@/utils/request';


export function getSysInfo() {
    return request({
        url: '/monitor/server',
        method: 'get'
    })
}
