"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import {
  useGetActiveProductQuery,
  useGetAllProductQuery,
  useGetInActiveProductQuery,
} from "@/_redux/services/productApi";
import { formatNumber } from "@/components/utils/formatters";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import LoginPage from "../page";
import Protected from "../_components/Protected";

export const dynamic = "force-dynamic";

type DashboardBoardProps = {
  title: string;
  subtitle: string;
  body: string;
  loading: boolean;
};

export const DashboardCard = ({
  title,
  subtitle,
  body,
  loading,
}: DashboardBoardProps) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{loading ? <p>Loading...</p> : <p>{body}</p>}</CardContent>
    </Card>
  );
};

const AdminDashboard = () => {
  const {
    data: acData,
    error: acError,
    isLoading: acLoading,
    isSuccess: acSuccess,
  } = useGetActiveProductQuery("");
 
  const {
    data: inData,
    error: inError,
    isLoading: inLoading,
    isSuccess: inSuccess, 
  } =  useGetInActiveProductQuery("")
  const [active, setActive] = useState(0);
  const [inActive, setInActive] = useState(0);
  const [user, setUser] = useState()

  useEffect(() => {
    if (acSuccess) {
      setActive(acData.data);
    }
  }, [acData]);

  useEffect(() => {
    if(inSuccess){
        setInActive(inData.data)
    }
  }, [inData])

  const activeProducts = formatNumber(active[0]?.activeProducts || 0);
  const inactiveProducts = formatNumber(inActive[0]?.inActiveProducts || 0);
  return (
    <>
     
      <div className="min-h-svh flex justify-center items-center w-full ">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 ">
          <DashboardCard
            title="Active Products"
            subtitle={`Inactive: ${inactiveProducts}`}
            body={`Active: ${activeProducts}`}
            loading={acLoading || inLoading }
          />
          <DashboardCard
            title="Sales"
            subtitle="Orders"
            body={"hello"}
            loading={acLoading || inLoading}
          />
          <DashboardCard
            title="Orders"
            subtitle="Pending"
            body={"hello"}
            loading={acLoading || inLoading}
          />
        </div>
      </div> 
      
    </>
  );
};

export default AdminDashboard;
