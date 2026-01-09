<script setup>
import * as echarts from "echarts";

onMounted(() => {
    const initChart = () => {
        const chartDom = document.getElementById("NetProfitChart");
        
        if (!chartDom) {
            setTimeout(initChart, 100);
            return;
        }

        try {
            const myChart = echarts.init(chartDom);

            const option = {
                color: ["#211658"],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow' }
                },
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                xAxis: [
                    {
                        type: 'category',
                        data: ['2022', '2023', '2024', '', 'Q1/2025'],
                        axisTick: { alignWithLabel: true }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: false
                    }
                ],
                series: [
                    {
                        name: 'Net Profit',
                        type: 'bar',
                        barWidth: '40%',
                        barCategoryGap: '5%',
                        barGap: '0%',
                        data: [105.15, 50.33, 56.95, null, -20.82],
                        label: {
                            show: true,
                            fontSize: 12,
                            rich: {
                                bold: {
                                    fontWeight: "bold",
                                    color: "#211658",
                                    fontSize: 12,
                                },
                            },
                            position: 'top',
                            formatter: '{bold|{c}}',
                        },
                        markLine: {
                            symbol: 'none',
                            lineStyle: {
                                type: 'dashed',
                                color: '#888',
                                width: 2
                            },
                            data: [
                                {
                                    label: {
                                        show: false
                                    },
                                    xAxis: 2.5,
                                }
                            ]
                        }
                    }
                ]
            };

            myChart.setOption(option);
            
            window.addEventListener('resize', () => {
                myChart.resize()
            })
        } catch (error) {
            console.error('Failed to initialize chart:', error);
        }
    };
    
    nextTick(() => {
        setTimeout(initChart, 100);
    });
});
</script>

<template>
    <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center">
            <div class="flex flex-col justify-center items-center px-3">
                <div class="w-full flex flex-col justify-center items-center rounded-[10px] shadow-lg shadow-[#cec9ea] py-3">
                    <h1 class="text-lg md:text-2xl lg:text-[23px] font-bold text-center md:text-start text-[#6350EB] px-19 pt-2">NET PROFIT</h1>
                    <h1 class="text-lg md:text-2xl lg:text-[69px] font-bold text-center md:text-start text-[#140A4B] px-19 pt-2">-20.82</h1>
                    <h1 class="text-md md:text-xl lg:text-[19px] font-bold text-center md:text-start text-[#140A4B] px-19 pt-2">Million Baht</h1>
                </div>
                <div id="NetProfitChart" class="w-[400px] h-[320px]"></div>
            </div>
        </div>
    </div>
</template>
