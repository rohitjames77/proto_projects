

export default function PersonalForm({ personalInfo, setPersonalInfo }) {
  const handleOnChange = function (event) {
    const { id, value } = event.target;
    setPersonalInfo({ ...personalInfo, [id]: value });
  };

  return (
    <div className="bg-gray-400 w-full h-[90vh] border-3 border-solid border-black-500 text-black text-2xl " id="personal-form-container ">
      <form className="" id="personal-form">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          maxLength={30}
          className=""
          id="firstName"
          value={personalInfo.firstName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          maxLength={30}
          className=""
          id="lastName"
          value={personalInfo.lastName}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className=""
          id="email"
          value={personalInfo.email}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          className=""
          id="phone"
          value={personalInfo.phone}
          onChange={handleOnChange}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          className=""
          maxLength={100}
          id="address"
          value={personalInfo.address}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          className=""
          maxLength={60}
          id="city"
          value={personalInfo.city}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          className=""
          maxLength={60}
          id="country"
          value={personalInfo.country}
          onChange={handleOnChange}
          required
        />
      </form>
    </div>
  );
}