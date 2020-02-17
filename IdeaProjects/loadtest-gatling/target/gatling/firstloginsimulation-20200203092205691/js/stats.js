var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "974",
        "ok": "974",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29410",
        "ok": "29410",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18914",
        "ok": "18914",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8326",
        "ok": "8326",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18947",
        "ok": "18947",
        "ko": "-"
    },
    "percentiles2": {
        "total": "27689",
        "ok": "27689",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29161",
        "ok": "29161",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29317",
        "ok": "29317",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 397,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.333",
        "ok": "13.333",
        "ko": "-"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "974",
        "ok": "974",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29410",
        "ok": "29410",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18914",
        "ok": "18914",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8326",
        "ok": "8326",
        "ko": "-"
    },
    "percentiles1": {
        "total": "18947",
        "ok": "18947",
        "ko": "-"
    },
    "percentiles2": {
        "total": "27689",
        "ok": "27689",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29161",
        "ok": "29161",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29317",
        "ok": "29317",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 397,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "13.333",
        "ok": "13.333",
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
