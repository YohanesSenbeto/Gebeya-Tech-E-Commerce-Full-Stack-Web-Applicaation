import React from "react";
import { useState } from "react";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact: React.FC = () => {
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [serverError, setServerError] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#0b1e3b] px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-500">
                        Have a question or need assistance? Fill out the form
                        below and we'll get back to you as soon as possible.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Label htmlFor="email">Email address</Label>
                        <div className="mt-1">
                            {serverError && (
                                <div className="validation-error" role="alert">
                                    {serverError}
                                </div>
                            )}

                            <Input
                                id="email"
                                name="user_email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                required
                                type="email"
                                value={user_email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm"
                            />
                            {emailError && (
                                <div className="validation-error" role="alert">
                                    {emailError}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="message">Message</Label>
                        <div className="mt-1">
                            <Textarea
                                id="message"
                                placeholder="Enter your message"
                                className="block w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#0b1e3b] focus:outline-none focus:ring-[#0b1e3b] sm:text-sm min-h-[100px]"
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-[#0b1e3b] py-2 px-4 text-sm font-medium text-white hover:bg-[#0a1a32] focus:outline-none focus:ring-2 focus:ring-[#0b1e3b] focus:ring-offset-2"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
