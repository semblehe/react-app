import {Link} from "react-router-dom";
import React from "react";

const RadioList = ({api}) => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api?.map((radio,index) => {
                return (
                    <Link to={`/player/${radio.idradio}`}  songsdata={radio} className="cursor-pointer text-color-primary hover:text-color-accent transition-all" key={index}>
                        <img src={radio.gambar} alt="..." width={350} height={350}/>
                        <h3 className="font-bold md:text-xl text-md p-4">{radio.pembicara}</h3>
                    </Link>
                )
            })}

        </div>
    )
}


export default RadioList