const chart = document.querySelector("#myChart").getContext('2d');



new Chart(chart, {
    type:"line",
    data:{
        labels :["Feb14","Feb15","Feb16","Feb17","Feb18","Feb19","Feb20"],
        datasets :[
            {
                label:"🔵 15Feb",
                data:[14, 15, 17, 17, 20, 18, 17],
                borderColor:"red",
                fill:true

            },
            {
                label:"🔵 08Feb",
                data:[15, 13, 14, 18, 17, 16, 15],
                borderColor:"blue",
                fill:true

            },
          
        ]
    },
    options:{
        responsive:true
    }
})