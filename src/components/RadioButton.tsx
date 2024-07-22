"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";

const FormSchema = z.object({
  type: z.enum(["fast", "", "free"], {
    required_error: "Delivery Method Required",
  }),
});

export function RadioButton() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "fast",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl className="">
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-1 space-y-0  bg-[#F0F0F0] px-4">
                    <FormControl>
                      <RadioGroupItem value="fast" className="border-soft" />
                    </FormControl>
                    <div className="flex items-center justify-between w-full">
                      <div className=" p-2 w-10/12">
                        <FormLabel className="text-md">
                          <span className="font-semibold ">$5.99</span>{" "}
                          <span className="text-md">&#x2022;</span> Fast
                          Delivery
                          <p className="text-[.675rem] -mt-1 text-[#727070]">
                            Receive it on 30th Jun
                          </p>
                          <p className="text-[.675rem] mt text-[#0160EE] rounded-full  bg-[#0160EE] bg-opacity-35 text-center w-2/4">
                            Recommended
                          </p>
                        </FormLabel>
                      </div>
                      <div className="bg-red-300">
                        <Image
                          src="/images/dhl.png"
                          alt="sender"
                          width={40}
                          height={30}
                          className="object-contain h-full w-full"
                        />
                      </div>
                    </div>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0 bg-[#F0F0F0] px-8 h-10">
                    <FormControl>
                      <RadioGroupItem value="free" className="border-soft " />
                    </FormControl>
                    <FormLabel className="text-xs">Free Delivery</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          className="bg-black text-white text-xs py-2 mt-2 font-semibold w-full"
          type="submit"
        >
          CHECKOUT
        </button>
      </form>
    </Form>
  );
}
