var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2700",
        "ok": "2697",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "10002",
        "ok": "7391",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "193",
        "ok": "182",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "565",
        "ok": "460",
        "ko": "0"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "271",
        "ok": "270",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "1287",
        "ok": "1269",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2651,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 37,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "49.944",
        "ko": "0.056"
    }
},
contents: {
"req_helloworld-68e10": {
        type: "REQUEST",
        name: "HelloWorld",
path: "HelloWorld",
pathFormatted: "req_helloworld-68e10",
stats: {
    "name": "HelloWorld",
    "numberOfRequests": {
        "total": "2700",
        "ok": "2697",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "10002",
        "ok": "7391",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "193",
        "ok": "182",
        "ko": "10001"
    },
    "standardDeviation": {
        "total": "565",
        "ok": "460",
        "ko": "0"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "10002"
    },
    "percentiles3": {
        "total": "271",
        "ok": "270",
        "ko": "10002"
    },
    "percentiles4": {
        "total": "1287",
        "ok": "1269",
        "ko": "10002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2651,
    "percentage": 98
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 37,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "49.944",
        "ko": "0.056"
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
