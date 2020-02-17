var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30000",
        "ok": "1",
        "ko": "29999"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "3370"
    },
    "maxResponseTime": {
        "total": "149106",
        "ok": "48",
        "ko": "149106"
    },
    "meanResponseTime": {
        "total": "93917",
        "ok": "48",
        "ko": "93920"
    },
    "standardDeviation": {
        "total": "41284",
        "ok": "0",
        "ko": "41281"
    },
    "percentiles1": {
        "total": "106699",
        "ok": "48",
        "ko": "106703"
    },
    "percentiles2": {
        "total": "128837",
        "ok": "48",
        "ko": "128838"
    },
    "percentiles3": {
        "total": "143967",
        "ok": "48",
        "ko": "143967"
    },
    "percentiles4": {
        "total": "146044",
        "ok": "48",
        "ko": "146044"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 29999,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "197.368",
        "ok": "0.007",
        "ko": "197.362"
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
        "total": "30000",
        "ok": "1",
        "ko": "29999"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "48",
        "ko": "3370"
    },
    "maxResponseTime": {
        "total": "149106",
        "ok": "48",
        "ko": "149106"
    },
    "meanResponseTime": {
        "total": "93917",
        "ok": "48",
        "ko": "93920"
    },
    "standardDeviation": {
        "total": "41284",
        "ok": "0",
        "ko": "41281"
    },
    "percentiles1": {
        "total": "106699",
        "ok": "48",
        "ko": "106698"
    },
    "percentiles2": {
        "total": "128860",
        "ok": "48",
        "ko": "128842"
    },
    "percentiles3": {
        "total": "143967",
        "ok": "48",
        "ko": "143967"
    },
    "percentiles4": {
        "total": "146044",
        "ok": "48",
        "ko": "146044"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 29999,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "197.368",
        "ok": "0.007",
        "ko": "197.362"
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
