var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9978",
        "ok": "9978",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "18202",
        "ok": "18202",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15095",
        "ok": "15095",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2176",
        "ok": "2176",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14484",
        "ok": "14484",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17162",
        "ok": "17162",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18002",
        "ok": "18002",
        "ko": "-"
    },
    "percentiles4": {
        "total": "18069",
        "ok": "18069",
        "ko": "-"
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
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.263",
        "ok": "5.263",
        "ko": "-"
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "9978",
        "ok": "9978",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "18202",
        "ok": "18202",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "15095",
        "ok": "15095",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2176",
        "ok": "2176",
        "ko": "-"
    },
    "percentiles1": {
        "total": "14484",
        "ok": "14484",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17162",
        "ok": "17162",
        "ko": "-"
    },
    "percentiles3": {
        "total": "18002",
        "ok": "18002",
        "ko": "-"
    },
    "percentiles4": {
        "total": "18069",
        "ok": "18069",
        "ko": "-"
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
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.263",
        "ok": "5.263",
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
