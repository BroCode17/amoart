
import React from 'react'
import AdminPageHeader from '../../_components/AdminPageHeader'
import OrderTable from './_components/OrderTable';



const OrdersPage = () => {

  return (
    <div>
      <AdminPageHeader title={"Orders"} />
      <OrderTable />
    </div>
  )
}

export default OrdersPage




