'use client'
import AdminSideBar from "../_components/Sidebar";
import Protected from "../_components/Protected";


export const dynamic = "force-dynamic";

export default function AdimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Protected>
      <div className="flex">
        <AdminSideBar />
        <div className="ml-10 w-full">{children}</div>
      </div>
    </Protected>
  );
}
