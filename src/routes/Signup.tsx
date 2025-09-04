import { Button } from "@/components/ui/button"
import {
    Card,

    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardSignup() {
    return (
        <Card className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md space-y-4">
                <CardHeader className="flex justify-between items-center">
                    <CardTitle className="text-base font-medium">Create account</CardTitle>
                </CardHeader>

                <CardContent>
                    <form className="space-y-4">
                        {/* Full Name */}
                        <div className="grid gap-1.5">
                            <Label htmlFor="name" className="text-sm">Full Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" required />
                        </div>

                        {/* Email */}
                        <div className="grid gap-1.5">
                            <Label htmlFor="email" className="text-sm">Email</Label>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </div>

                        {/* Password */}
                        <div className="grid gap-1.5">
                            <Label htmlFor="password" className="text-sm">Password</Label>
                            <Input id="password" type="password" required />
                        </div>

                        {/* Confirm Password */}
                        <div className="grid gap-1.5">
                            <Label htmlFor="confirm-password" className="text-sm">Confirm Password</Label>
                            <Input id="confirm-password" type="password" required />
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col gap-2">
                    <Button type="submit" className="w-full h-9 text-sm">
                        Sign Up
                    </Button>
                    <Button variant="outline" className="w-full h-9 text-sm">
                        Google
                    </Button>
                </CardFooter>
            </div>
        </Card>
    )
}
