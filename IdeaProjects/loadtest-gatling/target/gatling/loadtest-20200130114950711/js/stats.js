var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "7000",
        "ok": "4208",
        "ko": "2792"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "177",
        "ko": "2589"
    },
    "maxResponseTime": {
        "total": "20082",
        "ok": "20082",
        "ko": "19528"
    },
    "meanResponseTime": {
        "total": "10426",
        "ok": "9276",
        "ko": "12158"
    },
    "standardDeviation": {
        "total": "5920",
        "ok": "6397",
        "ko": "4603"
    },
    "percentiles1": {
        "total": "9781",
        "ok": "5045",
        "ko": "11931"
    },
    "percentiles2": {
        "total": "16677",
        "ok": "16784",
        "ko": "16249"
    },
    "percentiles3": {
        "total": "19006",
        "ok": "19057",
        "ko": "18917"
    },
    "percentiles4": {
        "total": "19740",
        "ok": "19818",
        "ko": "19429"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4204,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 2792,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "318.182",
        "ok": "191.273",
        "ko": "126.909"
    }
},
contents: {
"req_gethelloworld-d695b": {
        type: "REQUEST",
        name: "GetHelloWorld",
path: "GetHelloWorld",
pathFormatted: "req_gethelloworld-d695b",
stats: {
    "name": "GetHelloWorld",
    "numberOfRequests": {
        "total": "7000",
        "ok": "4208",
        "ko": "2792"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "177",
        "ko": "2589"
    },
    "maxResponseTime": {
        "total": "20082",
        "ok": "20082",
        "ko": "19528"
    },
    "meanResponseTime": {
        "total": "10426",
        "ok": "9276",
        "ko": "12158"
    },
    "standardDeviation": {
        "total": "5920",
        "ok": "6397",
        "ko": "4603"
    },
    "percentiles1": {
        "total": "9778",
        "ok": "5045",
        "ko": "11932"
    },
    "percentiles2": {
        "total": "16678",
        "ok": "16784",
        "ko": "16249"
    },
    "percentiles3": {
        "total": "19006",
        "ok": "19057",
        "ko": "18917"
    },
    "percentiles4": {
        "total": "19740",
        "ok": "19818",
        "ko": "19429"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4204,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 2792,
    "percentage": 40
},
    "meanNumberOfRequestsPerSecond": {
        "total": "318.182",
        "ok": "191.273",
        "ko": "126.909"
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
