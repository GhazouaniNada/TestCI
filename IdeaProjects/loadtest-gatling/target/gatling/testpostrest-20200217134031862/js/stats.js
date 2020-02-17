var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "297",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "2287",
        "ok": "2287",
        "ko": "31082"
    },
    "maxResponseTime": {
        "total": "45095",
        "ok": "45095",
        "ko": "40551"
    },
    "meanResponseTime": {
        "total": "30874",
        "ok": "30814",
        "ko": "36827"
    },
    "standardDeviation": {
        "total": "12227",
        "ok": "12267",
        "ko": "4121"
    },
    "percentiles1": {
        "total": "34699",
        "ok": "34671",
        "ko": "38848"
    },
    "percentiles2": {
        "total": "40454",
        "ok": "40426",
        "ko": "39700"
    },
    "percentiles3": {
        "total": "44509",
        "ok": "44516",
        "ko": "40381"
    },
    "percentiles4": {
        "total": "45029",
        "ok": "45030",
        "ko": "40517"
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
    "count": 297,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.522",
        "ok": "6.457",
        "ko": "0.065"
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
        "ok": "297",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "2287",
        "ok": "2287",
        "ko": "31082"
    },
    "maxResponseTime": {
        "total": "45095",
        "ok": "45095",
        "ko": "40551"
    },
    "meanResponseTime": {
        "total": "30874",
        "ok": "30814",
        "ko": "36827"
    },
    "standardDeviation": {
        "total": "12227",
        "ok": "12267",
        "ko": "4121"
    },
    "percentiles1": {
        "total": "34699",
        "ok": "34671",
        "ko": "38848"
    },
    "percentiles2": {
        "total": "40454",
        "ok": "40426",
        "ko": "39700"
    },
    "percentiles3": {
        "total": "44509",
        "ok": "44516",
        "ko": "40381"
    },
    "percentiles4": {
        "total": "45029",
        "ok": "45030",
        "ko": "40517"
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
    "count": 297,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.522",
        "ok": "6.457",
        "ko": "0.065"
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
