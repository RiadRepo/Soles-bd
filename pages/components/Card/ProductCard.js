import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ProductPreview from "../ProductPreview";

export default function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // When the modal is open, disable scrolling on the body element
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // When the modal is closed, enable scrolling
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  if (!product || !product.imageSrc) {
    // Handle the case where product or imageSrc is missing
    return null; // Skip rendering the card
  }

  const { imageSrc, productName, rating, price, addToCartLink, discount } =
    product;

  return (
    <>
      <Card className="w-full ">
        <CardHeader shadow={false} floated={false} className="h-full">
          <img
            src={imageSrc}
            alt="card-image"
            className="h-full w-full object-cover transition-transform transform scale-100 hover:scale-105"
          />
        </CardHeader>
        <CardBody className="h-40">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {productName}
            </Typography>
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
            onClick={openModal}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Choose Option
          </Button>
        </CardFooter>
      </Card>

      {isModalOpen && (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
            onClick={closeModal}
          ></div>
          <div
            id="staticModal"
            data-modal-backdrop="static"
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 w-full h-full p-4 overflow-x-hidden overflow-y-auto"
          >
            <div className="relative w-full max-w-2xl">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-4 rounded-t">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white "
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <ProductPreview />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
