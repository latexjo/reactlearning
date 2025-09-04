
import { Link } from "react-router-dom"

export function HeroPage() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-black text-white">
            {/* Background with black & white filter */}
            <div className="absolute inset-0">
                <img
                    src="9217474.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover filter grayscale opacity-90"

                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl space-y-6 px-4">
                <h1 className="text-4xl font-bold md:text-5xl">Welcome to Our App</h1>
                <p className="text-lg text-gray-200 md:text-xl">
                    Simple, modern, and powerful. Manage your account effortlessly.
                </p>

                <div className="flex justify-center gap-6 pt-6">
                    <Link to="/login">
                        <button className="relative overflow-hidden px-6 py-3 font-medium  text-black bg-white rounded-lg shadow-md transition-all duration-300 hover:text-white hover:bg-black">
                            Login
                            <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 rounded-lg hover:w-full transition-all duration-500"></span>
                        </button>
                    </Link>

                    <Link to="/signup">
                        <button className="relative overflow-hidden px-6 py-3 font-medium text-white border-1 border-white rounded-lg shadow-md transition-all duration-300 hover:text-black hover:bg-white">
                            Sign Up
                            <span className="absolute top-0 left-0 w-0 h-full bg-white opacity-20 rounded-lg hover:w-full transition-all duration-500"></span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
