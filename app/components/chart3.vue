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

            const updateChartOptions = () => {
                const width = window.innerWidth;
                const isMobile = width < 640;
                const isTablet = width >= 640 && width < 1024;
                
                const fontSize = isMobile ? 10 : isTablet ? 11 : 12;
                const barWidth = isMobile ? '50%' : '40%';
                const gridLeft = isMobile ? '5%' : '3%';
                const gridRight = isMobile ? '5%' : '4%';
                const axisLabelFontSize = isMobile ? 10 : 12;

                const option = {
                    color: ["#211658"],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: { type: 'shadow' },
                        textStyle: {
                            fontSize: fontSize
                        }
                    },
                    grid: { 
                        left: gridLeft, 
                        right: gridRight, 
                        bottom: '3%', 
                        containLabel: true 
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['2022', '2023', '2024', '', 'Q1/2025'],
                            axisTick: { alignWithLabel: true },
                            axisLabel: {
                                fontSize: axisLabelFontSize
                            }
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
                            barWidth: barWidth,
                            barCategoryGap: '5%',
                            barGap: '0%',
                            data: [105.15, 50.33, 56.95, null, -20.82],
                            label: {
                                show: true,
                                fontSize: fontSize,
                                rich: {
                                    bold: {
                                        fontWeight: "bold",
                                        color: "#211658",
                                        fontSize: fontSize,
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
                                    width: isMobile ? 1 : 2
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
            };

            updateChartOptions();
            
            window.addEventListener('resize', () => {
                myChart.resize();
                updateChartOptions();
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
            <div class="flex flex-col justify-center items-center px-3 w-full max-w-[600px]">
                <div class="w-full flex flex-col justify-center items-center rounded-[10px] shadow-lg shadow-[#cec9ea] py-3 px-4">
                    <h1 class="text-base sm:text-lg md:text-2xl lg:text-[23px] font-bold text-center text-[#6350EB] pt-2">NET PROFIT</h1>
                    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-[69px] font-bold text-center text-[#140A4B] pt-2">-20.82</h1>
                    <h1 class="text-sm sm:text-base md:text-xl lg:text-[19px] font-bold text-center text-[#140A4B] pt-2">Million Baht</h1>
                </div>
                <div id="NetProfitChart" class="w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px]"></div>
            </div>
        </div>
    </div>
</template>
