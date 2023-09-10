import React from "react";
import {Link} from "react-router-dom";

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen">
        <div className="title flex flex-col items-center mx-auto">
          <h4 className="text-4xl font-bold">Hello Again</h4>
          <span className="py-4 text-xl w-2/3 text-center text-gray-500">
            Explore More by connecting with us.
          </span>
          What are you doing
          
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src="" alt="avatar" />
            </div>

            <div className="textbox">
              <input type="text" placeholder="Username" />
              <button type="submit">Lets Go</button>
            </div>

            <div className="text-center">
              <span>
                Not a Member{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
