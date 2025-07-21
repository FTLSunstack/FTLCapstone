import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../../tailwind.css";
import { useAuth } from "../../../Context/AuthContext";
import {toast, Bounce} from 'react-toastify';

export const NotifSuccess = (process) =>
    toast.success(`Congrats! ${process} completed!`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

export const NotifError = (process, errorMessage) =>
    toast.error(errorMessage || `${process} Failed! Please try again`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });