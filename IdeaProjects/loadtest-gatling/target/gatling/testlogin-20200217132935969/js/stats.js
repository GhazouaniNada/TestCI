var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1737",
        "ok": "1737",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19719",
        "ok": "19719",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "13652",
        "ok": "13652",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4339",
        "ok": "4339",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15107",
        "ok": "15107",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17515",
        "ok": "17515",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19469",
        "ok": "19469",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19643",
        "ok": "19643",
        "ko": "-"
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
    "count": 200,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
        "ko": "-"
    }
},
contents: {
"req_loginpage-ed20d": {
        type: "REQUEST",
        name: "LoginPage",
path: "LoginPage",
pathFormatted: "req_loginpage-ed20d",
stats: {
    "name": "LoginPage",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1737",
        "ok": "1737",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "19719",
        "ok": "19719",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "13652",
        "ok": "13652",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4339",
        "ok": "4339",
        "ko": "-"
    },
    "percentiles1": {
        "total": "15107",
        "ok": "15107",
        "ko": "-"
    },
    "percentiles2": {
        "total": "17515",
        "ok": "17515",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19469",
        "ok": "19469",
        "ko": "-"
    },
    "percentiles4": {
        "total": "19643",
        "ok": "19643",
        "ko": "-"
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
    "count": 200,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
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
