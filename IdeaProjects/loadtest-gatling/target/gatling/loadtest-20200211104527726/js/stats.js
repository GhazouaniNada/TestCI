var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "197",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "8130",
        "ok": "8130",
        "ko": "23458"
    },
    "maxResponseTime": {
        "total": "36051",
        "ok": "36051",
        "ko": "31200"
    },
    "meanResponseTime": {
        "total": "28588",
        "ok": "28590",
        "ko": "28401"
    },
    "standardDeviation": {
        "total": "6722",
        "ok": "6760",
        "ko": "3505"
    },
    "percentiles1": {
        "total": "30279",
        "ok": "30276",
        "ko": "30544"
    },
    "percentiles2": {
        "total": "34791",
        "ok": "34806",
        "ko": "30872"
    },
    "percentiles3": {
        "total": "35910",
        "ok": "35911",
        "ko": "31134"
    },
    "percentiles4": {
        "total": "35999",
        "ok": "36000",
        "ko": "31187"
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
    "count": 197,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.405",
        "ok": "5.324",
        "ko": "0.081"
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
        "ok": "197",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "8130",
        "ok": "8130",
        "ko": "23458"
    },
    "maxResponseTime": {
        "total": "36051",
        "ok": "36051",
        "ko": "31200"
    },
    "meanResponseTime": {
        "total": "28588",
        "ok": "28590",
        "ko": "28401"
    },
    "standardDeviation": {
        "total": "6722",
        "ok": "6760",
        "ko": "3505"
    },
    "percentiles1": {
        "total": "30279",
        "ok": "30276",
        "ko": "30544"
    },
    "percentiles2": {
        "total": "34791",
        "ok": "34806",
        "ko": "30872"
    },
    "percentiles3": {
        "total": "35910",
        "ok": "35911",
        "ko": "31134"
    },
    "percentiles4": {
        "total": "35999",
        "ok": "36000",
        "ko": "31187"
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
    "count": 197,
    "percentage": 99
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 2
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.405",
        "ok": "5.324",
        "ko": "0.081"
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
