import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "react-router"
import { doctorValidationSchema } from "@/pages/registration/doctor/Validation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import ImageUploader from "./core/ImageUploader"
import { useState } from "react"
import ImagePreviewer from "./core/ImagePreviewer"

export function DoctorRegistrationForm({
    className,
    ...props
}: React.ComponentProps<"div">) {


    const [image, setImage] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([])

    const [degrees, setDegrees] = useState<File[] | []>([]);
    const [degreePreview, setDegreePreview] = useState<string[] | []>([])

    const form = useForm({
        resolver: zodResolver(doctorValidationSchema)
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

    console.log(image)
    console.log(degrees)

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
                                            <Input type="text" placeholder="Dumki, Patuakhali" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <ImageUploader setImage={setImage} setImagePreview={setImagePreview} label="Profile Picture" id="profileImage" />
                            <ImagePreviewer setImageFiles={setImage} imagePreview={imagePreview} setImagePreview={setImagePreview} />

                            <FormField
                                control={form.control}
                                name="medicalRegNo"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Medical Registration No</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="A-41284" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* TODO make dropdown */}

                            <FormField
                                control={form.control}
                                name="specialization"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>specialization</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Neurologist, Cardiothoracic Surgeon etc." {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* TODO make dropdown */}
                            <FormField
                                control={form.control}
                                name="yearOfExperience"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Year Of Experience</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="5, 3 or 2" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* TODO make dropdown */}

                            <FormField
                                control={form.control}
                                name="currentHospitalOrClinic"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Current Hospital Or Clinic</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Square Hospitals Ltd., United Hospital etc" {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="degrees"
                                render={({ field }) => (
                                    <FormItem className="grid gap-3">
                                        <FormLabel>Degrees</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="MBBS, BDS, FCPS etc.." {...field} value={field?.value || ""} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <ImageUploader setImage={setDegrees} setImagePreview={setDegreePreview} label="Attach Medical Degree (Image Format)" id="degrees" />
                            <ImagePreviewer setImageFiles={setDegrees} imagePreview={degreePreview} setImagePreview={setDegreePreview} />

                            {/* {
                                isLoading? <Button disabled className="w-full cursor-not-allowed">
                                Registering...
                            </Button> : <Button type="submit" className="w-full cursor-pointer">
                                Register
                            </Button>
                            } */}
                            <Button type="submit" className="w-full cursor-pointer">
                                Register
                            </Button>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link to="/login" className="underline underline-offset-4">
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
