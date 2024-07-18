import React from "react";

function ContactMap() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{}}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
          Feedback
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>

        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </section>
  );
}

export default ContactMap;
