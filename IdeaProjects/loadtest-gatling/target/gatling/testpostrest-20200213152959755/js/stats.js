var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "180",
        "ko": "320"
    },
    "minResponseTime": {
        "total": "24199",
        "ok": "24199",
        "ko": "60041"
    },
    "maxResponseTime": {
        "total": "60967",
        "ok": "60022",
        "ko": "60967"
    },
    "meanResponseTime": {
        "total": "52534",
        "ok": "38284",
        "ko": "60550"
    },
    "standardDeviation": {
        "total": "11625",
        "ok": "7621",
        "ko": "188"
    },
    "percentiles1": {
        "total": "60350",
        "ok": "37242",
        "ko": "60624"
    },
    "percentiles2": {
        "total": "60654",
        "ok": "41787",
        "ko": "60693"
    },
    "percentiles3": {
        "total": "60791",
        "ok": "54064",
        "ko": "60813"
    },
    "percentiles4": {
        "total": "60832",
        "ok": "59483",
        "ko": "60836"
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
    "count": 180,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 320,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.065",
        "ok": "2.903",
        "ko": "5.161"
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
        "total": "500",
        "ok": "180",
        "ko": "320"
    },
    "minResponseTime": {
        "total": "24199",
        "ok": "24199",
        "ko": "60041"
    },
    "maxResponseTime": {
        "total": "60967",
        "ok": "60022",
        "ko": "60967"
    },
    "meanResponseTime": {
        "total": "52534",
        "ok": "38284",
        "ko": "60550"
    },
    "standardDeviation": {
        "total": "11625",
        "ok": "7621",
        "ko": "188"
    },
    "percentiles1": {
        "total": "60350",
        "ok": "37242",
        "ko": "60624"
    },
    "percentiles2": {
        "total": "60654",
        "ok": "41787",
        "ko": "60693"
    },
    "percentiles3": {
        "total": "60791",
        "ok": "54064",
        "ko": "60813"
    },
    "percentiles4": {
        "total": "60832",
        "ok": "59483",
        "ko": "60836"
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
    "count": 180,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "count": 320,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.065",
        "ok": "2.903",
        "ko": "5.161"
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
