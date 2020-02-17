var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "5",
        "ko": "495"
    },
    "minResponseTime": {
        "total": "20645",
        "ok": "35114",
        "ko": "20645"
    },
    "maxResponseTime": {
        "total": "38767",
        "ok": "38767",
        "ko": "36374"
    },
    "meanResponseTime": {
        "total": "30362",
        "ok": "36922",
        "ko": "30296"
    },
    "standardDeviation": {
        "total": "6901",
        "ok": "1295",
        "ko": "6903"
    },
    "percentiles1": {
        "total": "35156",
        "ok": "36843",
        "ko": "35154"
    },
    "percentiles2": {
        "total": "36100",
        "ok": "37869",
        "ko": "36096"
    },
    "percentiles3": {
        "total": "36309",
        "ok": "38587",
        "ko": "36300"
    },
    "percentiles4": {
        "total": "36363",
        "ok": "38731",
        "ko": "36350"
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
    "count": 5,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 495,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.821",
        "ok": "0.128",
        "ko": "12.692"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "500",
        "ok": "5",
        "ko": "495"
    },
    "minResponseTime": {
        "total": "20645",
        "ok": "35114",
        "ko": "20645"
    },
    "maxResponseTime": {
        "total": "38767",
        "ok": "38767",
        "ko": "36374"
    },
    "meanResponseTime": {
        "total": "30362",
        "ok": "36922",
        "ko": "30296"
    },
    "standardDeviation": {
        "total": "6901",
        "ok": "1295",
        "ko": "6903"
    },
    "percentiles1": {
        "total": "35156",
        "ok": "36843",
        "ko": "35154"
    },
    "percentiles2": {
        "total": "36100",
        "ok": "37869",
        "ko": "36096"
    },
    "percentiles3": {
        "total": "36309",
        "ok": "38587",
        "ko": "36300"
    },
    "percentiles4": {
        "total": "36363",
        "ok": "38731",
        "ko": "36350"
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
    "count": 5,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 495,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.821",
        "ok": "0.128",
        "ko": "12.692"
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
