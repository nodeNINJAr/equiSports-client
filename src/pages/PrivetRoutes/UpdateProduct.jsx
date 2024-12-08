import React, { useContext, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { ProductContext } from "../../provider/ProductInfoProvider";
import Swal from "sweetalert2";
import Hero from "../../components/Hero";
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import update from "../../assets/lottie/update2.json"
import successIcon from "../../assets/lottie/uploadComplete.json"
import errorIcon from "../../assets/lottie/loginError.json"
//
const UpdateProduct = () => {
  const { user } = useContext(AuthContext);
  const { products, setRefresh } = useContext(ProductContext);
  //
  const productData = useLoaderData();
  // state for onchanges
  const [imageUrl, setImageUrl] = useState("");
  // 
  const [lottie , setLottie ] = useState("")
  // for form submit
  const handleProductUpdate = (event) => {
    event.preventDefault();
    //
    const form = event.target;
    // product information
    const productInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      productName: form.productName.value,
      productDesc: form.productDesc.value,
      productPrice: form.productPrice.value,
      productRating: form.productRating.value,
      ProcessTime: form.ProcessTime.value,
      StockProduct: form.StockProduct.value,
      productUrl: imageUrl || productData?.productUrl,
      productCate: form.productCate.value,
      productCustomization: form.customize.value,
    };

    //
    Swal.fire({
      title: "Are you sure?",
      text: "⚠️ Warning: Updating this will change the existing data. Proceed with caution! 🔄",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://equi-sports-server-green.vercel.app/my-equipment-list/update-product/${productData?._id}`,
          {
            method: "PATCH",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(productInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount === 1) {
              Swal.fire({
                title: "Updated!",
                text: "✅ Product Updated Successfully! 🔄",
                icon: "success",
              });
              setRefresh((prev) => !prev);
              setLottie("succ")
            } else {
              Swal.fire({
                title: "Not Updated!",
                text: "✏️ Please provide the updated value to update the product! 🛠️",
                icon: "info",
              });
              setLottie("err")
            }
          });
      }
    });
  };
  //
  const handleImage = (e) => {
    setImageUrl(e.target.value);
  };
  //

  return (
    <>
      <div className="py-4 my-10 ">
        <Hero title={"Update product"} path={location?.pathname} />
      </div>
      <div className="w-11/12 mx-auto font-DMSans tracking-tight py-10">
        <form onSubmit={handleProductUpdate}>
          {/* header */}
          <Slide direction="down" duration={1500}>
            <div className="flex justify-between items-center gap-6 flex-wrap ">
              <h1 className="text-3xl font-medium font-barlow tracking-wide flex justify-start items-center gap-2">
                <Lottie animationData={update} loop={true} style={{width:30, height:30}} />
                <span>Update Exsisting product</span>
              </h1>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <span className="border px-6 py-3 rounded-lg text-lg font-medium">
                  Total Added product :{" "}
                  <span>
                    {products.filter((i) => i.userEmail === user?.email).length}
                  </span>
                </span>
                <button className="btn bg-[#9feea7] rounded-full px-6 text-base">
                  {lottie ==="succ" && <Lottie animationData={successIcon} loop={false} style={{width:40, height:40}}/>} {lottie ==="err" && <Lottie animationData={errorIcon} loop={true} style={{width:30, height:30}}/> } {lottie === "" && <Lottie animationData={successIcon} loop={false} style={{width:40, height:40}}/>} Update Product
                </button>
              </div>
            </div>
          </Slide>
          {/* <IoCheckmarkDone /> */}
          {/* grid */}
          <Fade delay={200} duration={1500}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:px-20 gap-6 py-16">
              {/* col-2 */}
              <div className="col-span-1 md:col-span-2 space-y-4">
                {/* User Info */}
                <div className="bg-[#F9F9F9] p-4 rounded-lg">
                  <h1 className="text-xl font-semibold font-barlow tracking-normal capitalize ">
                    User Info
                  </h1>
                  <div className="flex justify-between gap-6 items-center">
                    <label className="form-control w-full  ">
                      <div className="label">
                        <span className="label-text text-[#424242] font-medium text-base">
                          User Name
                        </span>
                      </div>
                      <input
                        disabled
                        type="text"
                        value={user?.displayName}
                        className="input input-bordered w-full "
                      />
                    </label>
                    {/*  */}
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text text-[#424242] font-medium text-base">
                          User Email
                        </span>
                      </div>
                      <input
                        disabled
                        type="text"
                        value={user?.email}
                        className="input input-bordered w-full "
                      />
                    </label>
                  </div>
                </div>
                {/* genarel info */}
                <div className="p-4 bg-[#F9F9F9] rounded-lg">
                  <h1 className="text-xl font-semibold font-barlow tracking-normal capitalize ">
                    Generel information
                  </h1>
                  {/*  */}
                  <label className="form-control w-full mb-3">
                    <div className="label">
                      <span className="label-text text-[#424242] font-medium text-base">
                        Product Name
                      </span>
                    </div>
                    <input
                      type="text"
                      name="productName"
                      placeholder="Enter Updated Product Name"
                      className="input  w-full bg-[#eeeeee] "
                      defaultValue={productData?.productName}
                    />
                  </label>
                  {/*  */}
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text text-[#424242] font-medium text-base">
                        Product Description
                      </span>
                    </div>
                    <textarea
                      name="productDesc"
                      className="textarea w-full bg-[#eeeeee]"
                      placeholder="Enter Updated Description"
                      defaultValue={productData?.productDesc}
                    ></textarea>
                  </label>
                  {/*  */}
                </div>
                {/* price and stocks,ratings */}
                <div className="p-4 bg-[#F9F9F9] rounded-lg space-y-6">
                  {/*  */}
                  <div>
                    <h1 className="text-xl font-semibold font-barlow tracking-normal capitalize ">
                      Pricing and Rating
                    </h1>
                    <div className="flex justify-between gap-6 items-center">
                      <label className="form-control w-full  ">
                        <div className="label">
                          <span className="label-text text-[#424242] font-medium text-base">
                            Base Pricing
                          </span>
                        </div>
                        <input
                          type="text"
                          name="productPrice"
                          placeholder="Enter Updated Product Price"
                          className="input  w-full bg-[#eeeeee]"
                          defaultValue={productData?.productPrice}
                        />
                      </label>
                      {/*  */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text text-[#424242] font-medium text-base">
                            Rating
                          </span>
                        </div>
                        <input
                          type="text"
                          name="productRating"
                          placeholder="Enter Updated Product Rating"
                          className="input w-full bg-[#eeeeee]"
                          defaultValue={productData?.productRating}
                        />
                      </label>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <h1 className="text-xl font-semibold font-barlow tracking-normal capitalize ">
                      Processing Time and Stock
                    </h1>
                    {/*  */}
                    <div className="flex justify-between gap-6 items-center">
                      <label className="form-control w-full  ">
                        <div className="label">
                          <span className="label-text text-[#424242] font-medium text-base">
                            Processing Time
                          </span>
                        </div>
                        <input
                          type="text"
                          name="ProcessTime"
                          placeholder="Enter Updated Processing Time"
                          className="input w-full bg-[#eeeeee]"
                          defaultValue={productData?.ProcessTime}
                        />
                      </label>
                      {/*  */}
                      <label className="form-control w-full ">
                        <div className="label">
                          <span className="label-text text-[#424242] font-medium text-base">
                            Stock
                          </span>
                        </div>
                        <input
                          type="text"
                          name="StockProduct"
                          placeholder="Enter Updated Available Product"
                          className="input  w-full bg-[#eeeeee] "
                          defaultValue={productData?.StockProduct}
                        />
                      </label>
                    </div>
                  </div>
                  {/*  */}
                </div>
                {/* userInfo */}
                <div></div>
              </div>
              {/* col-1 */}
              <div className="col-span-1 space-y-4">
                {/* product image */}
                <div className="bg-[#F9F9F9] rounded-lg p-4 ">
                  <p className="text-xl font-semibold font-barlow tracking-normal capitalize mb-4">
                    Upload image
                  </p>
                  {/*  */}
                  <div className="h-40 w-full mx-auto bg-[#eeeeee] rounded-lg flex justify-center items-center mb-4">
                    {imageUrl || productData?.productUrl ? (
                      <img
                        className="w-full h-40 object-cover rounded-md"
                        src={imageUrl ? imageUrl : productData?.productUrl}
                        alt=""
                      />
                    ) : (
                      <p className=" text-center text-[#8f8f8f]">
                        Add link to Show image
                      </p>
                    )}
                  </div>
                  {/*  */}
                  <label className="form-control w-full  ">
                    <div className="label">
                      <span className="label-text text-[#424242] font-medium text-base">
                        Product Image
                      </span>
                    </div>
                    <input
                      onChange={handleImage}
                      type="text"
                      name="productUrl"
                      placeholder="Enter Updated Product Url"
                      className="input  w-full bg-[#eeeeee] "
                      defaultValue={productData?.productUrl}
                    />
                  </label>
                </div>
                {/* category and custmization */}
                <div className="bg-[#F9F9F9] rounded-lg p-4">
                  <h1 className="text-xl font-semibold font-barlow tracking-normal capitalize ">
                    Category and Customizations
                  </h1>
                  <label className="form-control w-full mb-4 ">
                    <div className="label">
                      <span className="label-text text-[#424242] font-medium text-base">
                        Product Category
                      </span>
                    </div>
                    <input
                      type="text"
                      name="productCate"
                      placeholder="Enter Updated Product Category"
                      className="input  w-full bg-[#eeeeee] "
                      defaultValue={productData?.productCate}
                    />
                  </label>
                  {/*  */}
                  <label className="form-control w-full ">
                    <div className="label">
                      <span className="label-text text-[#424242] font-medium text-base">
                        Customization
                      </span>
                    </div>
                    <input
                      type="text"
                      name="customize"
                      placeholder="Enter Updated Customize Product"
                      className="input  w-full bg-[#eeeeee] "
                      defaultValue={productData?.productCustomization}
                    />
                  </label>
                </div>
              </div>
            </div>
          </Fade>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
