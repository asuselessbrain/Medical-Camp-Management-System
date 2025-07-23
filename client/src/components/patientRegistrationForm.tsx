import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router"
import patientRegistrationValidation from "@/pages/registration/patient/validation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export function PatientRegistrationForm({
    className,
    ...props
}: React.ComponentProps<"div">) {

    const form = useForm({
        resolver: zodResolver(patientRegistrationValidation)
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-6 md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">MediCare</h1>
                                <p className="text-muted-foreground text-balance">
                                    Register your account
                                </p>
                            </div>
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Arfan Ahmed" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="m@example.com" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="*******" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="*******" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="017xx-xxxxxx" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Gender</FormLabel>
                                        <Select onValueChange={field.onChange} value={field?.value || ""}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="others">Others</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Date of Birth</FormLabel>
                                        <FormControl>
                                            <Input type="date" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="017xx-xxxxxx" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full cursor-pointer">
                                Register
                            </Button>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link to="/registration" className="underline underline-offset-4">
                                    Sign up
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
