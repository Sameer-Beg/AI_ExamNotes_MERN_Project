import axios from "axios"
import { serverlUrl } from "../App"
import { setUserData } from "../redux/userSlice"


export const getCurrentuser =  async (dispatch)=>{
    try{
        const result = await axios.get(serverlUrl + "/api/user/currentuser" , {withCredentials:true})
        console.log(result.data)
        dispatch(setUserData(result.data))
    }catch(error){
        console.log("eeror" , error)
    }
}

export const generateNotes = async (payload)=>{
    try{
        const result = await axios.post(serverlUrl+ "/api/notes/generate-notes" , payload , {withCredentials:true})
        console.log(result.data)
        return result.data
    }catch(error){
        console.log(error)
    }
}

export const downloadPdf = async (result) => {
    try {
        const response = await axios.post(serverlUrl+ "/api/pdf/generate-pdf" , {result} , {
            responseType:"blob" , withCredentials:true
        })

        const blob = new Blob([response.data], {
      type: "application/pdf"
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ExamNotesAI.pdf";
    link.click();

    window.URL.revokeObjectURL(url);
    } catch (error) {
         throw new Error("PDF download failed");

    }
}