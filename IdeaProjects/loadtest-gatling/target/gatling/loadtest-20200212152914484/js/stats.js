var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "250",
        "ok": "250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4185",
        "ok": "4185",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2829",
        "ok": "2829",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2892",
        "ok": "2892",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3673",
        "ok": "3673",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3980",
        "ok": "3980",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4105",
        "ok": "4105",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 229,
    "percentage": 92
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
        "total": "250",
        "ok": "250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "265",
        "ok": "265",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4185",
        "ok": "4185",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2829",
        "ok": "2829",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "926",
        "ok": "926",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2892",
        "ok": "2892",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3673",
        "ok": "3673",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3980",
        "ok": "3980",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4105",
        "ok": "4105",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 229,
    "percentage": 92
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
