var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "500",
        "ok": "271",
        "ko": "229"
    },
    "minResponseTime": {
        "total": "15259",
        "ok": "15259",
        "ko": "32072"
    },
    "maxResponseTime": {
        "total": "83238",
        "ok": "82203",
        "ko": "83238"
    },
    "meanResponseTime": {
        "total": "60646",
        "ok": "44479",
        "ko": "79778"
    },
    "standardDeviation": {
        "total": "22167",
        "ok": "16878",
        "ko": "7777"
    },
    "percentiles1": {
        "total": "61050",
        "ok": "42945",
        "ko": "82660"
    },
    "percentiles2": {
        "total": "82538",
        "ok": "55823",
        "ko": "83023"
    },
    "percentiles3": {
        "total": "83194",
        "ok": "81984",
        "ko": "83217"
    },
    "percentiles4": {
        "total": "83236",
        "ok": "82054",
        "ko": "83237"
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
    "count": 271,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 229,
    "percentage": 46
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.952",
        "ok": "3.226",
        "ko": "2.726"
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
        "ok": "271",
        "ko": "229"
    },
    "minResponseTime": {
        "total": "15259",
        "ok": "15259",
        "ko": "32072"
    },
    "maxResponseTime": {
        "total": "83238",
        "ok": "82203",
        "ko": "83238"
    },
    "meanResponseTime": {
        "total": "60646",
        "ok": "44479",
        "ko": "79778"
    },
    "standardDeviation": {
        "total": "22167",
        "ok": "16878",
        "ko": "7777"
    },
    "percentiles1": {
        "total": "61050",
        "ok": "42945",
        "ko": "82660"
    },
    "percentiles2": {
        "total": "82538",
        "ok": "55823",
        "ko": "83023"
    },
    "percentiles3": {
        "total": "83194",
        "ok": "81984",
        "ko": "83217"
    },
    "percentiles4": {
        "total": "83236",
        "ok": "82054",
        "ko": "83237"
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
    "count": 271,
    "percentage": 54
},
    "group4": {
    "name": "failed",
    "count": 229,
    "percentage": 46
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.952",
        "ok": "3.226",
        "ko": "2.726"
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
