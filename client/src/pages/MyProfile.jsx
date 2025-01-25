import React, { useState, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";
import { jwtDecode } from 'jwt-decode'
const server_url = import.meta.env.VITE_SERVER_DEV




const MyProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("Lacheb");
  const [email, setEmail] = useState("example@estin.dz");
  const [phone, setPhone] = useState("0773651429");
  const [address, setAddress] = useState("Batna");
  const [birthdayDay, setBirthdayDay] = useState("23");
  const [birthdayMonth, setBirthdayMonth] = useState("");
  const [birthdayYear, setBirthdayYear] = useState("2005");
  const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/150");
  const [profile, setProfile] = useState({});


  const getUserId = () => {
    const token = localStorage.getItem('token'); 
  
    if (!token) {
      return null; 
    }
  
    try {
      const decoded = jwtDecode(token);
      // console.log(decoded.id);
      return decoded.id; // Adjust according to your token structure
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = getUserId(); 
        // console.log(userId)
        // Example userId
        if (!userId) return;

        
        const response = await axios.get(`${server_url}/api/${userId}`); 

        const Dat = response.data  
        // console.log(response)
        // console.log(Dat.users_firstname)
        setFirstName(Dat.users_firstname || "");
        

        setLastName(Dat.users_name || "");
        setEmail(Dat.users_email || "");
        setPhone(Dat.users_phone || "");
        setAddress(Dat.users_address || "");
        setBirthdayDay(Dat.day_of_birth|| "");
        setBirthdayMonth(Dat.month_of_birth || "");
        setBirthdayYear(Dat.year_of_birth || "2005");
        setProfilePicture(Dat.users_image_link || "https://via.placeholder.com/150");
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []); // Empty dependency array to run once when component mounts

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePicture = () => {
    setProfilePicture("https://via.placeholder.com/150");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const formData = {
      users_firstname: firstName,
      users_name: lastName,
      users_email: email,
      users_phone: phone,
      users_address: address,
      users_id: getUserId(),
    };
  
    try {
      const response = await axios.put(`${server_url}/api/${getUserId()}`, formData);
      alert('Profile updated successfully');
    } catch (err) {
      alert('Error updating profile');
      console.error(err);
    }
  
    console.log("Saved data:", formData);
  };
  

  const handleCancel = () => {
    alert("Changes canceled");
  };

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => (new Date().getFullYear() - i).toString()
  );
  


  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Profile</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Profile Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <button
                onClick={handleDeletePicture}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete Picture
              </button>
              <label className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
                Change Picture
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePictureChange}
                />
              </label>
            </div>
          </div>

          {/* Profile Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Birthday</label>
              <div className="flex gap-2">
                <select
                  name="birthdayDay"
                  value={birthdayDay}
                  onChange={(e) => setBirthdayDay(e.target.value)}
                  className="w-1/3 px-4 py-2 border rounded-lg"
                >
                  <option value="">Day</option>
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select
                  name="birthdayMonth"
                  value={birthdayMonth}
                  onChange={(e) => setBirthdayMonth(e.target.value)}
                  className="w-1/3 px-4 py-2 border rounded-lg"
                >
                  <option value="">Month</option>
                  {months.map((month, index) => (
                    <option key={index} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  name="birthdayYear"
                  value={birthdayYear}
                  onChange={(e) => setBirthdayYear(e.target.value)}
                  className="w-1/3 px-4 py-2 border rounded-lg"
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Save and Cancel Buttons */}
            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
