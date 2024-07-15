"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Bell, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const lineChartData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 55 },
  { name: "Apr", value: 80 },
  { name: "May", value: 100 },
  { name: "Jun", value: 120 },
  { name: "Jul", value: 135 },
  { name: "Aug", value: 145 },
  { name: "Sep", value: 155 },
  { name: "Oct", value: 210 },
  { name: "Nov", value: 230 },
  { name: "Dec", value: 245 },
];

const pieChartData = [
  { name: "MBA", value: 5, color: "#FF6B6B" },
  { name: "Real State", value: 30, color: "#4ECDC4" },
  { name: "Automotriz", value: 25, color: "#7F7FD5" },
  { name: "Downpayment Inmobilario", value: 20, color: "#FFA500" },
  { name: "Bridge Loan", value: 10, color: "#FFD166" },
  { name: "Structured Loan", value: 10, color: "#7F7FD5" },
];

//@ts-ignore
const StatCard = ({ title, value }) => (
  <Card className="bg-white shadow-sm">
    <CardContent className="p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </CardContent>
  </Card>
);

export default function ProductosPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Link href="/">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Image
              src="/vp.png"
              alt="Vesting Partners"
              width={360}
              height={40}
            />
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500" />
              <div className="text-sm">
                <p className="font-medium">Juan Pablo Roselló</p>
                <p className="text-gray-500">Inversionista</p>
              </div>
            </div>
          </div>
        </header>
      </Link>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold mb-6">Cartera/Vesting Inc</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Equity Total" value="US$ 5.000.000" />
          <StatCard title="Colaterales Totales" value="US$2.000.000" />
          <StatCard title="Vencimiento Promedio Cartera" value="12 Meses" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">
                  Evolución de la cartera
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Productos</h2>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap justify-center mt-4 gap-4">
                {pieChartData.map((entry, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm">{entry.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
