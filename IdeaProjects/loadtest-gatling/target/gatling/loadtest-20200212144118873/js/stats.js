var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3013",
        "ok": "3013",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1835",
        "ok": "1835",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "817",
        "ok": "817",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2020",
        "ok": "2020",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2548",
        "ok": "2548",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2876",
        "ok": "2876",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2999",
        "ok": "2999",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 136,
    "percentage": 68
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
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3013",
        "ok": "3013",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1835",
        "ok": "1835",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "817",
        "ok": "817",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2020",
        "ok": "2020",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2548",
        "ok": "2548",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2876",
        "ok": "2876",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2999",
        "ok": "2999",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 36,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 136,
    "percentage": 68
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
