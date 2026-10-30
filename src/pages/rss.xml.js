import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import profile from '../data/profile.json';
export async function GET(context){const posts=(await getCollection('posts',({data})=>!data.draft)).sort((a,b)=>+b.data.date-+a.data.date);return rss({title:profile.name,description:profile.bio,site:context.site,items:posts.map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.date,link:'/posts/'+p.id+'/'})),customData:'<language>zh-cn</language>',stylesheet:'/rss.xsl'});}