import { useState } from "react";
import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Component() {
    const [imageUrl, setImageUrl] = useState("");
    const [imageUploaded, setImageUploaded] = useState(false);
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleImageUpload = (e) => {
        e.preventDefault(); // Prevent form reset
        const file = e.target.files[0];
        // Assuming you have a function to upload the image to the server
        uploadImageToServer(file)
            .then((url) => {
                setImageUrl(url);
                setImageUploaded(true); // Set imageUploaded to true after successful upload
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
            });
    };

    const handleSaveProduct = (e) => {
        e.preventDefault(); // Prevent form reset
        // Your code to save the product
        const productData = {
            productName,
            description,
            category,
            imageUrl,
            price,
            stock,
        };
        // Assuming you have a function to send product data to the backend
        saveProductToBackend(productData)
            .then((response) => {
                // Handle success response
                console.log("Product saved successfully:", response);
            })
            .catch((error) => {
                // Handle error
                console.error("Error saving product:", error);
            });
    };

    return (
        <Card className="w-full mt-4 max-w-2xl mx-auto dark:bg-gray-950 dark:text-gray-50">
            <CardHeader>
                <CardTitle>Add New Product</CardTitle>
                <CardDescription>
                    Fill out the form to add a new product.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid gap-6">
                    <div className="grid gap-2">
                        <Label className="dark:text-gray-50" htmlFor="name">
                            Product Name
                        </Label>
                        <Input
                            className="dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
                            id="name"
                            placeholder="Enter product name"
                            required
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label
                            className="dark:text-gray-50"
                            htmlFor="description"
                        >
                            Description
                        </Label>
                        <Textarea
                            className="dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
                            id="description"
                            placeholder="Describe the product"
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label className="dark:text-gray-50" htmlFor="category">
                            Category
                        </Label>
                        <Select
                            className="dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
                            id="category"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">ALL</SelectItem>
                                <SelectItem value="phones">PHONES</SelectItem>
                                <SelectItem value="laptops">LAPTOPS</SelectItem>
                                <SelectItem value="desktops">
                                    DESKTOPS
                                </SelectItem>
                                <SelectItem value="electronics">
                                    ELECTRONICS
                                </SelectItem>
                                <SelectItem value="tv">TV</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label className="dark:text-gray-50" htmlFor="image">
                            Image
                        </Label>
                        <div className="flex items-center gap-2">
                            <Input
                                className="dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
                                id="image"
                                placeholder="Enter image URL"
                                required
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                            {!imageUploaded && (
                                <Button
                                    className="dark:border-gray-700 dark:text-gray-50 dark:hover:bg-gray-800"
                                    variant="outline"
                                >
                                    <UploadIcon className="w-4 h-4 mr-2" />
                                    Upload Image
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label
                                className="dark:text-gray-50"
                                htmlFor="price"
                            >
                                Price
                            </Label>
                            <Input
                                className="dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
                                id="price"
                                min="0"
                                placeholder="Enter price"
                                required
                                step="0.01"
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label
                                className="dark:text-gray-50"
                                htmlFor="stock"
                            >
                                Stock
                            </Label>
                            <Input
                                className="dark:bg-gray-800 dark:text-gray-50 dark:border-gray-700"
                                id="stock"
                                min="0"
                                placeholder="Enter stock"
                                required
                                type="number"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                {imageUploaded && (
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                        onClick={handleSaveProduct}
                    >
                        Save Product
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}

function UploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M21 
15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
            />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}
