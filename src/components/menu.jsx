
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAcquirenti, setMerce, setOrdine, setCategoria } from "../reducers/apiSlice";
import Acquirenti from "./acquirenti";
import Merce from "./merce";
import Ordine from "./ordine";
import Categoria from "./categoria";


export default function Menu() {
    const dispatch = useDispatch();
    const {menu} = useSelector((state) => state.api.menu);

    useEffect(() => {
        switch (menu) {
            case "acquirenti":
                dispatch(setAcquirenti());
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
            {menu === "acquirenti" && <Acquirenti />}
            {menu === "merce" && <Merce />}
            {menu === "ordine" && <Ordine />}
            {menu === "categoria" && <Categoria />}
        </div>
    );
}
