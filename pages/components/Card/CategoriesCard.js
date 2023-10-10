import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function CategoriesCard({ category }) {
  if (!category || !category.imageSrc) {
    // Handle the case where category or imageSrc is missing
    return null; // Skip rendering the card
  }

  const { categoryName, imageSrc } = category;

  return (
    <Card
      shadow={false}
      className="relative grid    h-96 max-h-[32rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h3"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {categoryName}
        </Typography>
      </CardBody>
    </Card>
  );
}
