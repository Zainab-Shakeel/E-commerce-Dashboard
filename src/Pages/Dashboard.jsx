import App from "../App";
import React from "react";
import { DollarSign, ShoppingCart, Users } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Dashboard() {

    //flashcards
    const stats = [
        {
            title: "Total Sales",
            value: "$31,000",
            icon: <DollarSign className="text-green-500 w-8 h-8" />,
        },
        {
            title: "Orders",
            value: "320",
            icon: <ShoppingCart className="text-blue-500 w-8 h-8" />,
        },
        {
            title: "Customers",
            value: "180",
            icon: <Users className="text-purple-500 w-8 h-8" />,
        }
    ]

    //graph
    const salesData= {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Sales",
                data: [3000, 2000, 4000, 5000, 3000, 5000, 9000],
                fill: false,
                borderColor: '#3b82f6',
                tension: 0.3
            }
        ]
    }


    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
                        <div>
                            {item.icon}
                        </div>
                        <div>
                            <h2 className="text-pink-800 text-xl font-semibold">{item.title}</h2>
                            <p className="text-gray-500 text-2xl">{item.value}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="mt-10 text-black bg-white rounded-lg p-6 shadow-md ">
                <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
                <Line data={salesData}/>
            </div>
        </div>
    )
}

export default Dashboard;