import React from "react";

function User() {
  return (
    <div>
      <div className="flex space-x-4 px-8 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">Ashutosh</h1>
          <span>ashu.tripathi@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default User;
