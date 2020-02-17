var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "252450",
        "ok": "18283",
        "ko": "234167"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "2049"
    },
    "maxResponseTime": {
        "total": "838458",
        "ok": "662681",
        "ko": "838458"
    },
    "meanResponseTime": {
        "total": "460854",
        "ok": "218796",
        "ko": "479753"
    },
    "standardDeviation": {
        "total": "255554",
        "ok": "258754",
        "ko": "245454"
    },
    "percentiles1": {
        "total": "560355",
        "ok": "25417",
        "ko": "569247"
    },
    "percentiles2": {
        "total": "627656",
        "ok": "522147",
        "ko": "631260"
    },
    "percentiles3": {
        "total": "726830",
        "ok": "582762",
        "ko": "732383"
    },
    "percentiles4": {
        "total": "811176",
        "ok": "600576",
        "ko": "812251"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4550,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1627,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12106,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 234167,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "232.459",
        "ok": "16.835",
        "ko": "215.623"
    }
},
contents: {
"req_helloworld-68e10": {
        type: "REQUEST",
        name: "HelloWorld",
path: "HelloWorld",
pathFormatted: "req_helloworld-68e10",
stats: {
    "name": "HelloWorld",
    "numberOfRequests": {
        "total": "252450",
        "ok": "18283",
        "ko": "234167"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "2049"
    },
    "maxResponseTime": {
        "total": "838458",
        "ok": "662681",
        "ko": "838458"
    },
    "meanResponseTime": {
        "total": "460854",
        "ok": "218796",
        "ko": "479753"
    },
    "standardDeviation": {
        "total": "255554",
        "ok": "258754",
        "ko": "245454"
    },
    "percentiles1": {
        "total": "560378",
        "ok": "25407",
        "ko": "569248"
    },
    "percentiles2": {
        "total": "627543",
        "ok": "522147",
        "ko": "631283"
    },
    "percentiles3": {
        "total": "726821",
        "ok": "582762",
        "ko": "732357"
    },
    "percentiles4": {
        "total": "811179",
        "ok": "600576",
        "ko": "812251"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4550,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1627,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12106,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 234167,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "232.459",
        "ok": "16.835",
        "ko": "215.623"
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
