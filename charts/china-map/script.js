function addElement(parentId, elementTag, elementId, className, html, width, height) {
    // Adds an element to the document
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', className);
    newElement.innerHTML = html;

    if (width != undefined || height != undefined) {
        var style = "";
        if (width != undefined && width != "") {
            style += "width:" + width + "px;"
        }

        if (height != undefined && width != height) {
            style += "height:" + height + "px;"
        }

        newElement.setAttribute('style', style);
    }

    p.appendChild(newElement);
}

var lang = 1;
var categoryLabel = 'Category';

(function () {
    var htmlTemplate = "<div id='vis-BusinessConcentration'></div>";

    var width = "480";

    var height = "320";

    addElement("BusinessConcentration", "div", "vis", "visualization-container", htmlTemplate, width, height);

    if ("BusinessConcentration" == "RiskRatingBarometerIndustry" || "BusinessConcentration" == "RiskRatingBarometerSector" || "BusinessConcentration" == "BusinessConcentration") {
        setTimeout(createChart(), 500);
    } else {
        createChart();
    }

    function createChart() {

        if (typeof window['Highcharts'] !== 'undefined') {

            var optionsNew = {
                "credits": {
                    "text": "Cotton Growing in China<br/>Source: IBISWorld",
                    "href": "https://www.ibisworld.com",
                    "enabled": false,
                    position: {
                        align: 'right',
                        y: -15
                    }
                },
                "series": [{
                    "allAreas": true,
                    "data": [{
                        "name": "Anhui",
                        "value": 5.4
                    }, {
                        "name": "Beijing",
                        "value": 40.0
                    }, {
                        "name": "Chongqing",
                        "value": 18.0
                    }, {
                        "name": "Fujian",
                        "value": 0.0
                    }, {
                        "name": "Gansu",
                        "value": 0.4
                    }, {
                        "name": "Guangdong",
                        "value": 34.0
                    }, {
                        "name": "Guangxi",
                        "value": 0.1
                    }, {
                        "name": "Guizhou",
                        "value": 0.0
                    }, {
                        "name": "Hainan",
                        "value": 0.0
                    }, {
                        "name": "Hebei",
                        "value": 1.5
                    }, {
                        "name": "Heilongjiang",
                        "value": 0.0
                    }, {
                        "name": "Henan",
                        "value": 23.0
                    }, {
                        "name": "Hubei",
                        "value": 6.0
                    }, {
                        "name": "Hunan",
                        "value": 3.1
                    }, {
                        "name": "Inner Mongol",
                        "value": 0.0
                    }, {
                        "name": "Jiangsu",
                        "value": 21.9
                    }, {
                        "name": "Jiangxi",
                        "value": 2.3
                    }, {
                        "name": "Jilin",
                        "value": 0.0
                    }, {
                        "name": "Liaoning",
                        "value": 0.0
                    }, {
                        "name": "Ningxia",
                        "value": 0.0
                    }, {
                        "name": "Qinghai",
                        "value": 0.0
                    }, {
                        "name": "Shaanxi",
                        "value": 0.7
                    }, {
                        "name": "Shandong",
                        "value": 2.8
                    }, {
                        "name": "Shanghai",
                        "value": 40.0
                    }, {
                        "name": "Shanxi",
                        "value": 0.2
                    }, {
                        "name": "Sichuan",
                        "value": 18.3
                    }, {
                        "name": "Tianjin",
                        "value": 3.6
                    }, {
                        "name": "Xizang",
                        "value": 0.0
                    }, {
                        "name": "Xinjiang",
                        "value": 1.4
                    }, {
                        "name": "Yunnan",
                        "value": 0.0
                    }, {
                        "name": "Zhejiang",
                        "value": 5.3
                    }],
                    "nullColor": "#7F7F89"
                }],
                "colorAxis": {
                    "min": 0,
                    "max": 100,
                    "tickLength": 10,
                    "tickInterval": 10,
                    "tickAmount": 5
                },
                "annotations": [{
                    "labels": [{
                        "backgroundColor": "rgba(255, 255, 255, 0)",
                        "borderColor": "white",
                        "borderWidth": 0,
                        "point": {
                            "x": 593.0,
                            "y": 512.0
                        },
                        "text": "<span style='font-size:11px;font-weight:bold;color:black;'></span>",
                        "style": {
                            "fontSize": "14px",
                            "color": "#D47500",
                            "fontFamily": "roboto",
                            "fontWeight": "500",
                            "textShadow": false,
                            "textOutline": false
                        },
                        "useHTML": true
                    }],
                    "draggable": ""
                }]
            };

            var options = {
                chart: {
                    map: 'countries/cn/custom/cn-all-sar-taiwan',
                    width: 480,
                    height: 320,
                    marginTop: 16,
                },
                exporting: {
                    buttons: {
                        contextButton: {
                            symbol: 'url()',
                            x: -10,
                            y: 0,
                            symbolSize: 25,
                            symbolX: 25.0,
                            symbolY: 25.0,
                            menuItems: ['viewFullscreen', 'printChart', 'separator', 'downloadPNG', 'downloadCSV', 'viewData']
                        }
                    },
                    enabled: false
                },

                title: {
                    text: '',
                    align: 'center',
                    style: {
                        color: '#333333',
                        fontSize: '16px',
                        lineHeight: '20px',
                        fontWeight: '500',
                        fontFamily: 'Noto Sans, Roboto',
                    },
                    enabled: true,
                },
                legend: {
                    title: {
                        text: 'Percentage of Production areas (%)',
                        style: {
                            color: '#333333',
                            fontSize: '14px',
                            lineHeight: '18px',
                            fontWeight: 'normal',
                        },
                    },
                    borderWidth: 0,
                    backgroundColor: 'rgba(255,255,255,0.85)',
                    floating: true,
                    layout: 'horizontal',
                    verticalAlign: 'bottom',
                    y: 0,

                    align: 'left',
                    enabled: false
                },
                credits: {
                    enabled: false
                },

                tooltip: {
                    valueDecimals: 1,
                    backgroundColor: '#FFFFFF',
                    borderColor: '#fff',
                    borderRadius: 4,
                    style: {
                        padding: 0,
                    },
                    useHTML: true,
                    formatter: function () {
                        //console.log(this);
                        return '<div class="map-tooltip">' + '<span style="color:' + this.point.color + '">\u25CF</span><br>' + '<div class="label">' + this.point.name + '<br>' + this.point.value + '%' + '</div>' + '</div>';
                    },
                },
                plotOptions: {
                    map: {
                        borderColor: 'white',
                        borderWidth: 1,
                        states: {
                            hover: {
                                color: '#fff'
                            }
                        },
                        joinBy: ['name', 'name'],
                        dataLabels: {
                            align: 'center',
                            enabled: false,
                            allowOverlap: true,
                            style: {
                                color: '#002F65',
                                fontSize: '14px',
                                fontWeight: 'normal',
                                textOutline: '1px #FFFFFF'
                            },
                            formatter: function () {
                                var max = 20
                                    , color = this.point.value < max ? 'black' : 'white'
                                    , point = this.point;
                                //console.log(this);
                                //return '<span style="color: ' + color + '">' + this.point.properties['postal-code'] + '</span>';      
                                //return '<span style="color: ' + color + '">' + this.point.series.mapData.properties.name + '</span>';   

                                if (this.point.name == 'Norfolk Island' || this.point.name == undefined || this.point.name == 'Bounty Islands' || this.point.name == 'The Snares') {
                                } else if (this.series.mapTitle == 'Australia') {
                                    if (this.point['hc-a2'] == 'CT') {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px;">ACT</span><br>';
                                    } else if (this.point['hc-a2'] == 'NS') {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px; ">NSW</span><br>';
                                    } else if (this.point['hc-a2'] == 'QL') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">QLD</span><br>';
                                    } else if (this.point['hc-a2'] == 'TS') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">TAS</span><br>';
                                    } else if (this.point['hc-a2'] == 'VI') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">VIC</span><br>';
                                    } else {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">' + this.point['hc-a2'] + '</span><br>';
                                    }
                                } else if (this.series.mapMap.Dublin) {
                                    var point = this.point;
                                    if (this.key == 'Mid-East') {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px;">ME</span><br>';
                                    } else if (this.key == 'South-West') {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px; ">SW</span><br>';
                                    } else if (this.key == 'South-East') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">SE</span><br>';
                                    } else if (this.key == 'Midland') {
                                        window.setTimeout(function () {
                                            point.dataLabel.attr({
                                                x: 535
                                            });
                                        });
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">MD</span><br>';
                                    } else if (this.key == 'Mid-West') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">MW</span><br>';
                                    } else if (this.key == 'Border') {
                                        window.setTimeout(function () {
                                            point.dataLabel.attr({
                                                y: 175
                                            });
                                        });
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">BO</span><br>';
                                    } else if (this.key == 'West') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">W</span><br>';
                                    } else if (this.key == 'Dublin') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">DU</span><br>';
                                    } else {
                                        return '';
                                    }
                                } else if (this.series.mapMap.Scotland) {
                                    if (this.key == 'Scotland') {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px;">SCT</span><br>';
                                    } else if (this.key == 'Wales') {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px; ">WAL</span><br>';
                                    } else if (this.key == 'East Midlands') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">EMD</span><br>';
                                    } else if (this.key == 'South West') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">SW</span><br>';
                                    } else if (this.key == 'Northern Ireland') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">NIR</span><br>';
                                    } else if (this.key == 'Yorkshire') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">YKS</span><br>';
                                    } else if (this.key == 'North East') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">NE</span><br>';
                                    } else if (this.key == 'North West') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">NW</span><br>';
                                    } else if (this.key == 'South East') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">SE</span><br>';
                                    } else if (this.key == 'West Midlands') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">WMD</span><br>';
                                    } else if (this.key == 'East of England') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">‎UKH</span><br>';
                                    } else if (this.key == 'London') {
                                        return '<span style="color: #002F65; font-weight:bold; font-size:12px; ">‎LDN</span><br>';
                                    } else {
                                        return '';
                                    }
                                } else if (this.series.mapTitle == 'United States of America' || this.series.mapTitle == 'Canada' || this.series.mapTitle == 'China with Hong Kong, Macau, and Taiwan' || this.series.mapTitle == 'New Zealand' || this.series.mapTitle == 'Germany') {
                                    //console.log(this.key, this);
                                    if (this.key == 'Tai Po') {
                                        window.setTimeout(function () {
                                            point.dataLabel.attr({
                                                x: 380
                                            });
                                        });
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px;">HK</span><br>';
                                    }
                                    if (this.key == 'Macau') {
                                        window.setTimeout(function () {
                                            point.dataLabel.attr({
                                                x: 600
                                            });
                                        });
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px;">MA</span><br>';
                                    }
                                    if ((this.point.properties && this.point.properties.country == 'Hong Kong') || (this.point.properties && this.point.properties.country == 'Hong Kong S.A.R.') || (this.point.properties && this.point.properties.country == 'Taiwan') || this.key == 'Paracel Islands') {
                                        return;
                                    }

                                    try {
                                        return '<span style="color: #002F65; font-weight:bold;font-size:12px;">' + this.point.properties['hc-a2'] + '</span><br>';
                                    } catch (err) { }
                                } else {
                                    return '<span style="color: #002F65; font - weight:bold; font - size:12px; ">' + this.point.name + '</span><br>';
                                }
                            },
                        },
                    },
                },
            };

            if (options.yAxis && options.yAxis.length === 1)
                options.yAxis = options.yAxis[0];
            if (options.xAxis && options.xAxis.length === 1)
                options.xAxis = options.xAxis[0];
            if (options.zAxis && options.zAxis.length === 1)
                options.zAxis = options.zAxis[0];

            Highcharts.merge(true, options, optionsNew);

            if (options && (options.lang || options.global)) {

                Highcharts.setOptions({
                    global: options.global || {},
                    lang: options.lang || {}
                });

            }
            if (1 == 2) {
                Highcharts.setOptions({
                    lang: {
                        decimalPoint: ',',
                        thousandsSep: '.',
                        viewFullscreen: 'Im Vollbildmodus anzeigen',
                        printChart: 'Grafik drucken',
                        downloadPNG: 'PNG-Datei herunterladen',
                        downloadCSV: 'CSV-Datei herunterladen',
                        viewData: 'Datentabelle anzeigen',
                        resetZoom: 'Zoom zurücksetzen',
                        loading: 'Wird geladen …'
                    }
                });
            }

            if ("BusinessConcentration" == "IndustryOutlook" || "BusinessConcentration" == "IndustryTradeBalance") {
                Highcharts.setOptions({
                    lang: {
                        numericSymbols: null
                    }
                });
            }

            var chart = new Highcharts.mapChart('vis-BusinessConcentration', options);

            if (chart) {
                if (chart.options.exporting.buttons.contextButton.menuItems.length == 3) {
                    chart.options.exporting.buttons.contextButton.menuItems[2].text = 'View Data'.toUpperCase();
                }
            }

        }
    }

}());

chart.series[0].update({
    borderWidth: 3,
    borderColor: '#FF0000'
})