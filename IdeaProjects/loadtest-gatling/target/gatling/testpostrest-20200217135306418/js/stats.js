var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "307",
        "ko": "193"
    },
    "minResponseTime": {
        "total": "17751",
        "ok": "17751",
        "ko": "60264"
    },
    "maxResponseTime": {
        "total": "61169",
        "ok": "58718",
        "ko": "61169"
    },
    "meanResponseTime": {
        "total": "45969",
        "ok": "36662",
        "ko": "60773"
    },
    "standardDeviation": {
        "total": "14788",
        "ok": "11478",
        "ko": "235"
    },
    "percentiles1": {
        "total": "49291",
        "ok": "36585",
        "ko": "60795"
    },
    "percentiles2": {
        "total": "60631",
        "ok": "46832",
        "ko": "60966"
    },
    "percentiles3": {
        "total": "61076",
        "ok": "54904",
        "ko": "61124"
    },
    "percentiles4": {
        "total": "61145",
        "ok": "55548",
        "ko": "61163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 307,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 193,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.065",
        "ok": "4.952",
        "ko": "3.113"
    }
},
contents: {
"req_postrequest-a5ae5": {
        type: "REQUEST",
        name: "PostRequest",
path: "PostRequest",
pathFormatted: "req_postrequest-a5ae5",
stats: {
    "name": "PostRequest",
    "numberOfRequests": {
        "total": "500",
        "ok": "307",
        "ko": "193"
    },
    "minResponseTime": {
        "total": "17751",
        "ok": "17751",
        "ko": "60264"
    },
    "maxResponseTime": {
        "total": "61169",
        "ok": "58718",
        "ko": "61169"
    },
    "meanResponseTime": {
        "total": "45969",
        "ok": "36662",
        "ko": "60773"
    },
    "standardDeviation": {
        "total": "14788",
        "ok": "11478",
        "ko": "235"
    },
    "percentiles1": {
        "total": "49291",
        "ok": "36585",
        "ko": "60795"
    },
    "percentiles2": {
        "total": "60631",
        "ok": "46832",
        "ko": "60966"
    },
    "percentiles3": {
        "total": "61076",
        "ok": "54904",
        "ko": "61124"
    },
    "percentiles4": {
        "total": "61145",
        "ok": "55548",
        "ko": "61163"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 307,
    "percentage": 61
},
    "group4": {
    "name": "failed",
    "count": 193,
    "percentage": 39
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.065",
        "ok": "4.952",
        "ko": "3.113"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
