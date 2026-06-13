import React from 'react'
'use client'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: "Auftritt 1",
        menge: 5
    },
    {
        name: "Auftritt 2",
        menge: 7
    },
    {
        name: "Auftritt 3",
        menge: 3
    }
]

function AreaChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={data} >
                <Area dataKey="name" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default AreaChartComponent



