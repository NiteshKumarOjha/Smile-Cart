import { Typography } from "neetoui";
import Carousel from "./Carousel";
import { IMAGE_URLS } from "./constants";

const Product = () => (
  <div className="px-6 pb-6">
    <div>
      <Typography style="h3" className="py-2 text-4xl font-semibold">
        Infinix INBOOK
      </Typography>
      <hr className="border-2 border-black" />
    </div>
    <div className="mt-6 flex gap-4">
      <div className="w-2/5">
        <Carousel title="Infinix Inbook" imageUrls={IMAGE_URLS} />
      </div>
      <div className="w-3/5 space-y-4">
        <Typography style="h1">Typography</Typography>
        <Typography style="body1">
          Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.
        </Typography>
        <Typography style="body1">MRP: $395.97</Typography>
        <Typography style="body1" className="font-semibold">
          Offer price: $374.43
        </Typography>
        <Typography style="body1" className="font-semibold text-green-600">
          6% off
        </Typography>
      </div>
    </div>
  </div>
);

export default Product;
