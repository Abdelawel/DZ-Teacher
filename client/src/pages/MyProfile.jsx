import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const MyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    birthday: { day: "", month: "", year: "" },
    profilePicture: "https://via.placeholder.com/150", // Default profile picture
  });

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({ ...prevData, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePicture = () => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: "https://via.placeholder.com/150", // Reset to default picture
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("birthday")) {
      setFormData({
        ...formData,
        birthday: { ...formData.birthday, [name.split(".")[1]]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    console.log("Saved data:", formData);
    alert("Profile saved successfully!");
  };

  const handleCancel = () => {
    alert("Changes canceled.");
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
  
  const [profile, setProfile] = useState({});
  const getUserId = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const decoded = jwt_decode(token);
    return decoded.id; // Assuming the token contains { id: userId }
};

const userId = getUserId();
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(/api/users/`${userId}`);
                setProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

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
                src={formData.profilePicture}
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
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Birthday</label>
              <div className="flex gap-2">
                <select
                  name="birthday.day"
                  value={formData.birthday.day}
                  onChange={handleChange}
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
                  name="birthday.month"
                  value={formData.birthday.month}
                  onChange={handleChange}
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
                  name="birthday.year"
                  value={formData.birthday.year}
                  onChange={handleChange}
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
