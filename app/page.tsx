// @ts-nocheck

"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Search, Bell, LogOut, ChevronRight, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({ title, value }) => (
  <Card className="bg-white shadow-sm">
    <CardContent className="p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </CardContent>
  </Card>
);

const InvestmentLocationMap = () => {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">País de Inversión</h2>
          <span className="text-gray-400">
            <ChevronRight />
          </span>
        </div>
        <div className="relative">
          <Image
            src="/mapa-mundo.png"
            alt="Mapa de Florida, Estados Unidos"
            width={400}
            height={400}
          />
          <div className="absolute" style={{ top: "28%", left: "14%" }}>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-0"></div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          100% en Florida, Estados Unidos
        </p>
      </CardContent>
    </Card>
  );
};

const PaymentItem = ({ date, amount, isPaid }) => (
  <div className="flex justify-between items-center py-3 border-b border-gray-100">
    <div>
      <p className="font-medium">{date}</p>
      <p className="text-sm text-gray-500">
        Interés {isPaid ? "pagado" : "a pagar"}: USD$ {amount}
      </p>
    </div>
    {isPaid ? (
      <span className="text-green-500 text-sm font-medium">Pagado</span>
    ) : (
      <span className="text-blue-500 text-sm font-medium">Pendiente</span>
    )}
  </div>
);

const interestData = [
  { name: "Ene '25", value: 3500 },
  { name: "Jul '25", value: 3500 },
  { name: "Ene '26", value: 3500 },
  { name: "Jul '26", value: 3500 },
  { name: "Ene '27", value: 3500 },
];

const VestingPartnersDashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Image
              src="/vp.png"
              alt="Vesting Partners"
              width={240}
              height={40}
            />
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-500" />
              <div className="text-sm text-right">
                <p className="font-medium">Juan Pablo Roselló</p>
                <p className="text-gray-500">Inversionista</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-4">Resumen de Inversión</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DashboardCard title="INVERSIÓN VIGENTE" value="USD$ 100.000" />
              <DashboardCard title="TASA DE INTERÉS ANUAL" value="70%" />
              <Card className="bg-white shadow-sm">
                <CardContent className="p-4 flex flex-col justify-between h-full">
                  <h3 className="text-sm font-medium text-gray-500">
                    CARTERA TOTAL
                  </h3>
                  <Link
                    href="/productos"
                    className="mt-2 px-4 py-2 border rounded-lg text-sm font-medium flex items-center justify-center hover:bg-gray-100 transition"
                  >
                    Cartera total Vesting Inc
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="text-lg font-semibold mb-4">Mis Pagos</h2>
                <Card>
                  <CardContent className="p-4">
                    <PaymentItem
                      date="15 julio 2024"
                      amount="3.500"
                      isPaid={true}
                    />
                    <PaymentItem
                      date="15 enero 2025"
                      amount="3.500"
                      isPaid={false}
                    />
                    <PaymentItem
                      date="15 julio 2025"
                      amount="3.500"
                      isPaid={false}
                    />
                  </CardContent>
                </Card>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4">
                  Intereses por Pagar
                </h2>
                <Card>
                  <CardContent className="p-4">
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={interestData}>
                        <XAxis
                          dataKey="name"
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis axisLine={false} tickLine={false} />
                        <Bar
                          dataKey="value"
                          fill="#3b82f6"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h2 className="text-lg font-semibold mb-4">Documentos</h2>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <button className="w-full flex items-center gap-4 p-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition">
                      <FileText /> Certificado 1° Aporte
                    </button>
                    <button className="w-full flex items-center gap-4 p-2 text-left text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition">
                      <FileText /> Cartola 2° semestre 2024
                    </button>
                  </CardContent>
                </Card>
              </section>

              <InvestmentLocationMap />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VestingPartnersDashboard;
