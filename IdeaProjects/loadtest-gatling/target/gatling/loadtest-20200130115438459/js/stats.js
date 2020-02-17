var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "3550",
        "ko": "16450"
    },
    "minResponseTime": {
        "total": "3380",
        "ok": "7336",
        "ko": "3380"
    },
    "maxResponseTime": {
        "total": "71393",
        "ok": "42383",
        "ko": "71393"
    },
    "meanResponseTime": {
        "total": "42844",
        "ok": "21259",
        "ko": "47502"
    },
    "standardDeviation": {
        "total": "18064",
        "ok": "12182",
        "ko": "15571"
    },
    "percentiles1": {
        "total": "44543",
        "ok": "13923",
        "ko": "49458"
    },
    "percentiles2": {
        "total": "58565",
        "ok": "38949",
        "ko": "60667"
    },
    "percentiles3": {
        "total": "68023",
        "ok": "40981",
        "ko": "68444"
    },
    "percentiles4": {
        "total": "70170",
        "ok": "41480",
        "ko": "70367"
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
    "count": 3550,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 16450,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "263.158",
        "ok": "46.711",
        "ko": "216.447"
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
        "total": "20000",
        "ok": "3550",
        "ko": "16450"
    },
    "minResponseTime": {
        "total": "3380",
        "ok": "7336",
        "ko": "3380"
    },
    "maxResponseTime": {
        "total": "71393",
        "ok": "42383",
        "ko": "71393"
    },
    "meanResponseTime": {
        "total": "42844",
        "ok": "21259",
        "ko": "47502"
    },
    "standardDeviation": {
        "total": "18064",
        "ok": "12182",
        "ko": "15571"
    },
    "percentiles1": {
        "total": "44542",
        "ok": "13923",
        "ko": "49460"
    },
    "percentiles2": {
        "total": "58550",
        "ok": "38949",
        "ko": "60697"
    },
    "percentiles3": {
        "total": "68022",
        "ok": "40981",
        "ko": "68444"
    },
    "percentiles4": {
        "total": "70170",
        "ok": "41480",
        "ko": "70367"
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
    "count": 3550,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 16450,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "263.158",
        "ok": "46.711",
        "ko": "216.447"
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
