import { useQuery } from "@tanstack/react-query";
import apiWeb from "@/api/api";
import {SkillType } from "@/types/apiWeb";

const fetchSkill = () => {
    return apiWeb.get<SkillType[]>("/skill/list/").then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error.message)
    });
}
export function useSkill (){
    const {data} = useQuery({
        queryKey: ["skill"],
        queryFn: fetchSkill,
        staleTime: Infinity


    })

    return {data}
}