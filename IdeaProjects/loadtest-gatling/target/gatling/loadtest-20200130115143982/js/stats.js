var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "5167",
        "ko": "4833"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "5272"
    },
    "maxResponseTime": {
        "total": "34289",
        "ok": "34289",
        "ko": "33128"
    },
    "meanResponseTime": {
        "total": "16518",
        "ok": "11227",
        "ko": "22175"
    },
    "standardDeviation": {
        "total": "10509",
        "ok": "10576",
        "ko": "6855"
    },
    "percentiles1": {
        "total": "15799",
        "ok": "5512",
        "ko": "23275"
    },
    "percentiles2": {
        "total": "27102",
        "ok": "8537",
        "ko": "27704"
    },
    "percentiles3": {
        "total": "32738",
        "ok": "33046",
        "ko": "32163"
    },
    "percentiles4": {
        "total": "33593",
        "ok": "33902",
        "ko": "32971"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5165,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 4833,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "143.528",
        "ko": "134.25"
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
        "total": "10000",
        "ok": "5167",
        "ko": "4833"
    },
    "minResponseTime": {
        "total": "91",
        "ok": "91",
        "ko": "5272"
    },
    "maxResponseTime": {
        "total": "34289",
        "ok": "34289",
        "ko": "33128"
    },
    "meanResponseTime": {
        "total": "16518",
        "ok": "11227",
        "ko": "22175"
    },
    "standardDeviation": {
        "total": "10509",
        "ok": "10576",
        "ko": "6855"
    },
    "percentiles1": {
        "total": "15808",
        "ok": "5511",
        "ko": "23278"
    },
    "percentiles2": {
        "total": "27101",
        "ok": "8537",
        "ko": "27705"
    },
    "percentiles3": {
        "total": "32738",
        "ok": "33046",
        "ko": "32163"
    },
    "percentiles4": {
        "total": "33593",
        "ok": "33902",
        "ko": "32971"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 5165,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 4833,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "277.778",
        "ok": "143.528",
        "ko": "134.25"
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
