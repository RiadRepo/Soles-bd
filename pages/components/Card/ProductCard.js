import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function ProductCard({ product }) {
  if (!product || !product.imageSrc) {
    // Handle the case where product or imageSrc is missing
    return null; // Skip rendering the card
  }
  const { imageSrc, productName, rating, price, addToCartLink } = product;

  return (
    <Card className="w-full md:w-96 h-180">
      <CardHeader shadow={false} floated={false} className="h-full">
        <img
          src={imageSrc}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {productName}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}