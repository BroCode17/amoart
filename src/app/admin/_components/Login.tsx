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
import { Input } from "@/components/ui/input";

import {  useRouter } from "next/navigation";
import {
  useLoginUserMutation,

} from "@/_redux/services/userApi";

//Redux
import { useDispatch } from "react-redux";
import { updateUserData, updateUserToken } from "@/_redux/slices/userSlice";
import { useEffect, useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Please enter your email",
    })
    .email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const router = useRouter();
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const dispatch = useDispatch();
  const [user, setUser] = useState();
  // 1. Define your form.

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {}, [user]);
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    //make an api call

    try {
      const res = await loginUser(values).unwrap();
      if (res.success) {
        dispatch(updateUserData(res.user));
        dispatch(updateUserToken(res.accessToken));
        router.push("/admin/dashboard");
      }
    } catch (err: any) {
      console.error("Failed to login: ", err);
    }
  }

  return (
    <Form {...form}>
      {isError && <div className="text-red-500">{error?.data?.message}</div>}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-black">
          Submit
        </Button>
      </form>
    </Form>
  );
}