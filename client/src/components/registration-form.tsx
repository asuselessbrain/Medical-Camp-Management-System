import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"
import { useForm, type FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"
import type { ZodTypeAny } from "zod"

type Field = {
  name: string;
  label: string;
  type: string
}

interface RegistrationFromProps extends React.ComponentProps<"div">{
  formFields: Field[];
  schema: ZodTypeAny;
  onSubmit: (data: FieldValues)=> void;
}



export function RegistrationForm({
  className,
  formFields,
  schema,
  onSubmit,
  ...props
}: RegistrationFromProps ){


    const form = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 md:p-8">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your account
                </p>
              </div>

              {
                formFields?.map((formField: Field)=>  <FormField
                key={formField?.name}
                control={form.control}
                name={formField?.name}
                render={({ field }) => (
                  <FormItem className="grid gap-3">
                    <FormLabel>{formField?.label}</FormLabel>
                    <FormControl>
                      <Input type={formField?.type} placeholder="m@example.com" {...field} value={field?.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />)
              }
              <Button type="submit" className="w-full cursor-pointer">
                Login
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
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
