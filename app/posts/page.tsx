'use server'
import { createClient } from "@/utils/supabase/server";
import Posts from "./posts";

export default async function Home(){
  const supabase = await createClient();
  const {data, error} = await supabase.auth.getUser();

  const isAdmin = data.user?.email === process.env.ADMIN_EMAIL;
  
  return <Posts isAdmin={isAdmin}/>
}