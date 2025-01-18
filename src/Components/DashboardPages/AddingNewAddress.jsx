import "./Dashboard.css";
import Sidebar from "./Sidebar";
import AddressCard from "./AddressCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckBox from "../InputFields/CheckBox";

const AddingNewAddress = () => {
  const [userData, setUserData] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Fetch user details
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://interior-design-backend-nine.vercel.app/api/v1/me",
          {
            withCredentials: true,
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  // Update address function
  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    const addressData = {
      address: e.target.address.value,
      landmark: e.target.landmark.value,
      state: e.target.state.value,
      city: e.target.city.value,
      pin_code: e.target.pin_code.value,
    };

    // Prepare the payload dynamically
    const payload = {
      [selectedAddress]: addressData,
    };

    try {
      const response = await axios.put(
        `https://interior-design-backend-nine.vercel.app/api/v1/me/updateAddress`,
        payload,
        { withCredentials: true }
      );
      console.log("Address updated successfully:", response.data);

      // Update local state to reflect changes
      setUserData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          [selectedAddress]: addressData,
        },
      }));

      setSelectedAddress(null); // Hide the form after update
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  // console.log(userData.user.primaryaddress);

  return (
    <section className="dashboard-container">
      <div className="main-content">
        <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
          <span className="welcome-text">
            Welcome, {userData?.user?.full_name}
          </span>
        </div>
        <div>
          <div className="content-sections">
            <Sidebar />
            <div className="Dashcard-section d-flex flex-column w-100 gap-4">
              <div className="address-cards">
                {/* for primary address */}
                <AddressCard
                  title={"Primary Address"}
                  userName={userData?.user?.full_name}
                  address={userData?.user?.primaryaddress}
                  onEdit={() => setSelectedAddress("primaryaddress")}
                />
                {/* for secondary address */}
                <AddressCard
                  title={"Secondary Address"}
                  userName={userData?.user?.full_name}
                  address={userData?.user?.secondaryaddress}
                  onEdit={() => setSelectedAddress("secondaryaddress")}
                />
              </div>

              {/* Address Form */}
              {selectedAddress === "primaryaddress" && (
                <form onSubmit={handleUpdateAddress} className="addaddressform">
                  <div className="form-details d-flex flex-column gap-2">
                    {/* <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      id="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    /> */}
                    <div className="d-flex w-100 flex-column gap-1">
                      <label htmlFor="address">Address</label>
                      <input
                        placeholder="Siya ram puri ayodhya"
                        type="text"
                        id="address"
                        style={{ width: "100%", height: "55px" }}
                        defaultValue={userData?.user?.primaryaddress?.address}
                        required
                      />
                    </div>
                    <div className="d-flex w-100 flex-column gap-1">
                      <label htmlFor="landmark">Landmark</label>
                      <input
                        placeholder="Ram mandir"
                        type="text"
                        id="landmark"
                        defaultValue={userData?.user?.primaryaddress?.landmark}
                        required
                      />
                    </div>

                    <div className="detailaddress flex-wrap">
                      <div className="d-flex flex-column gap-1">
                        <label htmlFor="state">State</label>
                        <input
                          placeholder="UP"
                          type="text"
                          id="state"
                          defaultValue={userData?.user?.primaryaddress?.state}
                          required
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <label htmlFor="city">Town/City</label>
                        <input
                          placeholder="Ayodhya"
                          type="text"
                          id="city"
                          defaultValue={userData?.user?.primaryaddress?.city}
                          required
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <label htmlFor="pin_code">Pincode</label>
                        <input
                          placeholder="224123"
                          type="text"
                          id="pin_code"
                          defaultValue={
                            userData?.user?.primaryaddress?.pin_code
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className="d-flex flex-column gap-2 my-2"
                        style={{ width: "200px" }}
                      >
                        <button
                          type="submit"
                          className="btn btn-base-transparent w-fit"
                          style={{ width: "fit-content !important" }}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
              {selectedAddress === "secondaryaddress" && (
                <form onSubmit={handleUpdateAddress} className="addaddressform">
                  <div className="form-details d-flex flex-column gap-2">
                    {/* <label htmlFor="full_name">Full Name</label>
                    <input
                      type="text"
                      id="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    /> */}
                    <div className="d-flex w-100 flex-column gap-1">
                      <label htmlFor="address">Address</label>
                      <input
                        placeholder="Siya ram puri ayodhya"
                        type="text"
                        id="address"
                        defaultValue={userData?.user?.secondaryaddress?.address}
                        required
                      />
                    </div>
                    <div className="d-flex w-100 flex-column gap-1">
                      <label htmlFor="landmark">Landmark</label>
                      <input
                        placeholder="Ram mandir"
                        type="text"
                        id="landmark"
                        defaultValue={
                          userData?.user?.secondaryaddress?.landmark
                        }
                        required
                      />
                    </div>
                    <div className="detailaddress flex-wrap">
                      <div className="d-flex flex-column gap-1">
                        <label htmlFor="state">State</label>
                        <input
                          placeholder="UP"
                          type="text"
                          id="state"
                          defaultValue={userData?.user?.secondaryaddress?.state}
                          required
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <label htmlFor="city">Town/City</label>
                        <input
                          placeholder="Ayodhya"
                          type="text"
                          id="city"
                          defaultValue={userData?.user?.secondaryaddress?.city}
                          required
                        />
                      </div>
                      <div className="d-flex flex-column gap-1">
                        <label htmlFor="pin_code">Pincode</label>
                        <input
                          placeholder="224123"
                          type="text"
                          id="pin_code"
                          defaultValue={
                            userData?.user?.secondaryaddress?.pin_code
                          }
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="d-flex flex-column gap-2 my-2"
                      style={{ width: "200px" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-base-transparent w-fit"
                        style={{ width: "fit-content !important" }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddingNewAddress;
