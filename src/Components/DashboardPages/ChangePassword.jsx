import React, { useState } from "react";
import axios from "axios";
import "./OrderCard.css";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import { toast } from "react-toastify";


const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!password || !confirmPassword) {
            toast.error("Both fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.put(
                "https://interior-design-backend-nine.vercel.app/api/v1/password/update",
                { password, confirmPassword },
                { headers: { "Content-Type": "application/json" } }
            );
            if (response.status === 200) {
                toast.success("Password reset successfully!");
                setPassword("");
                setConfirmPassword("");
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <section className="dashboard-container">
            <div className="main-content">
                <div className="py-3 border-1 border-bottom border-gray d-flex align-items-center justify-content-center">
                    <span className="welcome-text">Welcome, Kabir Sah</span>
                </div>
                <div>
                    <div className="content-sections">
                        <Sidebar />
                        <div className="d-flex flex-column gap-2 w-100">
                            <div
                                className="login-container-pass d-flex items-center justify-between login-section w-100"
                                style={{ height: "fit-content !important" }}
                            >
                                <form
                                    onSubmit={handleSubmit}
                                    className="login-form-pass justify-content-start"
                                >
                                    <div className="form-title">Change Password</div>
                                    <div className="inp-grp">
                                        <label htmlFor="password">Enter the new password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Enter The New Password Here"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="inp-grp">
                                        <label htmlFor="confirmPassword">Confirm the new password</label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            placeholder="Re-Enter The New Password Here"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="submit-btn">
                                        <button type="submit" className="btn-blue py-2 bg-colored">
                                            Submit
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center "></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChangePassword;
