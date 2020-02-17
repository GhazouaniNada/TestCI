var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15000",
        "ok": "7551",
        "ko": "7449"
    },
    "minResponseTime": {
        "total": "7569",
        "ok": "8076",
        "ko": "7569"
    },
    "maxResponseTime": {
        "total": "45574",
        "ok": "45574",
        "ko": "43799"
    },
    "meanResponseTime": {
        "total": "26143",
        "ok": "22316",
        "ko": "30021"
    },
    "standardDeviation": {
        "total": "10187",
        "ok": "11087",
        "ko": "7382"
    },
    "percentiles1": {
        "total": "25729",
        "ok": "16518",
        "ko": "30649"
    },
    "percentiles2": {
        "total": "34502",
        "ok": "27075",
        "ko": "35190"
    },
    "percentiles3": {
        "total": "42786",
        "ok": "44412",
        "ko": "41207"
    },
    "percentiles4": {
        "total": "45023",
        "ok": "45247",
        "ko": "41962"
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
    "count": 7551,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 7449,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "319.149",
        "ok": "160.66",
        "ko": "158.489"
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
        "total": "15000",
        "ok": "7551",
        "ko": "7449"
    },
    "minResponseTime": {
        "total": "7569",
        "ok": "8076",
        "ko": "7569"
    },
    "maxResponseTime": {
        "total": "45574",
        "ok": "45574",
        "ko": "43799"
    },
    "meanResponseTime": {
        "total": "26143",
        "ok": "22316",
        "ko": "30021"
    },
    "standardDeviation": {
        "total": "10187",
        "ok": "11087",
        "ko": "7382"
    },
    "percentiles1": {
        "total": "25717",
        "ok": "16519",
        "ko": "30651"
    },
    "percentiles2": {
        "total": "34503",
        "ok": "27075",
        "ko": "35195"
    },
    "percentiles3": {
        "total": "42786",
        "ok": "44412",
        "ko": "41206"
    },
    "percentiles4": {
        "total": "45023",
        "ok": "45247",
        "ko": "41962"
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
    "count": 7551,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 7449,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "319.149",
        "ok": "160.66",
        "ko": "158.489"
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
