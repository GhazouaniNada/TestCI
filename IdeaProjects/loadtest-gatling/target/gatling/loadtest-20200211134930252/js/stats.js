var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "198",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "8151",
        "ok": "8151",
        "ko": "24186"
    },
    "maxResponseTime": {
        "total": "32446",
        "ok": "32446",
        "ko": "24869"
    },
    "meanResponseTime": {
        "total": "26186",
        "ok": "26203",
        "ko": "24528"
    },
    "standardDeviation": {
        "total": "6079",
        "ok": "6107",
        "ko": "342"
    },
    "percentiles1": {
        "total": "29933",
        "ok": "29947",
        "ko": "24528"
    },
    "percentiles2": {
        "total": "30811",
        "ok": "30818",
        "ko": "24698"
    },
    "percentiles3": {
        "total": "32301",
        "ok": "32302",
        "ko": "24835"
    },
    "percentiles4": {
        "total": "32395",
        "ok": "32395",
        "ko": "24862"
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
    "count": 198,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.061",
        "ok": "6",
        "ko": "0.061"
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
        "total": "200",
        "ok": "198",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "8151",
        "ok": "8151",
        "ko": "24186"
    },
    "maxResponseTime": {
        "total": "32446",
        "ok": "32446",
        "ko": "24869"
    },
    "meanResponseTime": {
        "total": "26186",
        "ok": "26203",
        "ko": "24528"
    },
    "standardDeviation": {
        "total": "6079",
        "ok": "6107",
        "ko": "342"
    },
    "percentiles1": {
        "total": "29933",
        "ok": "29947",
        "ko": "24528"
    },
    "percentiles2": {
        "total": "30811",
        "ok": "30818",
        "ko": "24698"
    },
    "percentiles3": {
        "total": "32301",
        "ok": "32302",
        "ko": "24835"
    },
    "percentiles4": {
        "total": "32395",
        "ok": "32395",
        "ko": "24862"
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
    "count": 198,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.061",
        "ok": "6",
        "ko": "0.061"
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
