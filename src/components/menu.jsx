

import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setAcqui,setMerce,setOrdine,setCategoria } from "../reducers/apiSlice";



export default function Menu() {
    const dispatch = useDispatch();
    const {menu}= useSelector((state) => state.api.menu);

    useEffect(() => {
        switch (menu) {
            case "acquirenti":
                dispatch(setAcqui());
                break;
            case "merce":
                dispatch(setMerce());
                break;
            case "ordine":
                dispatch(setOrdine());
                break;
            case "categoria":
                dispatch(setCategoria());
                break;
            default:
                break;
        }
    }, [menu, dispatch]);

    return (
        <div>
            {menu === "acquirenti" && <acquirenti />}
            {menu === "merce" && <merce />}
            {menu === "ordine" && <ordine />}
            {menu === "categoria" && <categoria />}
        </div>
    );
}


