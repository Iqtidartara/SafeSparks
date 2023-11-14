import React from 'react'
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Textarea } from '@/components/ui/textarea';
import { Button } from './ui/button';

const EmailDialog = () => {
  return (
    <div className="grid gap-4">
    <div className="space-y-2">
      <h4 className="dialogh">Contact Us</h4>
    </div>
    <div className="grid gap-2">
      <div className="label">
        <Label htmlFor="name">Name*</Label>
        <Input id="name" defaultValue="" className="bord" />
      </div>
      <div className="label">
        <Label htmlFor="emial">Email</Label>
        <Input id="email" defaultValue="" className="bord" />
      </div>
      <div className="label">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" defaultValue="" className="bord" />
      </div>

      <div className="label">
        <Label htmlFor="select">Preferred Location?</Label>
        <Select>
          <SelectTrigger className="w-full text-[#8687A8]">
            <SelectValue placeholder="select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Pakistan</SelectItem>
            <SelectItem value="dark">Canada</SelectItem>
            <SelectItem value="system">Gilgit</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="label mt-[0.63rem]">
        <Textarea
          id="textarea"
          defaultValue="How can we assist your aesthetic needs?"
          className="text-[#8687A8]"
        />
      </div>
      <div className="label mt-[1.25rem] ">
        <Button
          className="doilogbtn w-[100px] text-[16px]"
        >
          SEND
        </Button>
        <p className="text-[#8687A8] text-[1rem] font-normal leading-[2rem] tracking-wider">
          Please do not include sensitive questions.{" "}
        </p>
      </div>
    </div>
  </div>
  )
}

export default EmailDialog