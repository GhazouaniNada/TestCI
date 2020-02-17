var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "299",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "13476",
        "ok": "13476",
        "ko": "28589"
    },
    "maxResponseTime": {
        "total": "59712",
        "ok": "59712",
        "ko": "28589"
    },
    "meanResponseTime": {
        "total": "44912",
        "ok": "44966",
        "ko": "28589"
    },
    "standardDeviation": {
        "total": "14027",
        "ok": "14019",
        "ko": "0"
    },
    "percentiles1": {
        "total": "50865",
        "ok": "50974",
        "ko": "28589"
    },
    "percentiles2": {
        "total": "57586",
        "ok": "57592",
        "ko": "28589"
    },
    "percentiles3": {
        "total": "59529",
        "ok": "59529",
        "ko": "28589"
    },
    "percentiles4": {
        "total": "59657",
        "ok": "59657",
        "ko": "28589"
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
    "count": 299,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.983",
        "ko": "0.017"
    }
},
contents: {
"req_postrequest-a5ae5": {
        type: "REQUEST",
        name: "PostRequest",
path: "PostRequest",
pathFormatted: "req_postrequest-a5ae5",
stats: {
    "name": "PostRequest",
    "numberOfRequests": {
        "total": "300",
        "ok": "299",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "13476",
        "ok": "13476",
        "ko": "28589"
    },
    "maxResponseTime": {
        "total": "59712",
        "ok": "59712",
        "ko": "28589"
    },
    "meanResponseTime": {
        "total": "44912",
        "ok": "44966",
        "ko": "28589"
    },
    "standardDeviation": {
        "total": "14027",
        "ok": "14019",
        "ko": "0"
    },
    "percentiles1": {
        "total": "50865",
        "ok": "50974",
        "ko": "28589"
    },
    "percentiles2": {
        "total": "57586",
        "ok": "57592",
        "ko": "28589"
    },
    "percentiles3": {
        "total": "59529",
        "ok": "59529",
        "ko": "28589"
    },
    "percentiles4": {
        "total": "59657",
        "ok": "59657",
        "ko": "28589"
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
    "count": 299,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.983",
        "ko": "0.017"
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
