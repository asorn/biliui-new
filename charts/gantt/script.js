const dataSource = {
  chart: {
    dateformat: "mm/dd/yyyy",
    theme: "gammel",
    useverticalscrolling: "0"
  },
  tasks: {
    task: [
      {
        start: "10/1/2023",
        end: "10/13/2023",
        // color: "#5D62B5"
        color: "#5B8FF9"
      },
      {
        start: "10/9/2023",
        end: "10/21/2023",
        // color: "#29C3BE"
        color: "#61DDAA"
      },
      {
        start: "10/22/2023",
        end: "11/4/2023",
        // color: "#5D62B5"
        color: "#65789B"
      },
      {
        start: "11/5/2023",
        end: "11/11/2023",
        // color: "#F2726F"
        color: "#F6BD16"
      },
      {
        start: "10/26/2023",
        end: "11/20/2023",
        // color: "#FFC533"
        color: "#F7736E"
      },
      {
        start: "11/18/2023",
        end: "12/12/2023",
        // color: "#F2726F"
        color: "#7262FD"
      },
      {
        start: "12/16/2023",
        end: "12/28/2023",
        // color: "#62B58F"
        color: "#78D3F8"
      }
    ]
  },
  processes: {
    align: "center",
    headertext: "   项目内容与规划   ",
    headervalign: "middle",
    headeralign: "center",
    process: [
      {
        label: "接口开发"
      },
      {
        label: "后端模块开发"
      },
      {
        label: "算法开发"
      },
      {
        label: "原型设计"
      },
      {
        label: "视觉设计"
      },
      {
        label: "前端页面开发"
      },
      {
        label: "版本提测"
      }
    ]
  },
  categories: [
    {
      category: [
        {
          start: "10/1/2023",
          end: "10/31/2023",
          label: "10 月"
        },
        {
          start: "11/1/2023",
          end: "11/30/2023",
          label: "11 月"
        },
        {
          start: "12/1/2023",
          end: "12/31/2023",
          label: "12 月"
        }
      ]
    },
    {
      category: [
        {
          start: "10/1/2023",
          end: "10/7/2023",
          label: "10-1"
        },
        {
          start: "10/8/2023",
          end: "10/14/2023",
          label: "10-8"
        },
        {
          start: "10/15/2023",
          end: "10/21/2023",
          label: "10-15"
        },
        {
          start: "10/22/2023",
          end: "10/28/2023",
          label: "10-22"
        },
        {
          start: "10/29/2023",
          end: "11/4/2023",
          label: "10-29"
        },
        {
          start: "11/5/2023",
          end: "11/11/2023",
          label: "11-5"
        },
        {
          start: "11/12/2023",
          end: "11/18/2023",
          label: "11-12"
        },
        {
          start: "11/19/2023",
          end: "11/25/2023",
          label: "11-19"
        },
        {
          start: "11/26/2023",
          end: "12/2/2023",
          label: "11-26"
        },
        {
          start: "12/3/2023",
          end: "12/9/2023",
          label: "12-3"
        },
        {
          start: "12/10/2023",
          end: "12/16/2023",
          label: "12-10"
        },
        {
          start: "12/17/2023",
          end: "12/23/2023",
          label: "12-17"
        },
        {
          start: "12/24/2023",
          end: "12/31/2023",
          label: "12-24"
        }
      ]
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "gantt",
    renderAt: "chart-container",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});