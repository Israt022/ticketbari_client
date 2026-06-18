'use client'

import { useState } from "react";
import {
    Card,
    Button,
    Link,
    TextField,
    Label,
    InputGroup,
    Input,
} from "@heroui/react";
import { Description, Radio, RadioGroup } from "@heroui/react";
import {Icon} from "@iconify/react";

import {
    Eye,
    EyeSlash,
    Person,
    At,
    ShieldKeyhole,
} from "@gravity-ui/icons";
import { authClient, signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const result = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/",
            });

        if (result?.error) {
        toast.error(result.error.message || "Login failed!");
        return;
        }

        toast.success("Login successful!");
    };

    const handleGoogleSignin = async()=>{
        await signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
            <Card className="w-full max-w-md p-6 shadow-sm border border-zinc-200 dark:border-zinc-800">
                {/* Header */}
                <div className="flex flex-col items-center justify-center gap-1 pb-6 border-b border-zinc-100 dark:border-zinc-800 mb-6 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                        Login your account
                    </h1>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                        Fill in the fields below to login
                    </p>
                </div>

                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-5"
                >
                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Email Address
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <At
                                className="text-zinc-400 pointer-events-none"
                                size={16}
                            />

                            <Input
                                placeholder="you@example.com"
                                // value={email}
                                // onChange={(e) =>
                                //     setEmail(e.target.value)
                                // }
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        className="flex flex-col gap-1.5"
                    >
                        <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Password
                        </Label>

                        <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
                            <ShieldKeyhole
                                className="text-zinc-400 pointer-events-none"
                                size={16}
                            />

                            <Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Choose a password"
                                // value={password}
                                // onChange={(e) =>
                                //     setPassword(e.target.value)
                                // }
                                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
                            />

                            <button
                                type="button"
                                onClick={toggleVisibility}
                                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                                aria-label="toggle password visibility"
                            >
                                {isVisible ? (
                                    <EyeSlash size={18} />
                                ) : (
                                    <Eye size={18} />
                                )}
                            </button>
                        </InputGroup>
                    </TextField>

                    {/* Error */}
                    {error && (
                        <div className="p-3.5 text-xs font-medium rounded-xl bg-red-100/60 dark:bg-red-950/50 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900">
                            <span className="font-semibold">
                                Error:
                            </span>{" "}
                            {error}
                        </div>
                    )}

                    {/* Success */}
                    {success && (
                        <div className="p-3.5 text-xs font-medium rounded-xl bg-emerald-100/60 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900">
                            <span className="font-semibold">
                                Success:
                            </span>{" "}
                            {success}
                        </div>
                    )}

                    {/* Submit */}
                    <Button
                        type="submit"
                        color="primary"
                        className="w-full h-12 rounded-xl font-semibold text-sm"
                        isLoading={isLoading}
                        isDisabled={isLoading}
                    >
                        Sign In
                    </Button>
                    {/* google login */}
                    {/* Divider */}
                    <div className="relative my-2">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-200 dark:border-zinc-800" />
                        </div>

                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white dark:bg-zinc-950 px-3 text-white">
                            Or continue with
                            </span>
                        </div>
                    </div>

                        {/* Google Login */}
                        <Button onClick={handleGoogleSignin} className="w-full" variant="tertiary">
                            <Icon icon="devicon:google" />
                            Sign in with Google
                        </Button>

                    {/* Footer */}
                    <div className="text-center pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Don&apos;t have an account?{" "}
                        <Link
                            // href={"/"}
                            href={`/auth/registration`}
                            className="font-medium text-blue-600 dark:text-blue-400 cursor-pointer"
                        >
                            Register instead
                        </Link>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default Login;


