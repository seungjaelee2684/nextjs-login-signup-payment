"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "이름은 2글자 이상이어야 합니다.",),
  email: z
    .string()
    .email("올바른 이메일을 입력해주세요."),
  callnumber: z
    .string()
    .regex(/^01\d{9}$/, "연락처는 11자리여야합니다.")
});

function ProfileForm() {

  const [isValidate, setIsValidate] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      callnumber: ""
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>계정을 생성합니다</CardTitle>
        <CardDescription>필수 정보를 입력해볼게요.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input placeholder="홍길동" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder="hello@sparta-devcamp.com" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="callnumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>연락처</FormLabel>
                  <FormControl>
                    <Input placeholder="01000000000" {...field} />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">역할</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="역할을 선택해주세요." />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="operator">관리자</SelectItem>
                  <SelectItem value="user">일반 사용자</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">다음 단계로 →</Button>
          </form>
        </Form>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
};

export default ProfileForm;