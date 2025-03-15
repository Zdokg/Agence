import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../components/footer.css";

function Footer() {
    const [formData, setFormData] = useState({ email: "", comment: "" });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3100/API/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const text = await response.text(); // Get raw response
            console.log("Raw response:", text); // Debugging

            const result = JSON.parse(text); // Parse response if valid
            
            if (response.ok) {
                toast.success(result.message || "Merci pour votre message");
                setFormData({ email: "", comment: "" });
            } else {
                toast.error(result.error || "Error in connection");
            }
        } catch (error) {
            console.error("Fetch Error:", error); // Log full error
            toast.error("An unexpected error occurred. Check the console for details.");
        }
    };

    return (
        <div className="allF">
            <img src="" alt=""/>
            <h1 className="sfarF">VOYAGE++</h1>
            <p className="klmtin">
                The most affordable agency for the shortest trips in the country, <br/>
                Explore our new V-Points for more promotions and exclusive deals. <br/>
                The more active you are, the more you get V-Points. With V-Points, <br/>
                you get exclusive usage for the deals. Be one of V-Points users to get more info!
            </p>

            <p className="klmtin1"><br/>Follow us on our socials below</p>
            <div className="logoF">
                <img width="50" height="50" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitter"/>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
                <img width="50" height="50" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram"/>
            </div>

            <form onSubmit={handleSubmit}>
                <input 
                    className="mailek" 
                    placeholder="example@exm.com" 
                    type="email" 
                    name="email"
                    value={formData.email} 
                    onChange={handleChange}
                    required
                />
                <textarea 
                    className="commentF" 
                    placeholder="Comment" 
                    name="comment"
                    value={formData.comment} 
                    onChange={handleChange}
                    required
                />
                <button className="SubF" type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Footer;

