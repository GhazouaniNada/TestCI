var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "36542",
        "ok": "36542",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "21589",
        "ok": "21589",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10227",
        "ok": "10227",
        "ko": "-"
    },
    "percentiles1": {
        "total": "23376",
        "ok": "23376",
        "ko": "-"
    },
    "percentiles2": {
        "total": "30163",
        "ok": "30163",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35605",
        "ok": "35605",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36436",
        "ok": "36436",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 396,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.756",
        "ok": "9.756",
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
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "770",
        "ok": "770",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "36542",
        "ok": "36542",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "21589",
        "ok": "21589",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "10227",
        "ok": "10227",
        "ko": "-"
    },
    "percentiles1": {
        "total": "23376",
        "ok": "23376",
        "ko": "-"
    },
    "percentiles2": {
        "total": "30163",
        "ok": "30163",
        "ko": "-"
    },
    "percentiles3": {
        "total": "35605",
        "ok": "35605",
        "ko": "-"
    },
    "percentiles4": {
        "total": "36436",
        "ok": "36436",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 396,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.756",
        "ok": "9.756",
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
