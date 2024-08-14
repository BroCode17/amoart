import React from "react";
import AdminLinks from "./AdminLinks";

const AdminSideBar = () => {
  return (
    <div className="bg-black sticky left-0 top-0 w-60 flex  items-center">
      <nav className="flex flex-col w-full text-white">
        <AdminLinks name="Dashboard" active={false} url="/admin/dashboard" />
        <AdminLinks name="Products" active={false} url="/admin/dashboard/products" />
        <AdminLinks name="Sales" active={false} url="/admin/dashboard/sales" />
      </nav>
    </div>
  );
};

export default AdminSideBar;
