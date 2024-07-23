"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { onValue, ref, update } from "firebase/database";
import { db } from "../firebase";
import { Alert } from "@/components/ui/alert";

type teacher = {
  uid: string;
};

export function DialogPopup(props: teacher) {
  const [uuid, setUID] = useState("");
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const updateData = async () => {
    try {
      await update(ref(db, `teachers/${uuid}`), {
        name: name,
        branch: branch,
        bio: description,
      }).then(() => {
        setOpen(!open);
        toast({
          title: "Congratulation",
          description: "Data has been successfully updated.",
          variant: "success",
          duration: 2000,
        });
      });
    } catch (err) {
      console.log(err);
      toast({
        title: "Unfortunately",
        description: "Failed to update",
        variant: "destructive",
        duration: 2000,
      });
      setOpen(!open);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          id={props.uid}
          variant="outline"
          className="flex gap-2"
          onClick={(e) => {
            setUID(e.currentTarget.getAttribute("id") as string);
            const dbRef = ref(db, `teachers/${uuid}`);
            onValue(dbRef, (snapshot) => {
              const data = snapshot.val();
              setName(data.name);
              setBranch(data.branch);
              setDescription(data.bio);
            });
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              stroke="none"
              fill="#000000"
              opacity="0"
            />

            <g transform="matrix(0.83 0 0 0.83 12 12)">
              <path
                transform=" translate(-15, -15)"
                d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 C 3.019555391732378 25.777315948579314 3.0004098353434143 25.88822818626975 3 26 C 3 26.552284749830793 3.4477152501692068 27 4 27 C 4.111771836422188 26.999590036115436 4.22268407474976 26.98044434440919 4.328125 26.943359 C 4.331387024617978 26.942074127865663 4.334642269631416 26.940772109861395 4.3378906 26.939453 L 4.3632812 26.931641 C 4.3652389131533935 26.93034554822427 4.367192058595549 26.929043206816875 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"
                stroke-linecap="round"
              />
            </g>
          </svg>
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right ">
              Branch
            </Label>
            <Select onValueChange={setBranch} defaultValue={branch}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a branch" />
              </SelectTrigger>
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
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Experience
            </Label>
            <Textarea
              id="description"
              className="col-span-3"
              placeholder="Type your description here."
              defaultValue={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={updateData}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
