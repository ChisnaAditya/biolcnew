"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ref, push } from "firebase/database";
import { db } from "../firebase";

const FormSchema = z.object({
  teacher_name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  teacher_branch: z.string().min(2, {
    message: "Please select a branch.",
  }),
  teacher_bio: z.string().min(2, {
    message: "Bio must be at least 2 characters.",
  }),
});

export function InputForm() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teacher_name: "",
      teacher_branch: "",
      teacher_bio: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    push(ref(db, `teachers`), {
      name: data.teacher_name,
      branch: data.teacher_branch,
      bio: data.teacher_bio,
    }).then(() => {
      setOpen(!open);
      toast({
        title: "Congratulation",
        description: "Data has been successfully added.",
        variant: "success",
        duration: 2000,
      });
    });
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
    <div className="group fixed bottom-10 right-10 p-2 flex items-end justify-end w-32 h-32 ">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-black/90 shadow-2xl flex items-center justify-center p-3 rounded-full bg-gradient-to-l from-yellow1LC to-yellow2LC z-50 absolute  ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 group-hover:rotate-90 transition-all duration-[0.6s]"
            >
              <rect
                width="24"
                height="24"
                stroke="none"
                fill="#000000"
                opacity="0"
              />

              <g transform="matrix(1.54 0 0 1.54 12 12)">
                <path
                  transform=" translate(-7, -7)"
                  d="M 13.5 6.5 C 13.5 5.947715250169207 13.052284749830793 5.5 12.5 5.5 L 8.5 5.5 L 8.5 1.5 C 8.5 0.9477152501692065 8.052284749830793 0.5 7.5 0.5 L 6.5 0.5 C 5.947715250169207 0.5 5.5 0.9477152501692065 5.5 1.5 L 5.5 5.5 L 1.5 5.5 C 0.9477152501692065 5.5 0.5 5.947715250169207 0.5 6.5 L 0.5 7.5 C 0.5 8.052284749830793 0.9477152501692065 8.5 1.5 8.5 L 5.5 8.5 L 5.5 12.5 C 5.5 13.052284749830793 5.947715250169207 13.5 6.5 13.5 L 7.5 13.5 C 8.052284749830793 13.5 8.5 13.052284749830793 8.5 12.5 L 8.5 8.5 L 12.5 8.5 C 13.052284749830793 8.5 13.5 8.052284749830793 13.5 7.5 Z"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Teacher</DialogTitle>
            <DialogDescription>
              Add your data profile here. Click add when you are done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="teacher_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="teacher_branch"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a branch" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="pare">Pare</SelectItem>
                      <SelectItem value="bogor">Bogor</SelectItem>
                      <SelectItem value="bandung">Bandung</SelectItem>
                      <SelectItem value="jogja">Jogja</SelectItem>
                      <SelectItem value="lampung">Lampung</SelectItem>
                      <SelectItem value="makassar">Makassar</SelectItem>
                      <SelectItem value="medan">Medan</SelectItem>
                      <SelectItem value="serang">Serang</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              <FormField
                control={form.control}
                name="teacher_bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Teacher experience" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
