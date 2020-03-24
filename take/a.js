$(function() {
    var i = {
        title: {
            text: "JavaScript语言排名变化"
        },
        tooltip: {},
        legend: {
            data: ["信息量"]
        },
        xAxis: {
            type: 'category',
            data: [2000,2005,2010,2015,2020]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: "信息量",
            type: "line",
            data: [6,9,8,8,7],
        }]
    };
    echarts.init($(".main2").get(0)).setOption(i);
    var e = $(".main1");
    return new Handsontable(e.get(0),{
        data: [["Java", "1", "降", "-0.01%"], 
        ["C", "2", "升", "+2.44%"], 
        ["Python", "3", "升", "+1.41%"], 
        ["C++", "4", "降", "-2.58%"], 
        ["C#", "5", "升", "+2.07%"], 
        ["Vlsual Basic .NET", "6", "降", "-1.17%"], 
        ["JavaScript", "7", "降", "-0.85%"]],
        contextMenu: !0,
        manualRowResize: !0,
        manualColumnResize: !0,
        rowHeaders: !0,
        rowHeights:40,
        colWidths:150,
        rowHeaders:false,
        className: "htCenter htMiddle",
        colHeaders: ["语言名称", "排名", "升或降", "变化强度"]
    })
    
});
