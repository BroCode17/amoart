"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/components/utils/formatters";
import { CheckCircle2, Link, MoreVerticalIcon, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  ActiveToggleDropdownItem,
  DeleteDropwDownItem,
} from "../../products/_components/ProductActions";
import { useGetAllOrderQuery } from "@/_redux/services/ordersApi";
import { IoClose } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ShippingDetails = ({
  order,
  show,
  setShow,
}: {
  order: any;
  show: boolean;
  setShow: any;
}) => {
  if (!show) return;

  return (
    <div className="container p-4">
      <div
        className="bg-white rounded-lg shadow-lg p-6 mb-5 relative"
        onClick={() => setShow(false)}
      >
        <div className="absolute z-40 right-2 top-2 w-6 h-6 cursor-pointer hover:scale-90">
          <IoClose size={24} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
        <p className="mb-2">
          <span className="font-semibold">Name:</span>{" "}
          {order.customerShippingInformation.firstName}{" "}
          {order.customerShippingInformation.lastName}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Address:</span>{" "}
          {order.customerShippingInformation.address}{" "}
          {order.customerShippingInformation.city}{" "}
          {order.customerShippingInformation.state}{" "}
          {order.customerShippingInformation.zipCode}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Contact:</span> {order.customerEmail}
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 ">
        <h2 className="text-2xl font-bold mb-4">Products to be Shipped</h2>
        <div className="space-y-4">
          {order.products.map((product: any) => (
            <div
              key={product.product._id}
              className="flex items-center bg-gray-100 rounded-lg p-4 shadow"
            >
              <div className="">
                <h3 className="text-md font-[700]">{product.product.name}</h3>
                <p className="text-sm">Quantity: {product.orderedQuantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Text = ({ order }: { order: any }) => {
  return (
    <span className="text-yellow-500 bg-white">
      <h1>{order} hello</h1>
    </span>
  );
};

const OrderStatusModal = ({ show, setShow, orderRef }: any) => {
  if (!show) return;

  const [shipState, setShipState] = useState<string>("pending");
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  console.log(orderRef)
  const handleSetShipState = (value: any) => {
    setShipState(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(shipState,trackingNumber, orderRef)
  };

  return (
    <form
      className="bg-white rounded-lg shadow-lg p-6 mb-5 relative space-y-4"
      onSubmit={onSubmit}
    >
      <div className="absolute z-40 right-2 top-2 w-6 h-6 cursor-pointer hover:scale-75" onClick={() => setShow(false)}>
        <IoClose size={24} />
      </div>
      <div className="mt-4">
        <Select onValueChange={handleSetShipState} defaultValue={shipState}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirm">Confirm</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="">
        {shipState === "confirm" && (
          <Input
            placeholder="Enter Tracking Number"
            required
            onChange={(e) => setTrackingNumber(e.target.value)}
            value={trackingNumber}
          />
        )}
      </div>
      <Button className="bg-black w-full" type="submit">
        Update
      </Button>
    </form>
  );
};

const Order = ({ orders, isLoading, isSuccess, isError }: any) => {
  const [showShippingDetails, setShowShippingDetails] =
    useState<boolean>(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [showOrderStatuModal, setShowOrderStatuModal] =
    useState<boolean>(false);
const [orderReference, setOrderReference] = useState<string>("");

  const handleShowShippingDetails = (order: any) => {
    setShowShippingDetails(true)
    setCurrentOrder(order);
  };
  const handleCloseShowShippingDetails = () => {
    setCurrentOrder(null);
    setShowShippingDetails(false);
  };
  const handleOrderStatuModal = (ref: any) => {
    // setCurrentOrder(order);
    setOrderReference(ref)
    setShowOrderStatuModal(true);
    
    console.log(showShippingDetails);
  };
  const handleCloseShowStatusModal = () => {
    // setCurrentOrder(null);
    setShowOrderStatuModal(false);
  };

  return (
    <div className="relative">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Reference</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-0">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        {orders && (
          <TableBody>
            {orders.map((order: any, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell
                    onClick={() => handleShowShippingDetails(order)}
                    className="cursor-pointer"
                  >
                    {order.refrenceNumber}
                  </TableCell>
                  <TableCell>{`${order.customerShippingInformation.firstName} ${order.customerShippingInformation.lastName}`}</TableCell>
                  <TableCell>{formatCurrency(order.totalAmount)}</TableCell>
                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <MoreVerticalIcon />
                        <span className="sr-only">Action</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          asChild
                          onClick={() => handleOrderStatuModal(order.refrenceNumber)}
                          className="cursor-pointer hover:bg-muted"
                        >
                          <span>Upate Status</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          asChild
                          onClick={() => handleOrderStatuModal(order.refrenceNumber)}
                          className="cursor-pointer bg-destructive text-white font-semibold"
                        >
                          <span>Delete Order</span>
                        </DropdownMenuItem>
                        {/* <ActiveToggleDropdownItem
                      id={p._id}
                      isActive={p.isActive}
                    /> */}
                        {/* <DeleteDropwDownItem id={p._id as string} /> */}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        )}
      </Table>
      <div className="absolute inset-0 w-[400px] top-1/2 m-auto z-40">
        <ShippingDetails
          order={currentOrder}
          show={showShippingDetails}
          setShow={setShowShippingDetails}
        />

        <OrderStatusModal
          show={showOrderStatuModal}
          setShow={setShowOrderStatuModal}
          orderRef={orderReference}
        />
      </div>
    </div>
  );
};

const OrderTable = () => {
  const { data, isError, isLoading, isSuccess } = useGetAllOrderQuery("");
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setOrder(data);
    }
  }, [data, isSuccess]);

  return (
    <Order
      orders={orders}
      isLoading={isLoading}
      isSuccess={isSuccess}
      isError={isError}
    />
  );
};

export default OrderTable;
