import React from "react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import SingleProductPage from "./SingleProductPage";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductDetail({ detail, closeHandler }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    closeHandler(detail.row);
  };

  const addToCartHandler = (selected) => {
    console.log("ProductDetail addToCartHandler");
    console.log(selected);

    let json = localStorage.getItem("products");
    let products = json ? JSON.parse(json) : [];

    let notAdd = true;
    for (let product of products) {
      if (product.productId === selected._id) {
        product.quantity++;
        notAdd = false;
        break;
      }
    }
    if (notAdd) {
      let product = {
        productId: selected._id,
        price: selected.price,
        name: selected.name,
        image:selected.image,
        quantity: 1,
      };
      products.push(product);
    }
    localStorage.setItem("products", JSON.stringify(products));
    handleClose();
  };

  React.useEffect(() => {
    setOpen(detail.isOpen);
  }, [detail.isOpen]);

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <SingleProductPage closeHandler={handleClose} row={detail.row} addToCartHandler={addToCartHandler}/>
    </Dialog>
  );
}

export default ProductDetail;
