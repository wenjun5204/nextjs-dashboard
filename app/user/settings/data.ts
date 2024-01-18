import request from '@/lib/request';

/*
 * @Author: liuwenjun05 liuwenjun05@meituan.com
 * @Date: 2024-01-17 15:10:01
 * @LastEditors: liuwenjun05
 * @Description: file content
 */
const URL = {
  getOnlinePlan:
    'https://fsd.sankuai.com/api/qa/v1/onlinePlan/getOnlinePlanList',
  getEct:
    'https://ect.sankuai.com/api/provider/delivery/getOnlineProgramCheckData',
};

const API = {
  getCityList: (params: any): Promise<any> =>
    request.get(URL.getOnlinePlan, { ...params }),
  getEct: (params: any) => request.get(URL.getEct, { ...params }),
};

export default API;

export const oldData = [
  {
    id: 46169,
    name: '【new】【test】-20240115-上线计划',
    rdDepartment: '159803',
    qaDepartment: null,
    dutyQa: 'weichunyan',
    dutyRd: null,
    planType: 0,
    processType: 1,
    status: 20,
    createBy: 'weichunyan',
    updateBy: null,
    createTime: 1705308993000,
    updateTime: null,
    delFlag: 0,
    projectOnlineTime: 1705320000000,
    isStopAddProject: 0,
    startBuildStageTime: null,
    endBuildStageTime: null,
    source: 0,
    onlineProgramId: 103265,
    bgOrgId: 103100,
    createSystemSource: 0,
    bizId: null,
    jointOnlineId: null,
    onlineType: 0,
    canDelivery: false,
    isGray: true,
    jobNum: 0,
  },
];
