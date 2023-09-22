import React from "react";

const Map = () => {
  return (
    <div className="bg-gray-200">
      <div className="lg:container mx-auto h-max flex flex-col lg:flex-row py-16 gap-4">
        <div className="lg:w-2/5 px-4">
          <div className="">
            <h1 className="text-4xl font-montserratBold">
              Ready to Get Started?
            </h1>
            <p className="my-4">
              For information on our IT services or to request a quote, please
              get in touch via the details below
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-2">
              <input type="text" className="border p-3" />
              <input type="text" className="border p-3" />
              <input type="text" className="border p-3" />
              <input type="text" className="border p-3" />
              <div className="flex gap-2">
                <input type="text" className="border w-1/2  p-3" />
                <input type="text" className="border w-1/2 p-3" />
              </div>
              <input type="text" className="border w-3/4 p-3" />
              <input type="text" className="border w-3/4 p-3" />
              <input type="text" className="border w-3/4 p-3" />
            </div>
            <div className="mx-auto flex justify-center lg:justify-start">
              <button className=" mt-5 px-8 py-2  text-white bg-gray-600 rounded-lg hover:bg-blue-900">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-3/5 p-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13295.210172121731!2d-7.6395723!3d33.5844757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d34faeace30d%3A0x1aad99333220e424!2z8J2Qh_CdkJsg8J2QgvCdkJ7wnZCn8J2QrfCdkJ7wnZCrIPCdkKjwnZCs8J2QrfCdkJ7wnZCo8J2QqfCdkJrwnZCt8J2QofCdkLIgJiDwnZCs8J2QqfCdkKjwnZCr8J2QrSDwnZCp8J2QnvCdkKvwnZCf8J2QqPCdkKvwnZCm8J2QmvCdkKfwnZCc8J2QniBDYXNhYmxhbmNhLSBPc3TDqW9wYXRoZSAtIEtpbsOpc2l0aMOpcmFwaWUgLSBQb3N0dXJvbG9ndWUgLSBNYXNzb3Row6lyYXBpZQ!5e0!3m2!1sfr!2sma!4v1694623173312!5m2!1sfr!2sma"
            width="800"
            height="600"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
