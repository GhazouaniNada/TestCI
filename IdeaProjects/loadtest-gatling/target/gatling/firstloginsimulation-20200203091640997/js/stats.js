var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "438",
        "ko": "62"
    },
    "minResponseTime": {
        "total": "2482",
        "ok": "8992",
        "ko": "2482"
    },
    "maxResponseTime": {
        "total": "40823",
        "ok": "40823",
        "ko": "3283"
    },
    "meanResponseTime": {
        "total": "24669",
        "ok": "27738",
        "ko": "2987"
    },
    "standardDeviation": {
        "total": "12137",
        "ok": "9602",
        "ko": "164"
    },
    "percentiles1": {
        "total": "29828",
        "ok": "30587",
        "ko": "3044"
    },
    "percentiles2": {
        "total": "35937",
        "ok": "36731",
        "ko": "3086"
    },
    "percentiles3": {
        "total": "40646",
        "ok": "40677",
        "ko": "3148"
    },
    "percentiles4": {
        "total": "40783",
        "ok": "40787",
        "ko": "3270"
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
    "count": 438,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 62,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.905",
        "ok": "10.429",
        "ko": "1.476"
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
        "ok": "438",
        "ko": "62"
    },
    "minResponseTime": {
        "total": "2482",
        "ok": "8992",
        "ko": "2482"
    },
    "maxResponseTime": {
        "total": "40823",
        "ok": "40823",
        "ko": "3283"
    },
    "meanResponseTime": {
        "total": "24669",
        "ok": "27738",
        "ko": "2987"
    },
    "standardDeviation": {
        "total": "12137",
        "ok": "9602",
        "ko": "164"
    },
    "percentiles1": {
        "total": "29828",
        "ok": "30587",
        "ko": "3044"
    },
    "percentiles2": {
        "total": "35937",
        "ok": "36731",
        "ko": "3086"
    },
    "percentiles3": {
        "total": "40646",
        "ok": "40677",
        "ko": "3148"
    },
    "percentiles4": {
        "total": "40783",
        "ok": "40787",
        "ko": "3270"
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
    "count": 438,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 62,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.905",
        "ok": "10.429",
        "ko": "1.476"
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
