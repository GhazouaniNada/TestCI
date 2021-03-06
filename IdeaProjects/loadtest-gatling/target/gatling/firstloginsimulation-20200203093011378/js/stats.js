var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "700",
        "ok": "592",
        "ko": "108"
    },
    "minResponseTime": {
        "total": "1273",
        "ok": "1273",
        "ko": "60154"
    },
    "maxResponseTime": {
        "total": "60721",
        "ok": "60418",
        "ko": "60721"
    },
    "meanResponseTime": {
        "total": "38130",
        "ok": "34060",
        "ko": "60438"
    },
    "standardDeviation": {
        "total": "17302",
        "ok": "15704",
        "ko": "133"
    },
    "percentiles1": {
        "total": "36498",
        "ok": "32342",
        "ko": "60484"
    },
    "percentiles2": {
        "total": "56035",
        "ok": "49632",
        "ko": "60509"
    },
    "percentiles3": {
        "total": "60495",
        "ok": "58364",
        "ko": "60589"
    },
    "percentiles4": {
        "total": "60582",
        "ok": "59858",
        "ko": "60713"
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
    "count": 592,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 108,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.29",
        "ok": "9.548",
        "ko": "1.742"
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
        "total": "700",
        "ok": "592",
        "ko": "108"
    },
    "minResponseTime": {
        "total": "1273",
        "ok": "1273",
        "ko": "60154"
    },
    "maxResponseTime": {
        "total": "60721",
        "ok": "60418",
        "ko": "60721"
    },
    "meanResponseTime": {
        "total": "38130",
        "ok": "34060",
        "ko": "60438"
    },
    "standardDeviation": {
        "total": "17302",
        "ok": "15704",
        "ko": "133"
    },
    "percentiles1": {
        "total": "36498",
        "ok": "32342",
        "ko": "60484"
    },
    "percentiles2": {
        "total": "56035",
        "ok": "49632",
        "ko": "60509"
    },
    "percentiles3": {
        "total": "60495",
        "ok": "58364",
        "ko": "60589"
    },
    "percentiles4": {
        "total": "60582",
        "ok": "59858",
        "ko": "60713"
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
    "count": 592,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 108,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.29",
        "ok": "9.548",
        "ko": "1.742"
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
