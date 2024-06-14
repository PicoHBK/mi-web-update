import { useQuery } from "@tanstack/react-query";
import apiWeb from "@/api/api";
import {SkillType } from "@/types/apiWeb";
import MKSkill from "../mockup/MKSkill.json"

const fetchSkill = () => {
    return apiWeb.get<SkillType[]>("/skill/list/").then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error.message)
    });
}
export function useSkill (){
    const {data, isSuccess} = useQuery({
        queryKey: ["skill"],
        queryFn: fetchSkill,
        staleTime: Infinity
    })

    const info = isSuccess ? data : MKSkill

    return {data:info}
}