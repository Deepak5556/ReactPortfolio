export const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loops
    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
};

export const handleAvatarError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://ui-avatars.com/api/?name=User&background=random";
};
