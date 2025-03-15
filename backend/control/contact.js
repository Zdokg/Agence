const User = require("../models/contact");

async function add(req, res) {
    try {
        console.log("Request Body:", req.body); // Log incoming data
        
        const { email, comment } = req.body;
        if (!email || !comment) {
            console.log("Validation Failed: Missing fields");
            return res.status(400).json({ message: "Fill all fields" });
        }

        const newContact = new User({ email, comment });
        await newContact.save();
        console.log("Contact saved successfully!");

        res.status(201).json({ message: "Comment added!" });

    } catch (error) {
        console.error("Error in add():", error);
        return res.status(500).json({ error: "Database Save Error" });
    }
}


async function show(req, res) {  
    try {
        const det = await User.find();
        res.json(det);
    } catch (error) {
        console.error("Error fetching users:", error); // Log the actual error
        return res.status(500).json({ error: "Database Error" }); // More descriptive
    }
}




module.exports={add, show}; 