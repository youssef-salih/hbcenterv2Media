import React from "react";

const Calendar = () => {
  return (
    <div className="lg:overflow-x-hidden overflow-x-scroll">
      <table className="z-10 lg:w-auto w-[1000px]">
        <tbody>
          {/* days */}
          <tr className="grid grid-cols-7">
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              lun
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              mar
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              mer
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              jeu
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              ven
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              sam
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-1 text-center">
              dim
            </th>
          </tr>
          {/* sessions */}
          <tr className="grid grid-cols-7 mt-6 gap-2">
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
          </tr>
          {/* sessions */}
          <tr className="grid grid-cols-7 gap-2">
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
          </tr>
          <tr className="grid grid-cols-7 gap-2">
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-titleUnderLine uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-black uppercase text-white font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
          </tr>
          {/* sessions */}
          <tr className="grid grid-cols-7 gap-2">
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
            <th className="bg-transparent uppercase text-slate-700 font-montserratBold text-2xl px-14 py-3 flex flex-col justify-center items-center">
              <span className="font-montserratBold text-sm">Fitness</span>
              <span className="font-montserratRegular font-thin text-xs whitespace-nowrap">
                00:00 - 00:00
              </span>
            </th>
          </tr>
        </tbody>
      </table>
      {/* <div className="absolute bottom-0 -left-[3%] rounded-2xl bg-gray-100 w-[106%] h-[90%]" /> */}
    </div>
  );
};

export default Calendar;
