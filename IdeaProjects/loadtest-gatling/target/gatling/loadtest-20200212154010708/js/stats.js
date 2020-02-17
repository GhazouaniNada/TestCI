var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4582",
        "ok": "4582",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3211",
        "ok": "3211",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1115",
        "ok": "1115",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3477",
        "ok": "3477",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4054",
        "ok": "4054",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4485",
        "ok": "4485",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4553",
        "ok": "4553",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 274,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "60",
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
        "total": "300",
        "ok": "300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4582",
        "ok": "4582",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3211",
        "ok": "3211",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1115",
        "ok": "1115",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3477",
        "ok": "3477",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4054",
        "ok": "4054",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4485",
        "ok": "4485",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4553",
        "ok": "4553",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 6
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 274,
    "percentage": 91
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "60",
        "ok": "60",
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
