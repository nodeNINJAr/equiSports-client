import React, { useContext, useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import { AuthContext } from "../../provider/AuthProvider";

const AddEquipment = () => {
  // context
  const { user } = useContext(AuthContext);
  //
  const [AddedProduct, setAddedproduct] = useState(null);
  // state for onchanges
  const [imageUrl, setImageUrl] = useState("");
  // for form submit
  const handleProductAdd = (event) => {
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
      productUrl: imageUrl,
      productCate: form.productCate.value,
      productCustomization: form.customize.value,
    };
    setAddedproduct(productInfo);

    //   fetch for database
     fetch('http://localhost:5000/add-equipment',{
         method:"POST",
         headers:{
            "Content-type" : "application/json"
         },
         body: JSON.stringify(productInfo)
     })
     .then( res => res.json())
     .then(data =>{
        console.log(data)
        alert("data added on database")
     })


  };
  //
  const handleImage = (e) => {
    setImageUrl(e.target.value);
  };
  //

  return (
    <div className="w-11/12 mx-auto font-DMSans tracking-tight py-10">
      <form onSubmit={handleProductAdd}>
        {/* header */}
        <div className="flex justify-between items-center gap-6">
          <h1 className="text-3xl font-medium font-barlow tracking-wide flex justify-start items-center gap-2">
            <MdAddToPhotos className="text-2xl" /> <span>Add New product</span>
          </h1>
          <div className="flex justify-between items-center gap-6">
            <span className="border px-6 py-3 rounded-lg text-lg font-medium">
              Total Added product : <span>2</span>
            </span>
            <button className="btn bg-[#9feea7] rounded-full px-6 text-base">
              <IoCheckmark className="text-xl" />
              Add Product
            </button>
          </div>
        </div>
        {/* <IoCheckmarkDone /> */}
        {/* grid */}
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
                      type="text"
                      name="productPrice"
                      placeholder="Add Product Price"
                      className="input  w-full bg-[#eeeeee]"
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
                      placeholder="Add Product Rating"
                      className="input w-full bg-[#eeeeee]"
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
                      placeholder="Add Processing Time"
                      className="input w-full bg-[#eeeeee]"
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
                      placeholder="Add Available Product"
                      className="input  w-full bg-[#eeeeee] "
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
                  <img className="w-full h-40 object-cover rounded-md" src={imageUrl} alt="" />
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
                <input
                  type="text"
                  name="productCate"
                  placeholder="Add Product Category"
                  className="input  w-full bg-[#eeeeee] "
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
                  placeholder="Add Customize Product"
                  className="input  w-full bg-[#eeeeee] "
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
