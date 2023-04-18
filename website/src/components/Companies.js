import React from "react";

const images = [
  "https://companieslogo.com/img/orig/ECL_BIG.D-a410f008.png?t=1654489788",
  "https://companieslogo.com/img/orig/ADSK_BIG.D-b3f863c2.png?t=1634221106",
  "https://www.synopsys.com/content/dam/synopsys/company/about/legal/synopsys-logos/whitelogo/synopsys_wht.png",
  "https://cdn.theforage.com/vinternships/companyassets/JXKHqsmRY6ECPZMAw/bpWbfhTmb5bwrmiut/1647349869693/1024px-Thermo_Fisher_Scientific_logo_white%20(1).png",
  "https://companieslogo.com/img/orig/K_BIG.D-17dbd94a.png?t=1648750008",
  "https://zeevector.com/wp-content/uploads/Nike-Logo-PNG-White.png",
  "https://companieslogo.com/img/orig/OMC_BIG.D-d242fd48.png?t=1652760666",
  "https://logodix.com/logo/2153254.png",
  "https://contact.pepsico.com/files/brands/1544648186/ppf/PepsiCo12-alt-White@2x.png",
  "https://seeklogo.com/images/S/Starbucks_Coffee-logo-D24A63ABDC-seeklogo.com.png",
  "https://brandeps.com/logo-download/A/Apple-logo-vector-01.svg",
  "https://zeevector.com/wp-content/uploads/HP-Logo-White.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2b/Transparent_google_logo_%282011-2015%29.png",
  "https://pbs.twimg.com/media/Eyd48GrUYAMXv8x?format=png&name=large",
];

const Companies = () => {
  return (
    <div className="bg-black text-white font-medium flex flex-col gap-16 items-center text-center py-16">
      <div className="text-3xl font-semibold">
        Analyse and Predict them with Ease
      </div>
      <div className="grid grid-cols-5 gap-10">
        {images.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-center">
              <img src={item} alt="company" className="w-40" />
            </div>
          );
        })}
      </div>
      <button className="border border-blue-500 bg-white text-blue-500 rounded-md py-2 px-6 font-medium">
        Predict Stock Price Now
      </button>
    </div>
  );
};

export default Companies;
