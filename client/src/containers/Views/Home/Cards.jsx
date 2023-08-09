import React from "react";
import Card from "../../../components/Card/index";

const Cards = ({ projects, web3Api }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <Card
            project={project}
            web3Api={web3Api}
            index={index}
            key={project.name}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
