import React from "react";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Chart extends React.Component {

    data = [
        {
            "date": "Jan 2019",
            "item A": 34,
            "Procuct B": 23
        },
        {
            "date": "Feb 2019",
            "item A": 23,
            "Procuct B": 46
        },
        {
            "date": "Mar 2019",
            "item A": 65,
            "Procuct B": 45
        },
        {
            "date": "Apr 2019",
            "item A": 54,
            "Procuct B": 65
        },
        {
            "date": "May 2019",
            "item A": 87,
            "Procuct B": 45
        }
    ]

    render() {
        return (
            <LineChart width={730} height={250} data={this.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="item A" stroke="#0095FF" />
                <Line type="monotone" dataKey="item B" stroke="#FF0000" />
            </LineChart>
        )
    };
}

export default Chart;