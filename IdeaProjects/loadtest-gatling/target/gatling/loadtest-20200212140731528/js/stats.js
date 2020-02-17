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
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2366",
        "ok": "2366",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1345",
        "ok": "1345",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1704",
        "ok": "1704",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2322",
        "ok": "2322",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2366",
        "ok": "2366",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 17,
    "percentage": 34
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 30,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.5",
        "ok": "12.5",
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
        "total": "168",
        "ok": "168",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2366",
        "ok": "2366",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1345",
        "ok": "1345",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1704",
        "ok": "1704",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2322",
        "ok": "2322",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2366",
        "ok": "2366",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 17,
    "percentage": 34
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 30,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.5",
        "ok": "12.5",
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
