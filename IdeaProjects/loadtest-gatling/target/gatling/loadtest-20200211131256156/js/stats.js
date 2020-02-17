var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "257",
        "ko": "743"
    },
    "minResponseTime": {
        "total": "12389",
        "ok": "12389",
        "ko": "29612"
    },
    "maxResponseTime": {
        "total": "99668",
        "ok": "99211",
        "ko": "99668"
    },
    "meanResponseTime": {
        "total": "77608",
        "ok": "43474",
        "ko": "89415"
    },
    "standardDeviation": {
        "total": "24884",
        "ok": "17872",
        "ko": "13435"
    },
    "percentiles1": {
        "total": "88808",
        "ok": "42870",
        "ko": "89236"
    },
    "percentiles2": {
        "total": "99073",
        "ok": "53918",
        "ko": "99193"
    },
    "percentiles3": {
        "total": "99501",
        "ok": "79946",
        "ko": "99553"
    },
    "percentiles4": {
        "total": "99572",
        "ok": "92609",
        "ko": "99575"
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
    "count": 257,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 743,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.901",
        "ok": "2.545",
        "ko": "7.356"
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
        "total": "1000",
        "ok": "257",
        "ko": "743"
    },
    "minResponseTime": {
        "total": "12389",
        "ok": "12389",
        "ko": "29612"
    },
    "maxResponseTime": {
        "total": "99668",
        "ok": "99211",
        "ko": "99668"
    },
    "meanResponseTime": {
        "total": "77608",
        "ok": "43474",
        "ko": "89415"
    },
    "standardDeviation": {
        "total": "24884",
        "ok": "17872",
        "ko": "13435"
    },
    "percentiles1": {
        "total": "88808",
        "ok": "42870",
        "ko": "89236"
    },
    "percentiles2": {
        "total": "99073",
        "ok": "53918",
        "ko": "99193"
    },
    "percentiles3": {
        "total": "99501",
        "ok": "79946",
        "ko": "99553"
    },
    "percentiles4": {
        "total": "99572",
        "ok": "92609",
        "ko": "99575"
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
    "count": 257,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 743,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.901",
        "ok": "2.545",
        "ko": "7.356"
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
