 # Lost & Found Website

The Lost & Found website is a community-driven platform designed to help individuals report and reclaim lost items. By facilitating the reporting of both lost and found items, the website aims to create a seamless process for reuniting people with their belongings.


## link live: https://found-lost-frontend.vercel.app
## server-side link : https://github.com/RezoanulHasan/found-lost-backend
## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Home Page/Landing Page**
   - **Header**
     - Logo: Display the website's logo prominently.
     - Navigation Bar: Links to Home, About Us, Login/Register (if not logged in), and My Profile (if logged in).
   - **Hero Section**
     - Headline: "Find what you lost, reunite what you found!"
     - Buttons: "Report a Lost Item" and "Report a Found Item".
     - Background Image: Optional background image showcasing lost and found items.
   - **About Section**
     - Purpose and Mission: Brief description of the website's purpose and mission.
     - Team Information: Information about the team.
   - **Recent Lost Item Reports**
     - Display: Limited number (e.g., 5) of recently reported lost items.
     - Details: Each item includes a short description, date and location where it was lost , and a link to the full lost item report.
  - **Recent Found Item Reports**
     - Display: Limited number  (e.g., 5) of recently reported found items.
     - Details: Each item includes a short description, date and location where it was found , and a link to the full found item report.
- **Other Section**
     - Testimonials: Comtomer Review.
     - Tips: Advice for reporting lost or found items.
   - **Footer**
     - Contact Information: Email address, social media links.
     - Copyright Information: Standard copyright details.
     - Additional Links: Terms of Use, Privacy Policy, etc.

2. **Login & Registration**
   - **Login Form**
     -  email address
     - Password
   - **Registration Form**
     - Username
     - PhoneNumber
     - Image Upload
     - Email address
     - Password (with confirmation)

3. **Submit Lost Items Page**
   - **Form Details**
     - Item Category: E.g., wallet, phone, keys.
     - Description: Detailed description including brand, color, and distinguishing marks.
     - Date and Location: When and where it was lost .
     - Mark as Found: Functionality to update status if the item is found.
   - **Other Fields**
     - Contact Information: Phone number, email.
     - Upload Images: Images of the lost item.

4. **Submit Found Items Page**
   - **Form Details**
     - Item Category: E.g., wallet, phone, keys.
     - Description: Detailed description.
     - Date and Location: When and where it was found.
   - **Other Fields**
     - Contact Information: Phone number, email.
     - Upload Images: Images of the found item.
   - **Claim Process**
     - Verification of Ownership: Detailed descriptions, proof of purchase, photos, ownership documentation, detailed loss accounts, matching accessories, security features, and third-party confirmation.

5. **My Profile**
   - **User Account Information**
     - Edit Profile: Options to edit username and email.
     - Change Password: Link to Change Password page.
  
     - **My Claim list**
       - List of claim requests made by the user.
       - Details include item description, finder's contact information (if provided), and status (pending, approved, rejected).
     - **My Lost Items**
       - List of items reported lost by the user.
       - Details include item description, date and location (if provided), and options to edit or delete the report.
     - **My Found Items**
       - List of items reported found by the user.
       - Details include item description, date and location (if provided), options to edit or delete the report, and status of the item (approved, rejected). Change status if the actual owner is found.

6. **Admin Dashboard (User Management)**
   - **Features for Administrators**
     - User Management: View and manage user accounts (activate/deactivate, etc.)
     - Website Activity Monitoring: Track metrics such as the number of reported items and successful reunions.

7. **View Recent Posts Page**
   - **Features**
     - List: Recently reported lost and found items.
     - Filters and Search: Filter by category, location (if provided), and keywords in the description.

8. **Change Password Page**
   - **Features**
     - Fields: Current password, new password (with confirmation).




## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.
