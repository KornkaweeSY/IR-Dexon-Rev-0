<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const chartRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (chartRef.value) {
        const myChart = echarts.init(chartRef.value)
        
        const option = {
            title: {
                text: 'Revenue Distribution',
                left: 'center',
                top: '0%',
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#1f2937'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: '#e5e7eb',
                borderWidth: 1,
                textStyle: {
                    color: '#374151',
                    fontSize: 14
                },
                padding: [10, 15],
                extraCssText: 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px;'
            },
            legend: {
                bottom: '0%',
                left: 'center',
                itemGap: 10,
                textStyle: {
                    fontSize: 13,
                    color: '#6b7280'
                },
                icon: 'circle'
            },
            color: [
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#3b82f6' },
                    { offset: 1, color: '#1d4ed8' }
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#8b5cf6' },
                    { offset: 1, color: '#6d28d9' }
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#ec4899' },
                    { offset: 1, color: '#be185d' }
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#f59e0b' },
                    { offset: 1, color: '#d97706' }
                ]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#10b981' },
                    { offset: 1, color: '#059669' }
                ])
            ],
            series: [
                {
                    name: 'Revenue',
                    type: 'pie',
                    radius: ['45%', '75%'],
                    center: ['50%', '50%'],
                    avoidLabelOverlap: false,
                    padAngle: 3,
                    itemStyle: {
                        borderRadius: 8,
                        borderColor: '#fff',
                        borderWidth: 3,
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.1)'
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 32,
                            fontWeight: 'bold',
                            color: '#1f2937',
                            formatter: '{d}%'
                        },
                        itemStyle: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.2)',
                            scale: true,
                            scaleSize: 10
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 1048, name: 'Product Sales' },
                        { value: 735, name: 'Services' },
                        { value: 580, name: 'Licensing' },
                        { value: 484, name: 'Consulting' },
                    ]
                }
            ]
        }
        
        myChart.setOption(option)
        
        window.addEventListener('resize', () => {
            myChart.resize()
        })
    }
})
</script>

<template>
    <div class="flex flex-col h-full">
        <div ref="chartRef" class="w-full flex-1 min-h-[400px]"></div>
    </div>
</template>