var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2159",
        "ko": "341"
    },
    "minResponseTime": {
        "total": "1725",
        "ok": "1725",
        "ko": "3200"
    },
    "maxResponseTime": {
        "total": "8297",
        "ok": "8297",
        "ko": "8054"
    },
    "meanResponseTime": {
        "total": "4407",
        "ok": "4059",
        "ko": "6613"
    },
    "standardDeviation": {
        "total": "1687",
        "ok": "1479",
        "ko": "1174"
    },
    "percentiles1": {
        "total": "4011",
        "ok": "3830",
        "ko": "6975"
    },
    "percentiles2": {
        "total": "4852",
        "ok": "4212",
        "ko": "7581"
    },
    "percentiles3": {
        "total": "7967",
        "ok": "7937",
        "ko": "8030"
    },
    "percentiles4": {
        "total": "8043",
        "ok": "8032",
        "ko": "8047"
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
    "count": 2159,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 341,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "239.889",
        "ko": "37.889"
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
        "total": "2500",
        "ok": "2159",
        "ko": "341"
    },
    "minResponseTime": {
        "total": "1725",
        "ok": "1725",
        "ko": "3200"
    },
    "maxResponseTime": {
        "total": "8297",
        "ok": "8297",
        "ko": "8054"
    },
    "meanResponseTime": {
        "total": "4407",
        "ok": "4059",
        "ko": "6613"
    },
    "standardDeviation": {
        "total": "1687",
        "ok": "1479",
        "ko": "1174"
    },
    "percentiles1": {
        "total": "4011",
        "ok": "3830",
        "ko": "6975"
    },
    "percentiles2": {
        "total": "4852",
        "ok": "4212",
        "ko": "7581"
    },
    "percentiles3": {
        "total": "7967",
        "ok": "7937",
        "ko": "8030"
    },
    "percentiles4": {
        "total": "8043",
        "ok": "8032",
        "ko": "8047"
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
    "count": 2159,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 341,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "239.889",
        "ko": "37.889"
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
