module.exports = [
    /*考勤地点*/
    {
        type: "get",
        url: "/attend/place/queryAll",
        json: "attendancePlace.json"
    }, {
        type: "post",
        url: "/attend/place/delete",
        json: "deleteAttendance.json"
    }, {
        type: "post",
        url: "/attend/place/batchDlete",
        json: "batchDeleteAttendance.json"
    }, {
        type: "post",
        url: "/attend/place/update",
        json: "updateAttendance.json"
    }, {
        type: "post",
        url: "/attend/place/insert",
        json: "addAttendance.json"
    }, {
        type: "get",
        url: "/attend/record/queryAll",
        json: "attendanceRecord.json"
    }, {
        type: "get",
        url: "/attend/record/delete",
        json: "deleteAttendance.json"
    }, {
        type: "post",
        url: "/attend/record/update",
        json: "updateAttendance.json"
    },
    /*考勤地点end*/
    /*考勤日报月报*/
    {
        type: 'post',
        url: '/attend/month/generate',
        json: ""
    }, {
        type: "get",
        url: "/attend/month/queryMonth",
        json: ""
    }, {
        type: 'post',
        url: '/attend/day/generate',
        json: ""
    }, {
        type: "get",
        url: "/attend/day/queryDay",
        json: ""
    }, {
        type: "get",
        url: "/dayCtrl/getAttendanceDaily",
        json: "attendanceDaily.json"
    }, {
        type: "get",
        url: "/monthCtrl/getAttendanceMonthly",
        json: "attendanceMonthly.json"
    }, {
        type: "get",
        url: "/monthCtrl/getMonthGenerate",
        json: "monthGenerate.json"
    }, {
        type: "get",
        url: "/corehr/bu/queryBu",
        json: "bizunit.json"
    }, {
        type: "get",
        url: "/companyCtrl/getCompany",
        json: "company.json"
    }, {
        type: "post",
        url: "/corehr/bu/saveBu",
        json: "bizunit.json"
    }, {
        type: "delete",
        url: "/corehr/bu/removeBu",
        json: "bizunit.json"
    }, {
        type: "get",
        url: "/corehr/bu/queryBuNoPaging",
        json: "buquery.json"
    },
    /* 班次 start*/
    {
        type: "get",
        url: "/attend/shift/queryAll",
        json: "shiftInit.json"
    }, {
        type: "post",
        url: "/attend/shift/update",
        json: "shiftUpdate.json"
    }, {
        type: "post",
        url: "/shift/queryAll",
        json: "shiftInit.json"
    }, {
        type: "get",
        url: "/corehr/org/queryOrg",
        json: "organization.json"
    }, {
        type: "delete",
        url: '/attend/shift/delete',
        json: "shiftDelete.json"
    }, {
        type: "post",
        url: "/attend/shift/insert",
        json: "shiftInsert.json"
    },
    /* 班次 end*/
    /* 假日 start*/
    {
        type: "post",
        url: "/holiday/insert",
        json: "holidayInsert.json"
    }, {
        type: "get",
        url: "/holiday/queryByYear",
        json: "holidayInit.json"
    }, {
        type: "delete",
        url: "/holiday/delete",
        json: "holidayDelete.json"
    }, {
        type: "post",
        url: "/holiday/update",
        json: "holidayUpdate.json"
    },
    /* 假日 end*/
    /* 人员 start*/
    {
        type: "get",
        url: "/corehr/staff/queryStaff",
        json: "queryStaff.json"
    }, {
        type: "get",
        url: "/corehr/dept/queryDeptRef",
        json: "queryDeptRef.json"
    }, {
        type: "post",
        url: "/corehr/staff/saveStaff",
        json: "saveStaff.json"
    }, {
        type: "get",
        url: "/corehr/staff/queryStaffList",
        json: "queryStaffList.json"
    }, {
        type: "post",
        url: "/corehr/org/saveStaff",
        json: "queryStaffList.json"
    },
    /* 人员 end*/
    /* 公司 start*/
    {
        type: "get",
        url: "/corehr/org/queryOrgRef",
        json: "organization.json"
    },
    /*
    {
        type:"get",
        url:"/corehr/dept/queryDept",
        json:""
    },
    {
        type:"post",
        url:"/corehr/dept/saveDept",
        json:""
    },
    {
        type:"delete",
        url:"/corehr/dept/deleteDept",
        json:""
    },*/
    {
        type: "get",
        url: "/corehr/bu/queryBuNoPaging",
        json: "buquery.json"
    },

    {
        type: "get",
        url: "/corehr/org/queryOrgRef?buId=1",
        json: "query.json"
    },
    /*{
      type:"get",
      url:"/corehr/org/queryOrgRef",
      json:""
    },*/
    {
        type: "post",
        url: "/corehr/org/saveOrg",
        json: "org.json"
    },
    /*{
      type:"get",
      url:"/corehr/org/queryOrgRef",
      json:""
    }*/
    {
        type: "delete",
        url: "/corehr/org/deleteOrg",
        json: "deleteorg.json"
    },

    /* 公司 end*/
    {
        type: "get",
        url: "/corehr/dept/queryDept",
        json: "development.json"
    }, {
        type: "post",
        url: "/corehr/dept/saveDept",
        json: "development.json"
    }, {
        type: "delete",
        url: "/corehr/dept/deleteDept",
        json: "development.json"
    }, {
        type: "get",
        url: "/corehr/staff/queryStaff",
        json: "development.json"
    }

    //  /* ssc begin*/
    , {
        type: "get",
        url: "/ssc/task/queryTodoTasks",
        json: ""
    }

    , {
        type: "get",
        url: "/ssc/task/queryHisTasks",
        json: "ssc_task_queryHisTasks.json"
    }
    , {
        type: "get",
        url: "/ssc/formSource/queryByCode",
        json: "ssc_formSource_queryByCode.json"
    }

    , {
        type: "get",
        url: "/ssc/task/queryTasksPool",
        json: ""
    }

    , {
        type: "get",
        url: "/ssc/task/queryOwnerProcess",
        json: ""
    }

    , {
        type: "post",
        url: "/ssc/task/completeWithComment",
        json: ""
    }

    , {
        type: "post",
        url: "/ssc/task/claimTask",
        json: ""
    }

    , {
        type: "post",
        url: "/ssc/task/unClaimTask",
        json: ""
    }

    , {
        type: "post",
        url: "/ssc/task/assignTask",
        json: ""
    }

    , {
        type: "post",
        url: "/ssc/task/withdrawTask",
        json: ""
    },
    //SSC process
    , {
        type: "get",
        url: "/ssc/process/queryProModels",
        json: ""
    }

    , {
        type: "get",
        url: "/ssc/process/queryProModelByModelID",
        json: ""
    }

    , {
        type: "post",
        url: "/ssc/process/saveProcessModel",
        json: ""
    }, {
        type: "delete",
        url: "/ssc/process/deleteProcessModel",
        json: ""
    }, {
        type: "post",
        url: "/ssc/process/deployProcessDefinition",
        json: ""
    }, {
        type: "get",
        url: "/ssc/process/queryHisVersionProcess",
        json: ""
    }, {
        type: "get",
        url: "/ssc/process/queryProcessList",
        json: ""
    }

    , {
        type: "delete",
        url: "/ssc/process/deleteProInstance",
        json: ""
    }, {
        type: "post",
        url: "/ssc/process/startProcessInstance",
        json: ""
    }, {
        type: "get",
        url: "/ssc/process/getProcessInstances",
        json: ""
    }

    , {
        type: "get",
        url: "/ssc/process/getHistoryProcessInstances",
        json: ""
    }, {
        type: "get",
        url: "/ssc/process/getProcessDiagram",
        json: ""
    },

    //insert
    {
        type: "post",
        url: "/ssc/category/insert",
        json: ""
    },
    //delete
    {
        type: "delete",
        url: "/ssc/category/delete",
        json: ""
    },
    //update
    {
        type: "post",
        url: "/ssc/category/update",
        json: ""
    },
    //query
    {
        type: "get",
        url: "/ssc/category/query",
        json: ""
    },
    //code check
    {
        type: "get",
        url: "/ssc/category/uniqueCodeCheck",
        json: ""
    },
    //name check
    {
        type: "get",
        url: "/ssc/category/uniqueNameCheck",
        json: ""
    },
    /* ssc end */
    /*
     职等查询
     */
    {
        type: "get",
        url: "/corehr/jobrank/queryList",
        json: ""
    },
    /**
     * 员工入职列表
     */
    {
        type: 'get',
        url: '/corehr/entry/loadPage',
        json: 'entryLoadPage.json'
    },
    /**
     * 获取当前用户
     */
    {
        type: 'get',
        url: '/corehr/entry/getuserinfo',
        json: 'currentUser.json'
    },
    /**
     * 月任务统计
     */
    {
        type: 'get',
        url: '/ssc/report/weekTaskCount',
        json: 'weekTaskCount.json'
    },
    /**
     * 年任务统计、工作总量统计
     */
    {
        type: 'get',
        url: '/ssc/report/monthTaskCount',
        json: 'monthTaskCount.json'
    },
    /**
     * 满意度评价
     */
    {
        type: 'get',
        url: '/ssc/qs/topicItemResult/scoreGraph',
        json: 'scoreGraph.json'
    },
    /**
     * 人才结构
     */
    {
        type: 'get',
        url: '/corehr/hrbp/home/querytalentstructure',
        json: 'querytalentstructure.json'
    },
    /**
     * 人才流动
     */
    {
        type: 'get',
        url: '/corehr/hrbp/home/querytalentflow',
        json: 'querytalentflow.json'
    }
]
