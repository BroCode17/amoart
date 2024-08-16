import React from "react";
import AdminLinks from "./AdminLinks";

const AdminSideBar = () => {
  return (
    <div className="bg-black sticky left-0 top-0  w-72 flex  items-center">
      <nav className="flex flex-col w-full text-white">
        <AdminLinks name="Dashboard" active={false} url="/admin/dashboard" />
        <AdminLinks name="Products" active={false} url="/admin/dashboard/products" />
        <AdminLinks name="Sales" active={false} url="/admin/dashboard/sales" />
        <AdminLinks name="Orders" active={false} url="/admin/dashboard/orders" />
      </nav>
    </div>
  );
};

export default AdminSideBar;
