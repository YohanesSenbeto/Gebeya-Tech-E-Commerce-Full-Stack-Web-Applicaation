import React from "react";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";

const Profile: React.FC = () => {
    return (
        <>
            <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Avatar className="h-9 w-9">
                                <AvatarImage
                                    alt="@shadcn"
                                    src="/placeholder-avatar.jpg"
                                />
                                <AvatarFallback>JP</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-0.5 text-xs">
                                <div className="font-medium">Jared Palmer</div>
                                <div className="text-gray-500 dark:text-gray-400">
                                    example@acme.inc
                                </div>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem asChild>
                            <Link to={"/profile"}>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to={"/settings"}>Settings</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className="container px-4 md:px-6 py-12 md:py-24">
                <div>
                    <Card className="w-full max-w-lg">
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>
                                View and update your profile information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage
                                        alt="@shadcn"
                                        src="/placeholder-avatar.jpg"
                                    />
                                    <AvatarFallback>JP</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <div className="font-medium">
                                        Jared Palmer
                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400">
                                        example@acme.inc
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    disabled
                                    id="name"
                                    value="Jared Palmer"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    disabled
                                    id="email"
                                    type="email"
                                    value="example@acme.inc"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <Card className="w-full max-w-lg">
                        <CardHeader>
                            <CardTitle>Settings</CardTitle>
                            <CardDescription>
                                Update your profile information.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="avatar">Avatar</Label>
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-20 w-20">
                                        <AvatarImage
                                            alt="@shadcn"
                                            src="/placeholder-avatar.jpg"
                                        />
                                        <AvatarFallback>JP</AvatarFallback>
                                    </Avatar>
                                    <Button variant="outline">Change</Button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input defaultValue="Jared Palmer" id="name" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    defaultValue="example@acme.inc"
                                    id="email"
                                    type="email"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    defaultValue="+1 (555) 555-5555"
                                    id="phone"
                                    type="tel"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="business-name">
                                    Business Name
                                </Label>
                                <Input
                                    defaultValue="Acme Inc"
                                    id="business-name"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="business-address">
                                    Business Address
                                </Label>
                                <Textarea
                                    defaultValue="123 Main St, Anytown USA"
                                    id="business-address"
                                    rows={3}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="confirm-phone">
                                    Confirm Phone Number
                                </Label>
                                <Input id="confirm-phone" type="tel" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="change-email">
                                    Change Email
                                </Label>
                                <Input id="change-email" type="email" />
                            </div>
                            <div className="grid gap-2">
                                <Label>
                                    <Checkbox id="disable-chats" />
                                    Disable Chats
                                </Label>
                            </div>
                            <div className="grid gap-2">
                                <Label>
                                    <Checkbox id="disable-feedback" />
                                    Disable Feedback
                                </Label>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="manage-notifications">
                                    Manage Notifications
                                </Label>
                                <Select id="manage-notifications">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select notification settings" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All Notifications
                                        </SelectItem>
                                        <SelectItem value="mentions">
                                            Mentions Only
                                        </SelectItem>
                                        <SelectItem value="none">
                                            No Notifications
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="change-password">
                                    Change Password
                                </Label>
                                <Input id="change-password" type="password" />
                            </div>
                            <Button className="w-full" type="submit">
                                Save Changes
                            </Button>
                            <Button className="w-full" variant="destructive">
                                Delete My Account Permanently
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
};

export default Profile;
