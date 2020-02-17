var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "150",
        "ok": "0",
        "ko": "150"
    },
    "minResponseTime": {
        "total": "2010",
        "ok": "-",
        "ko": "2010"
    },
    "maxResponseTime": {
        "total": "3895",
        "ok": "-",
        "ko": "3895"
    },
    "meanResponseTime": {
        "total": "2893",
        "ok": "-",
        "ko": "2893"
    },
    "standardDeviation": {
        "total": "564",
        "ok": "-",
        "ko": "564"
    },
    "percentiles1": {
        "total": "2867",
        "ok": "-",
        "ko": "2867"
    },
    "percentiles2": {
        "total": "3366",
        "ok": "-",
        "ko": "3366"
    },
    "percentiles3": {
        "total": "3829",
        "ok": "-",
        "ko": "3829"
    },
    "percentiles4": {
        "total": "3895",
        "ok": "-",
        "ko": "3895"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 150,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "-",
        "ko": "30"
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
        "total": "150",
        "ok": "0",
        "ko": "150"
    },
    "minResponseTime": {
        "total": "2010",
        "ok": "-",
        "ko": "2010"
    },
    "maxResponseTime": {
        "total": "3895",
        "ok": "-",
        "ko": "3895"
    },
    "meanResponseTime": {
        "total": "2893",
        "ok": "-",
        "ko": "2893"
    },
    "standardDeviation": {
        "total": "564",
        "ok": "-",
        "ko": "564"
    },
    "percentiles1": {
        "total": "2867",
        "ok": "-",
        "ko": "2867"
    },
    "percentiles2": {
        "total": "3366",
        "ok": "-",
        "ko": "3366"
    },
    "percentiles3": {
        "total": "3829",
        "ok": "-",
        "ko": "3829"
    },
    "percentiles4": {
        "total": "3895",
        "ok": "-",
        "ko": "3895"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 150,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "-",
        "ko": "30"
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
