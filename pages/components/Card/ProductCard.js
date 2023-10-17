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
  const { imageSrc, productName, rating, price, addToCartLink, discount } =
    product;

  return (
    <Card className="w-full ">
      <CardHeader shadow={false} floated={false} className="h-full">
        <img
          src={imageSrc}
          alt="card-image"
          className="h-full w-full object-cover transition-transform transform scale-100 hover:scale-105"
        />
      </CardHeader>
      <CardBody className="xs:h-40 lg:h-40">
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {productName}
          </Typography>
          {/* <Typography color="blue-gray" className="font-medium">
            {price}
          </Typography> */}
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75 mb-2"
        >
          SolesBD
        </Typography>
        <div className="flex">
          <Typography
            color="blue-gray"
            className="font-light me-3 line-through"
          >
            Tk {discount}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            Tk {price}
          </Typography>
        </div>
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
