var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "800",
        "ok": "463",
        "ko": "337"
    },
    "minResponseTime": {
        "total": "2261",
        "ok": "11769",
        "ko": "2261"
    },
    "maxResponseTime": {
        "total": "73104",
        "ok": "60087",
        "ko": "73104"
    },
    "meanResponseTime": {
        "total": "45776",
        "ok": "35139",
        "ko": "60389"
    },
    "standardDeviation": {
        "total": "21097",
        "ok": "12286",
        "ko": "21913"
    },
    "percentiles1": {
        "total": "47871",
        "ok": "33849",
        "ko": "71679"
    },
    "percentiles2": {
        "total": "60292",
        "ok": "46385",
        "ko": "72283"
    },
    "percentiles3": {
        "total": "72778",
        "ok": "53943",
        "ko": "72958"
    },
    "percentiles4": {
        "total": "73012",
        "ok": "57932",
        "ko": "73037"
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
    "count": 463,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "count": 337,
    "percentage": 42
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.256",
        "ok": "5.936",
        "ko": "4.321"
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
        "total": "800",
        "ok": "463",
        "ko": "337"
    },
    "minResponseTime": {
        "total": "2261",
        "ok": "11769",
        "ko": "2261"
    },
    "maxResponseTime": {
        "total": "73104",
        "ok": "60087",
        "ko": "73104"
    },
    "meanResponseTime": {
        "total": "45776",
        "ok": "35139",
        "ko": "60389"
    },
    "standardDeviation": {
        "total": "21097",
        "ok": "12286",
        "ko": "21913"
    },
    "percentiles1": {
        "total": "47871",
        "ok": "33849",
        "ko": "71679"
    },
    "percentiles2": {
        "total": "60292",
        "ok": "46385",
        "ko": "72283"
    },
    "percentiles3": {
        "total": "72778",
        "ok": "53943",
        "ko": "72958"
    },
    "percentiles4": {
        "total": "73012",
        "ok": "57932",
        "ko": "73037"
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
    "count": 463,
    "percentage": 58
},
    "group4": {
    "name": "failed",
    "count": 337,
    "percentage": 42
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10.256",
        "ok": "5.936",
        "ko": "4.321"
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
