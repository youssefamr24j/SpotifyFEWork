import React from 'react';
import ReactDOM from 'react-dom';
import Arab from './Arab';



it("Arab component renders right",() =>{
    const div = document.createElement("div");
    const Testobject=[
        {
            id:1,
            name:'Amr Diab',
            photo:'https://yt3.ggpht.com/a/AGF-l78YAkj21TWJFbyuj2W9Ax31gN4Ec5uohmTkFA=s900-c-k-c0xffffffff-no-rj-mo',
            type:'Artist'
        }
    ];
    ReactDOM.render(<Arab Artists={Testobject} ></Arab>, div);
});