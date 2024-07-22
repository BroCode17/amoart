"use client";
import { useCallback, useMemo, useState } from "react";
import GenericBanner from "@/components/banner/GenericBanner";
import Image from "next/image";
import Container from "@/components/Container";
import React from "react";
import HeadTitle from "@/components/HeadTitle";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { itemSizeArray } from "../../../utils/data";

import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { RadioButton } from "@/components/RadioButton";

const FormSchema = z.object({
  itemSize: z.string({
    required_error: "Please Select Item Size",
  }),
});

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log(data.itemSize);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3 ">
        <FormField
          control={form.control}
          name="itemSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={`text-sm font-normal`}>
                Pick a size
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="border-soft rounded-sm">
                  <SelectTrigger className="">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="focus:border-none">
                  {itemSizeArray.map((item) => (
                    <SelectItem key={item.size} value={item.size}>
                      {item.size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [enbaleDecrease, setEnableDecrease] = useState(true);

  const increaseItem = useCallback(() => {
    setEnableDecrease(false);
    setCounter((prev) => prev + 1);
  }, [enbaleDecrease]);
  const decreaseItem = () => {
    if (counter < 2) setEnableDecrease(true);
    setCounter((prev) => prev - 1);
  };

  return (
    <div
      className={`border border-soft w-2/3 flex justify-between p-2 rounded-sm mt-1`}
    >
      <button className="cursor-pointer" onClick={increaseItem}>
        <FaCirclePlus />
      </button>
      <span className="font-semibold text-xs">{counter}</span>
      <button
        className="cursor-pointer"
        disabled={enbaleDecrease}
        onClick={decreaseItem}
      >
        <FaCircleMinus />
      </button>
    </div>
  );
};

const page = () => {
  return (
    <div className="min-h-dvh w-full ">
      <div className="">
        <GenericBanner bannerImgUrl="/images/shop.png" bannerTitle="Cart" />
        <div className="w-full flex justify-center">
          <Container className="bg-white mt-20 ">
            <HeadTitle title="Cart (1)" className="text-start mb-5" />
            <div className="w-full flex flex-col items-center md:items-start  justify-center md:flex-row gap-2 md:gap-10">
              <div className="w-[350px]">
                <Image
                  src="/images/brothers.jpeg"
                  alt="Fall"
                  width={1000}
                  height={1000}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "initial",
                  }}
                  className="w-full h-full md:h-auto"
                />
              </div>
              <div className="w-[400px] border border-black p-10">
                <div className="flex flex-col gap-4">
                  <h1 className="text-xl font-bold">"For Your Eyes only"</h1>
                  <hr className="w-10/12 h-[1px] bg-gray-300 rounded-sm"></hr>
                  <div>
                    <h2 className="text-sm font-bold">US $200.00</h2>
                    <p className="text-xs">
                      Lorem ipsum dolor sit ament, <br /> consectetuer
                      adispiscing elit{" "}
                    </p>
                  </div>

                  <hr className=" h-[2px] bg-gray-300 rounded-sm"></hr>
                  <div className="flex flex-row justify-between">
                    <div className="flex-1">
                      <div>
                        <SelectForm />
                        <h1 className="h-5 text-sm mt-2">Quantity</h1>
                        <Counter />
                      </div>
                    </div>
                    <div className=" w-[120px] flex flex-col gap-2 ">
                      <div className="flex h-[90%] gap-2">
                        <div className="flex w-10/12 bg-gray-300 h-full"></div>
                        <div className="border-l border-black flex  justify-start items-center pl-1">
                          <div className="flex flex-col justify-center  ">
                            <span className="text-[0.65rem] transform rotate-90 font-semibold p-0 m-0 ">
                              30
                            </span>
                            <span className="text-[0.65rem] transform rotate-90 font-semibold md:-m-[1px]">
                              in
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-[80%] text-center  leading-none border-t border-black">
                        <span className="text-[.65rem] font-semibold">
                          {" "}
                          20in
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr className=" h-[2px] bg-gray-300 rounded-sm"></hr>
                  {/* <div className="flex flex-col gap-2">
                    <div className="bg-gray-300 w-full h-12"></div>
                    <div className="bg-gray-300 w-full h-12"></div>
                  </div> */}
                  <div className="w-full">
                    <RadioButton />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default page;
