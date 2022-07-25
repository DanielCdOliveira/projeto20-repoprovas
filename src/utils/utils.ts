import dotenv from "dotenv"
import sgMail from "@sendgrid/mail"
import { emailList } from "../repositories/userRepository.js"
export async function sendEmail(teacher: string, category: string, name: string, discipline: string){
    dotenv.config()
    sgMail.setApiKey(process.env.SG_KEY)
    try {
        const emails = await emailList()
        
        for(const email of emails){
            const body = {
                to: email,
                from: "danielcoliv98@gmail.com",
                subject: "Nova prova adicionada!",
                text: `A seguinte prova foi adicionada: ${teacher} ${category} - ${name} ${discipline}`
            }
            await sgMail.send(body)
        }    
    } catch (error) {
    console.log(error.body);
    }
}