import React from "react";

export function ErrorPage1() {
  return (
    <div className="d-flex flex-column flex-root" style={{width : "100%" , height : "100vh" , zIndex : "10000000"}}>
      <div
        className="d-flex flex-row-fluid flex-column p-5 w-100 h-100"
        style={{
          backgroundImage: `url("/assets/images/bg1.jpg")`
        }}
      >
        <h1
          className=""
          style={{ fontSize: "150px" }}
        >
          404
        </h1>
        <h3 className="">
          مشکلی به وجود آمده است - 
         <a className="text-danger" href="/"> بازگشت به صفحه اصلی </a></h3>
      </div>
    </div>
  );
}
