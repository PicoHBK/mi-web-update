import { useQuery } from "@tanstack/react-query";
import apiWeb from "@/api/api";
import { AboutType} from "@/types/apiWeb";
import MKAbout from "../mockup/MKAbout.json"

const fetchAbout = () => {
    return apiWeb.get<AboutType[]>("/about/list").then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error.message)
    });
}
export function useAbout (){
    const {data, isSuccess} = useQuery({
        queryKey: ["project"],
        queryFn: fetchAbout,
        staleTime: Infinity


    })

    const info = isSuccess ? data : MKAbout

    return {data:info}
}