var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1690",
        "ok": "2055",
        "ko": "1690"
    },
    "maxResponseTime": {
        "total": "2055",
        "ok": "2055",
        "ko": "1699"
    },
    "meanResponseTime": {
        "total": "1815",
        "ok": "2055",
        "ko": "1695"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "0",
        "ko": "5"
    },
    "percentiles1": {
        "total": "1699",
        "ok": "2055",
        "ko": "1695"
    },
    "percentiles2": {
        "total": "1877",
        "ok": "2055",
        "ko": "1697"
    },
    "percentiles3": {
        "total": "2019",
        "ok": "2055",
        "ko": "1699"
    },
    "percentiles4": {
        "total": "2048",
        "ok": "2055",
        "ko": "1699"
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
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.333",
        "ko": "0.667"
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
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1690",
        "ok": "2055",
        "ko": "1690"
    },
    "maxResponseTime": {
        "total": "2055",
        "ok": "2055",
        "ko": "1699"
    },
    "meanResponseTime": {
        "total": "1815",
        "ok": "2055",
        "ko": "1695"
    },
    "standardDeviation": {
        "total": "170",
        "ok": "0",
        "ko": "5"
    },
    "percentiles1": {
        "total": "1699",
        "ok": "2055",
        "ko": "1695"
    },
    "percentiles2": {
        "total": "1877",
        "ok": "2055",
        "ko": "1697"
    },
    "percentiles3": {
        "total": "2019",
        "ok": "2055",
        "ko": "1699"
    },
    "percentiles4": {
        "total": "2048",
        "ok": "2055",
        "ko": "1699"
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
    "count": 1,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 67
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.333",
        "ko": "0.667"
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
