"use client";
import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import {formSchema} from "./constants"
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { name } from './../../../../.next/server/app/(landing)/page';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Conversation = () => {
  const form = useForm <z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting
  const onSubmit = async(values: z.infer<typeof formSchema>) =>{

  }
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
           <Form {...form}>
                <form className="rounded-lg border w-full px-3 p-4 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2" onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                    name="prompt"
                    render={({field}) => (
                        <FormItem className="col-span-12 lg:col-span-10 ">
                            <FormControl className="m-0 p-0">
                                <Input {...field} placeholder="Howwwwwww I calculate the radius of a circle" disabled={isLoading} className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"/>
                            </FormControl>
                        </FormItem>
                    )}
                    />
                    <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                        Generate
                    </Button>
                </form>
           </Form>
        </div>
        <div className="space-y-4 mt-4">
            Message content
        </div>
      </div>
    </div>
  );
};

export default Conversation;