
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { NavBar } from "@/lib/reusables/NavBar";



export default function Dashboard() {


    return (
        <div className="w-full">
            <NavBar />

            <div>
                <Card className="m-4">
                    <CardHeader>
                        <CardTitle>Welcome to the Dashboard</CardTitle>
                    </CardHeader>

                </Card>

            </div>
        </div>

    );
}
