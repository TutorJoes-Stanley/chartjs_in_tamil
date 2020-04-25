const ctx=document.getElementById("myLine");
let lineChart=new Chart(ctx,{
    type:'line',
    data:{
       labels:["January","Febuary","March","April","May","June","July"], 
       datasets:[{
        label:"Monthly Sales 2019",
        fill:false,
        lineTension:0.5,
        backgroundColor:"rgba(234, 32, 39,1.0)",
        borderColor:"rgba(52, 152, 219,1.0)",
        borderCapStyle:'round',
        borderJoinStyle:'round',
        pointBorderColor:"rgba(196, 229, 56,1.0)",
        pointBackgroundColor:"rgba(0, 98, 102,1.0)",
        pointHoverBorderColor:"rgba(26, 188, 156,1.0)",
        pointHoverBackgroundColor:"rgba(211, 84, 0,1.0)",
        pointHoverBorderWidth:3,
        pointRadius:3,
        data:[65,59,38,80,55,54,40]
       },{
        label:"Monthly Sales 2020",
        fill:false,
        lineTension:0.5,
        backgroundColor:"rgba(255, 88, 39,1.0)",
        borderColor:"rgba(23, 152, 55,1.0)",
        borderCapStyle:'round',
        borderJoinStyle:'round',
        pointBorderColor:"rgba(85, 85, 56,1.0)",
        pointBackgroundColor:"rgba(25, 98, 85,1.0)",
        pointHoverBorderColor:"rgba(26, 85, 156,1.0)",
        pointHoverBackgroundColor:"rgba(23, 84, 0,1.0)",
        pointHoverBorderWidth:3,
        pointRadius:3,
        data:[28,59,88,40,85,62,90]
       }]
    }
});