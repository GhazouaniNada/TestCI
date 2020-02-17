var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "350",
        "ok": "350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6669",
        "ok": "6669",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4555",
        "ok": "4555",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1723",
        "ok": "1723",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5242",
        "ok": "5242",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5862",
        "ok": "5862",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6389",
        "ok": "6389",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6565",
        "ok": "6565",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 336,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
},
contents: {
"req_gethelloworld-d695b": {
        type: "REQUEST",
        name: "GetHelloWorld",
path: "GetHelloWorld",
pathFormatted: "req_gethelloworld-d695b",
stats: {
    "name": "GetHelloWorld",
    "numberOfRequests": {
        "total": "350",
        "ok": "350",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6669",
        "ok": "6669",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4555",
        "ok": "4555",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1723",
        "ok": "1723",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5242",
        "ok": "5242",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5862",
        "ok": "5862",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6389",
        "ok": "6389",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6565",
        "ok": "6565",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 336,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
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
