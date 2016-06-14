define(function(require, module, exports){
    return [
        // home
        {
            "catogory": "pages/home",
            "data": [
                {
                    url: "nav",
                    name: "首页"
                }
                ]
        },
        // org
        {
            "catogory": "pages/org",
            "data": [
                {
                    url: "first",
                    name: "一级页面"
                },{
                    url: "setting",
                    name: "基础设置"
                },{
                    url: "location",
                    name: "地点"
                },{
                    url: "corp",
                    name: "合同主体"
                },{
                    url: "organization",
                    name: "组织机构"
                },{
                    url: "grade-graph",
                    name: "职级图谱"
                },{
                    url: "job-graph",
                    name: "职务图谱"
                },{
                    url: "job-type",
                    name: "职务类别"
                },{
                    url: "grade",
                    name: "职级"
                },{
                    url: "job-rank",
                    name: "职等"
                },{
                    url: "job",
                    name: "职务"
                },{
                    url: "position",
                    name: "职位"
                }
            ]
        },

        // staff
        {
            "catogory": "pages/staff",
            "data": [
                {
                    url: "first",
                    name: "一级页面"
                },{
                    url: "setting",
                    name: "基础设置"
                },{
                    url: "person-class",
                    name: "人员类别"
                },{
                    url: "post-state",
                    name:'在岗状态'
                },{
                    url:'change-type',
                    name:'变动类型'
                },{
                    url:'change-reason',
                    name:'变动原因'
                },{
                    url: "entry",
                    name: "员工入职"
                },{
                    url: "dynamic",
                    name: "员工动态"
                },{
                    url: "handle-entry",
                    name: "入职办理"
                },{
                    url: "staff-info",
                    name: "员工信息"
                },{
                    url: "break",
                    name: "员工离职"
                },{
                    url: "break-formalities",
                    name: "离职办理"
                },{
                    url: "staff-card",
                    name: "员工卡片"
                }
            ]
        },

        // leave
        {
            "catogory": "pages/leave",
            "data": [
                {
                    url: "first",
                    name: "一级页面"
                },{
                    url: "setting",
                    name: "基础设置"
                },{
                    url: "shift",
                    name: "班次定义"
                },{
                    url: "holiday",
                    name: "假日定义"
                },{
                    url: "place",
                    name: "考勤地点"
                },{
                    url: "staff-leave",
                    name: "员工休假"
                },{
                    url: "attend-staffs",
                    name: "考勤档案"
                },{
                    url: "daily",
                    name: "考勤日报"
                },{
                    url: "monthly",
                    name: "考勤月报"
                }
            ]
        },

        // ssc
        {
            "catogory": "pages/ssc",
            "data": [
                {
                    url: "approve",
                    name: "单据审批"
                },{
                    url: "category",
                    name: "服务目录"
                },{
                    url: "process",
                    name: "流程模型"
                },{
                    url: "instance",
                    name: "流程中心"
                },{
                    url: "workbench",
                    name: "SSC工作台"
                },{
                    url:"proof",
                    name:"开具证明"
                }
            ]
        },

        // config
        {
            "catogory": "pages/config",
            "data": [
                {
                    url: "defdoc",
                    name: "自定义档案"
                }
            ]
        },

        // past
        {
            "catogory": "pages/past",
            "data": [
                {
                    url: "biz-group",
                    name: "业务群"
                },{
                    url: "orgs",
                    name: "旧版组织"
                },{
                    url: "staff",
                    name: "员工档案"
                },{
                    url: "record",
                    name: "考勤记录"
                },{
                    url: "task",
                    name: "任务中心"
                },{
                    url: "graph",
                    name: "旧版图谱"
                }
            ]
        },

        // widget
        {
            "catogory": "widget/HROP",
            "data": [
                {
                    url: "panel",
                    name: "HROP-入口"
                },{
                    url: "chart-month",
                    name: "HROP组员-图表-月任务统计"
                },{
                    url: "chart-year",
                    name: "HROP组员-图表-年任务统计"
                },{
                    url: "list-todo",
                    name: "HROP组员-列表-待办事项"
                },{
                    url: "list-claim",
                    name: "HROP组员-列表-待认领"
                },{
                    url: "list-hrophome-todo",
                    name: "HROP组长-列表-待办事项"
                },{
                    url: "list-hrophome-claim",
                    name: "HROP组长-列表-待认领"
                },{
                    url: "chart-all",
                    name: "HROP组长-图表-工作总量统计"
                },{
                    url: "chart-sat",
                    name: "HROP组长-图表-满意度评价"
                }
            ]
        },
        {
            "catogory": "widget/HRBP",
            "data": [
                {
                    url: "panel",
                    name: "HRBP-入口"
                },{
                    url: "chart-str",
                    name: "HRBP-图表-人才结构"
                },{
                    url: "chart-flow",
                    name: "HRBP-图表-人才流动"
                },{
                    url: "list-hrbphome-dynamic",
                    name: "HRBP-列表-员工动态"
                },{
                    url: "list-hrbphome-todo",
                    name: "HRBP-列表-待办事项"
                }
            ]
        }
    ]
})
