var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "360",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "19250",
        "ok": "19250",
        "ko": "51718"
    },
    "maxResponseTime": {
        "total": "78163",
        "ok": "78163",
        "ko": "77958"
    },
    "meanResponseTime": {
        "total": "58696",
        "ok": "57448",
        "ko": "69927"
    },
    "standardDeviation": {
        "total": "17631",
        "ok": "17973",
        "ko": "7815"
    },
    "percentiles1": {
        "total": "59815",
        "ok": "54845",
        "ko": "72151"
    },
    "percentiles2": {
        "total": "77138",
        "ok": "77152",
        "ko": "77123"
    },
    "percentiles3": {
        "total": "77363",
        "ok": "77363",
        "ko": "77291"
    },
    "percentiles4": {
        "total": "78130",
        "ok": "78133",
        "ko": "77711"
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
    "count": 360,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.063",
        "ok": "4.557",
        "ko": "0.506"
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
        "total": "400",
        "ok": "360",
        "ko": "40"
    },
    "minResponseTime": {
        "total": "19250",
        "ok": "19250",
        "ko": "51718"
    },
    "maxResponseTime": {
        "total": "78163",
        "ok": "78163",
        "ko": "77958"
    },
    "meanResponseTime": {
        "total": "58696",
        "ok": "57448",
        "ko": "69927"
    },
    "standardDeviation": {
        "total": "17631",
        "ok": "17973",
        "ko": "7815"
    },
    "percentiles1": {
        "total": "59815",
        "ok": "54845",
        "ko": "72151"
    },
    "percentiles2": {
        "total": "77138",
        "ok": "77152",
        "ko": "77123"
    },
    "percentiles3": {
        "total": "77363",
        "ok": "77363",
        "ko": "77291"
    },
    "percentiles4": {
        "total": "78130",
        "ok": "78133",
        "ko": "77711"
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
    "count": 360,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 40,
    "percentage": 10
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.063",
        "ok": "4.557",
        "ko": "0.506"
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
