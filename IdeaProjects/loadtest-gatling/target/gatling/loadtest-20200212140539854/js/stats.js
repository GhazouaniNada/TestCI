var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1240",
        "ok": "1240",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles1": {
        "total": "905",
        "ok": "905",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1227",
        "ok": "1227",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1238",
        "ok": "1238",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 36
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 27,
    "percentage": 54
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
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
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1240",
        "ok": "1240",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "880",
        "ok": "880",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "percentiles1": {
        "total": "905",
        "ok": "905",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1094",
        "ok": "1094",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1227",
        "ok": "1227",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1238",
        "ok": "1238",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 36
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 27,
    "percentage": 54
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "25",
        "ok": "25",
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
