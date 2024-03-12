import { supabase } from "./supabase";

async function findAll() {
    const {data} = await supabase
    .from("products")
    .select()
    .order("category")
    .returns<ProductResponse[]>()
 
    return data ?? []
}
async function findByIds(ids: string[]) {
    const { data } = await supabase
      .from("products")
      .select()
      .in("id", ids)
      .order("name")
      .returns<ProductResponse[]>()
  
    return data ?? []
  }

  export { findAll, findByIds }
  