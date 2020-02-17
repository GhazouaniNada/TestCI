var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "367",
        "ko": "33"
    },
    "minResponseTime": {
        "total": "15126",
        "ok": "15126",
        "ko": "60435"
    },
    "maxResponseTime": {
        "total": "61382",
        "ok": "61371",
        "ko": "61382"
    },
    "meanResponseTime": {
        "total": "42132",
        "ok": "40428",
        "ko": "61078"
    },
    "standardDeviation": {
        "total": "13520",
        "ok": "12808",
        "ko": "349"
    },
    "percentiles1": {
        "total": "43861",
        "ok": "42334",
        "ko": "61233"
    },
    "percentiles2": {
        "total": "55846",
        "ok": "51480",
        "ko": "61337"
    },
    "percentiles3": {
        "total": "61232",
        "ok": "58944",
        "ko": "61363"
    },
    "percentiles4": {
        "total": "61357",
        "ok": "60306",
        "ko": "61376"
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
    "count": 367,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 33,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.452",
        "ok": "5.919",
        "ko": "0.532"
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
        "total": "400",
        "ok": "367",
        "ko": "33"
    },
    "minResponseTime": {
        "total": "15126",
        "ok": "15126",
        "ko": "60435"
    },
    "maxResponseTime": {
        "total": "61382",
        "ok": "61371",
        "ko": "61382"
    },
    "meanResponseTime": {
        "total": "42132",
        "ok": "40428",
        "ko": "61078"
    },
    "standardDeviation": {
        "total": "13520",
        "ok": "12808",
        "ko": "349"
    },
    "percentiles1": {
        "total": "43861",
        "ok": "42334",
        "ko": "61233"
    },
    "percentiles2": {
        "total": "55846",
        "ok": "51480",
        "ko": "61337"
    },
    "percentiles3": {
        "total": "61232",
        "ok": "58944",
        "ko": "61363"
    },
    "percentiles4": {
        "total": "61357",
        "ok": "60306",
        "ko": "61376"
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
    "count": 367,
    "percentage": 92
},
    "group4": {
    "name": "failed",
    "count": 33,
    "percentage": 8
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.452",
        "ok": "5.919",
        "ko": "0.532"
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
