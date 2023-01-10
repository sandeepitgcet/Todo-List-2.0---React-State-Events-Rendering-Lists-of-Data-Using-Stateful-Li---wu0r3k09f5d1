import React from "react";

const ListRender = (props) => {
  return (
    <>
      {props.list.map((list,index) => {
        return (
          <div className="box" key={index}>
            <div className="task">
              {list.title} ({list.date.toLocaleDateString()})
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListRender;
