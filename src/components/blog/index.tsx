import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles.module.scss'
import { UiText, BEM } from '@nevermined-io/styles'

const b = BEM('blog', styles)

interface Post {
    title: string;
    content: string;
    pubDate: string;
}

const Blog = () => {
    const [posts, setPost] = useState<Post[]>([]);

    const fetchPosts = async () => {
        let result = await axios.get<{items: Post[]}>('https://api.rss2json.com/v1/api.json', {
            params: {
                'rss_url': 'https://medium.com/feed/nevermined-io'
            }
        })

        setPost([...result.data.items])
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            {posts.map(p => 
                <>
                    <UiText type='h2' className={b('title')}>{p.title}</UiText>
                    <UiText dangerouslySetInnerHTML={{__html: p.content}} className={b('content')}/>
                    <UiText type='small' className={b('pub-data')}>{p.pubDate}</UiText>   
                </>    
            )}
        </div>
    )
}

export default Blog;
