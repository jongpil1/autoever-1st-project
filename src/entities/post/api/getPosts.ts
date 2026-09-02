import { supabase } from "../../../shared/api/supabase";
import type { Post } from "../model/type";

export async function getPosts() : Promise<Post[]> {
    const {data, error} = await supabase
        .from('posts')
        .select('id, slug, title, summary, created_at, repository_url')
        .order('created_at', {ascending : false})
    
        if(error) throw error
    return data
}