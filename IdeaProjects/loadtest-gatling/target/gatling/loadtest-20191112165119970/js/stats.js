var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5400",
        "ok": "4228",
        "ko": "1172"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "4018"
    },
    "maxResponseTime": {
        "total": "23000",
        "ok": "22200",
        "ko": "23000"
    },
    "meanResponseTime": {
        "total": "2519",
        "ok": "1644",
        "ko": "5677"
    },
    "standardDeviation": {
        "total": "2640",
        "ok": "2058",
        "ko": "2022"
    },
    "percentiles1": {
        "total": "1462",
        "ok": "997",
        "ko": "4791"
    },
    "percentiles2": {
        "total": "4241",
        "ok": "2083",
        "ko": "6599"
    },
    "percentiles3": {
        "total": "7738",
        "ok": "6763",
        "ko": "9706"
    },
    "percentiles4": {
        "total": "10210",
        "ok": "8870",
        "ko": "12188"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1767,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 677,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1784,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 1172,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.525",
        "ok": "71.661",
        "ko": "19.864"
    }
},
contents: {
"req_helloworld-68e10": {
        type: "REQUEST",
        name: "HelloWorld",
path: "HelloWorld",
pathFormatted: "req_helloworld-68e10",
stats: {
    "name": "HelloWorld",
    "numberOfRequests": {
        "total": "5400",
        "ok": "4228",
        "ko": "1172"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "4018"
    },
    "maxResponseTime": {
        "total": "23000",
        "ok": "22200",
        "ko": "23000"
    },
    "meanResponseTime": {
        "total": "2519",
        "ok": "1644",
        "ko": "5677"
    },
    "standardDeviation": {
        "total": "2640",
        "ok": "2058",
        "ko": "2022"
    },
    "percentiles1": {
        "total": "1462",
        "ok": "997",
        "ko": "4791"
    },
    "percentiles2": {
        "total": "4241",
        "ok": "2083",
        "ko": "6599"
    },
    "percentiles3": {
        "total": "7738",
        "ok": "6763",
        "ko": "9706"
    },
    "percentiles4": {
        "total": "10210",
        "ok": "8870",
        "ko": "12188"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1767,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 677,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1784,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 1172,
    "percentage": 22
},
    "meanNumberOfRequestsPerSecond": {
        "total": "91.525",
        "ok": "71.661",
        "ko": "19.864"
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
