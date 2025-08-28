import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa6";

export default function ShowcaseEducationPersonalInfo({
  addEduFields,
  personalInfo,
  educationInfo,
}) {



  if (addEduFields === true) {
    return (
      <>
       {personalInfo.city !== "" ? (
        <IoLocationOutline
          style={{ width: "20px", height: "20px" }}
          className="row-start-2"
        />
      ) : null}
        <span id="city-country" className="row-start-2 col-start-2 text-[16px]">
          {personalInfo.city}{personalInfo.country}
        </span>
       {personalInfo.phone !== ""?<IoPhonePortraitOutline
        style={{ width: "20px", height: "20px" }}
        className="row-start-3"
      />:null}
        <span id="phone-no" className="row-start-3 col-start-2">
          {personalInfo.phone}
        </span>
       {personalInfo.email !==""?<AiOutlineMail
        style={{ width: "20px", height: "20px" }}
        className="row-start-4"
      />:null}
        <span id="email" className="row-start-4 col-start-2">
          {personalInfo.email}
        </span>
         {personalInfo.address !== ""?<FaRegAddressCard
        style={{ width: "20px", height: "20px" }}
        className="row-start-5"
      />:null}
        <span id="address" className="row-start-5 col-start-2 col-end-6 ">
          {personalInfo.address}
        </span>
        <span id="Education" className="row-start-8">
        </span>
        <span id="degree" className="row-start-9 ">
          {educationInfo.degree}
        </span>
        <span id="university" className="row-start-10">
          {educationInfo.university}
        </span>
        <span id="city" className="row-start-11">
          {educationInfo.city}
        </span>
        <span
          id="completion-date"
          className="row-start-12 col-start-1 col-end-8"
        >
          {educationInfo.endDate}
        </span>

        <span id="degree2" className="row-start-14 ">
          {educationInfo.degree2}
        </span>
        <span id="university2" className="row-start-15">
          {educationInfo.university2}
        </span>
        <span id="city2" className="row-start-16">
          {educationInfo.city2}
        </span>
        <span
          id="completion-date2"
          className="row-start-17 col-start-1 col-end-8"
        >
          {educationInfo.endDate2}
        </span>

        <span id="degree3" className="row-start-19 ">
          {educationInfo.degree3}
        </span>
        <span id="university3" className="row-start-20">
          {educationInfo.university3}
        </span>
        <span id="city" className="row-start-21">
          {educationInfo.city3}
        </span>
        <span
          id="completion-date3"
          className="row-start-22 col-start-1 col-end-8"
        >
          {educationInfo.endDate3}
        </span>
      </>
    );
  }

  return (
    <>
      {personalInfo.city !== "" ? (
        <IoLocationOutline
          style={{ width: "20px", height: "20px" }}
          className="row-start-2"
        />
      ) : null}
      <span id="city-country" className="row-start-2 col-start-2 col-end-8 text-[16px]">{personalInfo.city}
        {personalInfo.country!== ""? ", "+ personalInfo.country:null}
      </span>
      {personalInfo.phone !== ""?<IoPhonePortraitOutline
        style={{ width: "20px", height: "20px" }}
        className="row-start-3"
      />:null}
      <span id="phone-no" className="row-start-3 col-start-2">
        {personalInfo.phone}
      </span>
      {personalInfo.email !==""?<AiOutlineMail
        style={{ width: "20px", height: "20px" }}
        className="row-start-4"
      />:null}
      <span id="email" className="row-start-4 col-start-2">
        {personalInfo.email}
      </span>
      {personalInfo.address !== ""?<FaRegAddressCard
        style={{ width: "20px", height: "20px" }}
        className="row-start-5"
      />:null}
      <span id="address" className="row-start-5 col-start-2 col-end-6 ">{personalInfo.address}</span>
      <span id="Education" className="row-start-8">{educationInfo.degree !== ""?"Education":null}</span>
      <span id="degree" className="row-start-9 ">
        {educationInfo.degree}
      </span>
      <span id="university" className="row-start-10"></span>
      <span id="city" className="row-start-11"></span>
      <span id="completion-date" className="row-start-12 col-start-1 col-end-8">{educationInfo.endDate}</span>
    </>
  );
}
