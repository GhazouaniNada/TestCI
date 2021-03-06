var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4026",
        "ok": "4026",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "37140",
        "ok": "37140",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23555",
        "ok": "23555",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9857",
        "ok": "9857",
        "ko": "-"
    },
    "percentiles1": {
        "total": "22524",
        "ok": "22524",
        "ko": "-"
    },
    "percentiles2": {
        "total": "32257",
        "ok": "32257",
        "ko": "-"
    },
    "percentiles3": {
        "total": "36724",
        "ok": "36724",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36866",
        "ok": "36866",
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
    "count": 500,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.905",
        "ok": "11.905",
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4026",
        "ok": "4026",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "37140",
        "ok": "37140",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "23555",
        "ok": "23555",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9857",
        "ok": "9857",
        "ko": "-"
    },
    "percentiles1": {
        "total": "22524",
        "ok": "22524",
        "ko": "-"
    },
    "percentiles2": {
        "total": "32257",
        "ok": "32257",
        "ko": "-"
    },
    "percentiles3": {
        "total": "36724",
        "ok": "36724",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36866",
        "ok": "36866",
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
    "count": 500,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.905",
        "ok": "11.905",
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
