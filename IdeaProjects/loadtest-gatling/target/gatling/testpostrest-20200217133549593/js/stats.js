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
        "total": "5548",
        "ok": "5548",
        "ko": "26620"
    },
    "maxResponseTime": {
        "total": "27826",
        "ok": "27826",
        "ko": "26620"
    },
    "meanResponseTime": {
        "total": "19853",
        "ok": "19819",
        "ko": "26620"
    },
    "standardDeviation": {
        "total": "5718",
        "ok": "5712",
        "ko": "0"
    },
    "percentiles1": {
        "total": "20502",
        "ok": "20455",
        "ko": "26620"
    },
    "percentiles2": {
        "total": "24988",
        "ok": "24983",
        "ko": "26620"
    },
    "percentiles3": {
        "total": "27360",
        "ok": "27361",
        "ko": "26620"
    },
    "percentiles4": {
        "total": "27755",
        "ok": "27755",
        "ko": "26620"
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
        "total": "7.143",
        "ok": "7.107",
        "ko": "0.036"
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
        "total": "5548",
        "ok": "5548",
        "ko": "26620"
    },
    "maxResponseTime": {
        "total": "27826",
        "ok": "27826",
        "ko": "26620"
    },
    "meanResponseTime": {
        "total": "19853",
        "ok": "19819",
        "ko": "26620"
    },
    "standardDeviation": {
        "total": "5718",
        "ok": "5712",
        "ko": "0"
    },
    "percentiles1": {
        "total": "20502",
        "ok": "20455",
        "ko": "26620"
    },
    "percentiles2": {
        "total": "24988",
        "ok": "24983",
        "ko": "26620"
    },
    "percentiles3": {
        "total": "27360",
        "ok": "27361",
        "ko": "26620"
    },
    "percentiles4": {
        "total": "27755",
        "ok": "27755",
        "ko": "26620"
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
        "total": "7.143",
        "ok": "7.107",
        "ko": "0.036"
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
