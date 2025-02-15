import React, { useContext, useState } from "react";
import { MdAddToPhotos } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";
import { ProductContext } from "../../provider/ProductInfoProvider";
import Swal from "sweetalert2";
import Hero from "../../components/Hero";
import { Fade, Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import addProduct from "../../assets/lottie/add.json"
import successIcon from "../../assets/lottie/uploadComplete.json"
import errorIcon from "../../assets/lottie/loginError.json"
import { Helmet } from "react-helmet";
//
const AddEquipment = () => {
  // context
  const { user } = useContext(AuthContext);
  const { products, setRefresh } = useContext(ProductContext);
  // state for onchanges
  const [imageUrl, setImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  // 
  const [lottie , setLottie ] = useState("")
  //
  // for form submit
  const handleProductAdd = (event) => {
    event.preventDefault();
    //
    const form = event.target;
    // product information
    const productInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      productName: productName,
      productDesc: form.productDesc.value,
      productPrice: form.productPrice.value,
      productRating: form.productRating.value,
      ProcessTime: form.ProcessTime.value,
      StockProduct: form.StockProduct.value,
      productUrl: imageUrl,
      productCate: form.productCate.value,
      productCustomization: form.customize.value,
    };
    // find exixting product
    const existingProduct = products.find((i) => i.productName === productName);
    //
    if ( productInfo?.productName.length >= 6 && productInfo?.productUrl && !existingProduct) {
      //   fetch for database
      fetch("https://equi-sports-server-green.vercel.app/add-equipment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(productInfo),
      })
        .then((res) => res.json())
        .then(() => {
          setLottie("succ");
          //fancy alert
          Swal.fire({
            position: "center",
            icon: "success",
            title: "🎉New Product Added Successfully! 🛒✨",
            showConfirmButton: false,
            timer: 2000,
          });
          // for side effect
          setRefresh((prev) => !prev);
        });
      return;
    } else if (existingProduct) {
      setLottie("err");
      Swal.fire({
        title: "Product Already Exists!",
        text: "⚠️ Warning: This Named product already exists in the database. Please check and try again with a different product. 🔄",
        icon: "warning",
      });
      return;
    } else {
      setLottie("err");
      Swal.fire({
        title: "Add Product Guidelines?",
        text: "🚨 Friendly Reminder: Please provide a product name with at least 6 characters and a valid image link to add a new product. 😊",
        icon: "info",
      });
    }
  };
  // func for get onchanges data
  const handleImage = (e) => {
    setImageUrl(e.target.value);
  };
  const handleName = (e) => {
    setProductName(e.target.value);
  };
  //
  return (
    <>
     <Helmet>
       <title>Home || Add Equipment</title>
    </Helmet>
      <div className="py-4 my-10 ">
        <Hero title={"Add New product"} path={location?.pathname} />
      </div>
      {/*  */}
      <div className="w-11/12 mx-auto font-DMSans tracking-tight sm:py-10">
        <form onSubmit={handleProductAdd}>
          {/* header */}
          <Slide direction="down">
            <div className="flex justify-between items-center gap-6 flex-wrap">
              <h1 className="text-3xl font-medium font-barlow tracking-wide flex justify-start items-center">
              <Lottie animationData={addProduct} loop={true} style={{width:60, height:50}} />
                <span>Add New product</span>
              </h1>
              <div className="flex justify-between items-center gap-6 flex-wrap">
                <span className="border px-6 py-3 rounded-lg text-lg font-medium">
                  Total Added product :{" "}
                  <span>
                    {products.filter((i) => i.userEmail === user?.email).length}
                  </span>
                </span>
                <button className="btn bg-[#9feea7] rounded-full px-6 text-base">
                  {lottie ==="succ" && <Lottie animationData={successIcon} loop={false} style={{width:40, height:40}}/>} {lottie ==="err" && <Lottie animationData={errorIcon} loop={true} style={{width:30, height:30}}/> } {lottie === "" && <Lottie animationData={successIcon} loop={false} style={{width:40, height:40}}/>} Add Product
                </button>
              </div>
            </div>
          </Slide>
          {/* <IoCheckmarkDone /> */}
          {/* grid */}
          <Fade delay={250} duration={1500}>
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
                      placeholder="Enter Product Name"
                      className="input  w-full bg-[#eeeeee] "
                      onChange={handleName}
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
                      placeholder="Add Product Description"
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
                          type="number"
                          name="productPrice"
                          placeholder="Add Product Price"
                          className="input  w-full bg-[#eeeeee]"
                          min={20}
                          max={3000}
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
                         type="number"
                          name="productRating"
                          placeholder="Add Product Rating"
                          className="input w-full bg-[#eeeeee]"
                          min={0}
                          max={5}
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
                          type="number"
                          name="ProcessTime"
                          placeholder="Add Processing Time"
                          className="input w-full bg-[#eeeeee]"
                          min={1}
                          max={45}
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
                          type="number"
                          name="StockProduct"
                          placeholder="Add Available Product"
                          className="input  w-full bg-[#eeeeee] appearance-none "
                          min={1}
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
                    {imageUrl ? (
                      <img
                        className="w-full h-40 object-cover rounded-md"
                        src={imageUrl}
                        alt=""
                      />
                    ) : (
                      <p className=" text-center text-[#8f8f8f]">
                        Add link to Show image <br />
                        <span className="text-xs">
                          {" "}
                          Add 650 ✖️ 650 image for better user experience
                        </span>
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
                      placeholder="Enter Product Url"
                      className="input  w-full bg-[#eeeeee] "
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
                      <select name="productCate" defaultValue={'default'} className=" w-full bg-[#eeeeee] p-3 rounded-lg text-[#6c6c6c]" >
                         <option value="default">Select Category</option>
                         <option value="sports-shoes">Sports shoes</option>
                         <option value="cricket-bat">Cricket Bat</option>
                         <option value="Bags"> Bags</option>
                         <option value="leg-guards">Leg Guards</option>
                         <option value="cricket-ball">Cricket Ball</option>
                         <option value="gloves">Gloves</option>
                         <option value="batminton-racket">Racket</option>
                         <option value="cricket-helmet">Cricket Helmet</option>
                         <option value="football">Football</option>
                      </select>
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
                      placeholder="Add Customize Product"
                      className="input  w-full bg-[#eeeeee] "
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

export default AddEquipment;
