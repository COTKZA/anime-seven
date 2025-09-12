import { toast } from "react-toastify"
import "react-toastify/ReactToastify.css"

export const toastSuccess = (message: string) => toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    draggable: true,
    theme: "dark",
})

export const toastError = (message: string) => toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    draggable: true,
    theme: "dark",
})

export const toastWarning = (message: string) => toast.warning(message, {
    position: "top-right",
    autoClose: 5000,
    draggable: true,
    theme: "dark",
})