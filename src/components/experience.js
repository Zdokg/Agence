import React, { useState } from "react";
import "./experience.css";

function Experience() {
    const [post, setPost] = useState([
        { id: 1, user: "Jane-Cooper-The-Third", content: "This site is one of a kind! I love the V-Points, it's a creative idea for users to stay active and take advantage of promotions. Keep it up.", image: "", date: new Date(), reaction: { like: 0, love: 0, wow: 0 }, comment: [] },
        { id: 2, user: "SomeDudeFrom03", content: "Interesting", image: "", date: new Date(), reaction: { like: 0, love: 0, wow: 0 }, comment: [] },
        { id: 3, user: "MiMi-MOMO-2001", content: "You can do better!!", image: "", date: new Date(), reaction: { like: 0, love: 0, wow: 0 }, comment: [] }
    ]);

    const [newPost, setNewPost] = useState("");
    const [newUser, setNewUser] = useState("");
    const [image, setImage] = useState(null);
    const [newComment, setNewComment] = useState({});

    // Add Post
    const handleAddedPost = () => {
        if (newPost.trim() !== "" || image) {
            setPost([{ 
                id: Date.now(), 
                user: newUser || "Anonymous", 
                content: newPost, 
                image, 
                date: new Date(), 
                reaction: { like: 0, love: 0, wow: 0 }, 
                comment: [] // Ensure comments array is properly initialized
            }, ...post]);

            // Reset input fields
            setNewPost("");
            setNewUser("");
            setImage(null);
            setNewComment({});
        }
    };

    // Handle Image Upload
    const handleUploadImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    // Handle Reactions
    const handleReaction = (postId, reaction) => {
        setPost(post.map(p =>
            p.id === postId ? { ...p, reaction: { ...p.reaction, [reaction]: p.reaction[reaction] + 1 } } : p
        ));
    };

    // Add Comment
    const handleAddComment = (postId) => {
        if (newComment[postId]?.trim()) {
            setPost(post.map(p =>
                p.id === postId ? { ...p, comment: [...p.comment, newComment[postId]] } : p
            ));
            setNewComment({ ...newComment, [postId]: "" });
        }
    };








    return (
        <div className="lkbir">
            <h1>Partagez votre Experience</h1>
            <div className="luser">
            <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} placeholder="Nom" />
            <textarea value={newPost} onChange={(e) => setNewPost(e.target.value)} placeholder="Publication" />
            <input type="file" accept="image/*" onChange={handleUploadImage} class="te5tar"/>
            <button onClick={handleAddedPost}>Publier</button>
            </div>
            <div className="affiche">
                {post.map((p) => (
                    <div className="headerP" key={p.id}>
                        <img width="48" height="48" src="https://img.icons8.com/pulsar-line/48/user.png" alt="user" class="logoMte3na"/>
                        <h3>{p.user}</h3>
                        <p class="iii">{p.date instanceof Date ? p.date.toLocaleDateString() : "No Date"}</p>

                        <p class="ooo">{p.content}</p>

                        {p.image && <img src={p.image} alt="" className="tas" />}

                        <div className="reaction">
                            <button class="likea" onClick={() => handleReaction(p.id, "like")}>
                                <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/facebook-like.png" alt="facebook-like" />
                            </button>
                            <p class="likep">{p.reaction?.like || 0}</p>

                            <button class="lovea" onClick={() => handleReaction(p.id, "love")}>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/filled-like.png" alt="filled-like" />
                            </button>
                            <p class="lovep">{p.reaction?.love || 0}</p>

                            <button class="wowa"onClick={() => handleReaction(p.id, "wow")}>
                                <img width="48" height="48" src="https://img.icons8.com/emoji/48/face-with-open-mouth.png" alt="face-with-open-mouth" />
                            </button>
                            <p class="wowp">{p.reaction?.wow || 0}</p>

                            <div className="comment">
                                
                                <div className="tttt">
                                {Array.isArray(p.comment) ? p.comment.map((comment, index) => <p  key={index}>{comment}</p>) : <p>No comments yet.</p>}
                                </div>
                                
                                <input
                                className="elComment"
                                    type="text"
                                    placeholder="    Ajouter Commentaire"
                                    value={newComment[p.id] || ""}
                                    onChange={(e) =>
                                        setNewComment({ ...newComment, [p.id]: e.target.value })
                                    }
                                />

                                <button onClick={() => handleAddComment(p.id)} className="elbuttonC">Send</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
