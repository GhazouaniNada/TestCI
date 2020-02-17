var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "199",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "19095",
        "ok": "19095",
        "ko": "37797"
    },
    "maxResponseTime": {
        "total": "39809",
        "ok": "39809",
        "ko": "37797"
    },
    "meanResponseTime": {
        "total": "34146",
        "ok": "34128",
        "ko": "37797"
    },
    "standardDeviation": {
        "total": "4786",
        "ok": "4791",
        "ko": "0"
    },
    "percentiles1": {
        "total": "35601",
        "ok": "35591",
        "ko": "37797"
    },
    "percentiles2": {
        "total": "39006",
        "ok": "39010",
        "ko": "37797"
    },
    "percentiles3": {
        "total": "39614",
        "ok": "39614",
        "ko": "37797"
    },
    "percentiles4": {
        "total": "39755",
        "ok": "39755",
        "ko": "37797"
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
    "count": 199,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.975",
        "ko": "0.025"
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
        "ok": "199",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "19095",
        "ok": "19095",
        "ko": "37797"
    },
    "maxResponseTime": {
        "total": "39809",
        "ok": "39809",
        "ko": "37797"
    },
    "meanResponseTime": {
        "total": "34146",
        "ok": "34128",
        "ko": "37797"
    },
    "standardDeviation": {
        "total": "4786",
        "ok": "4791",
        "ko": "0"
    },
    "percentiles1": {
        "total": "35601",
        "ok": "35591",
        "ko": "37797"
    },
    "percentiles2": {
        "total": "39006",
        "ok": "39010",
        "ko": "37797"
    },
    "percentiles3": {
        "total": "39614",
        "ok": "39614",
        "ko": "37797"
    },
    "percentiles4": {
        "total": "39755",
        "ok": "39755",
        "ko": "37797"
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
    "count": 199,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 1
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "4.975",
        "ko": "0.025"
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
