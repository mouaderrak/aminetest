// Fetch user information from an API or any other source
function fetchUserInfo() {
    // Simulated user data for demonstration
    const userData = {
        name: "John Doe",
        profileImage: "https://www.pngitem.com/pimgs/m/4-40070_user-staff-man-profile-user-account-icon-jpg.png",
    };
    return userData;
}

// Function to update the user account dynamically
function updateUserAccount() {
    const userAccount = document.getElementById("userAccount");
    const userData = fetchUserInfo();
    
    // Create elements for user account
    const userProfileImage = document.createElement("img");
    userProfileImage.src = userData.profileImage;
    userProfileImage.alt = "User Account";

    // Append elements to user account
    userAccount.innerHTML = ""; // Clear previous content
    userAccount.appendChild(userProfileImage);
}

// Call the function to update user account when the page loads
window.onload = updateUserAccount;
