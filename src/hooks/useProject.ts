import { useQuery } from "@tanstack/react-query";
import apiWeb from "@/api/api";
import { ProjectType } from "@/types/apiWeb";

const fetchProjects = () => {
    return apiWeb.get<ProjectType[]>("/project/list").then((response) => {
        return response.data;
    }).catch((error) => {
        throw new Error(error.message)
    });
}
export function useProject (){
    const {data} = useQuery({
        queryKey: ["project"],
        queryFn: fetchProjects,
        staleTime: Infinity


    })

    return {data}
}