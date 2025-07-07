import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"
import { useForm, type FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"
import type { ZodTypeAny } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

type Options = { label: string; value: string }

export type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "select" | "date" | "file";
  placehonder: string;
  options?: Options[];
}

interface RegistrationFromProps extends React.ComponentProps<"div"> {
  formFields: Field[];
  schema: ZodTypeAny;
  onSubmit: (data: FieldValues) => void;
}


export function RegistrationForm({
  className,
  formFields,
  schema,
  onSubmit,
  ...props
}: RegistrationFromProps) {


  const form = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome To MediCare</h1>
                <p className="text-muted-foreground text-balance">
                  Register your account
                </p>
              </div>

              {formFields?.map((formField: Field) => (
                formField?.type === "select" ? (
                  <FormField
                    key={formField.name}
                    control={form.control}
                    name={formField.name}
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel>{formField.label}</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder={formField?.placehonder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {formField?.options?.map((opt: Options) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : formField?.type === "file" ? (
                  <FormField
                    key={formField.name}
                    control={form.control}
                    name={formField.name}
                    render={({ field: { onChange, ...field } }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel>{formField.label}</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => {
                              const files = e.target.files ? Array.from(e.target.files) : [];
                              onChange(files);
                            }}
                            value={field?.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <FormField
                    key={formField.name}
                    control={form.control}
                    name={formField.name}
                    render={({ field }) => (
                      <FormItem className="grid gap-3">
                        <FormLabel>{formField.label}</FormLabel>
                        <FormControl>
                          <Input
                            type={formField.type}
                            placeholder={formField?.placehonder}
                            {...field}
                            value={field?.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )
              ))}
              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/" className="underline underline-offset-4">
                  Sign In
                </Link>
              </div>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block">
            <img
              src="https://i.ibb.co/tTP241Rx/3d-rendering-hospital-building.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
