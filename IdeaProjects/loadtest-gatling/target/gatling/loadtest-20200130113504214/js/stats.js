var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3000",
        "ok": "2601",
        "ko": "399"
    },
    "minResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "3062"
    },
    "maxResponseTime": {
        "total": "6458",
        "ok": "6358",
        "ko": "6458"
    },
    "meanResponseTime": {
        "total": "3386",
        "ok": "3129",
        "ko": "5063"
    },
    "standardDeviation": {
        "total": "1429",
        "ok": "1324",
        "ko": "828"
    },
    "percentiles1": {
        "total": "2923",
        "ok": "2716",
        "ko": "4916"
    },
    "percentiles2": {
        "total": "4561",
        "ok": "3728",
        "ko": "5886"
    },
    "percentiles3": {
        "total": "6070",
        "ok": "6037",
        "ko": "6311"
    },
    "percentiles4": {
        "total": "6314",
        "ok": "6248",
        "ko": "6379"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2600,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "count": 399,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "375",
        "ok": "325.125",
        "ko": "49.875"
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
        "total": "3000",
        "ok": "2601",
        "ko": "399"
    },
    "minResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "3062"
    },
    "maxResponseTime": {
        "total": "6458",
        "ok": "6358",
        "ko": "6458"
    },
    "meanResponseTime": {
        "total": "3386",
        "ok": "3129",
        "ko": "5063"
    },
    "standardDeviation": {
        "total": "1429",
        "ok": "1324",
        "ko": "828"
    },
    "percentiles1": {
        "total": "2923",
        "ok": "2716",
        "ko": "4916"
    },
    "percentiles2": {
        "total": "4561",
        "ok": "3728",
        "ko": "5886"
    },
    "percentiles3": {
        "total": "6070",
        "ok": "6037",
        "ko": "6311"
    },
    "percentiles4": {
        "total": "6314",
        "ok": "6248",
        "ko": "6379"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2600,
    "percentage": 87
},
    "group4": {
    "name": "failed",
    "count": 399,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "375",
        "ok": "325.125",
        "ko": "49.875"
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
