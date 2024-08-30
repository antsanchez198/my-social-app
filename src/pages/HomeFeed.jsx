import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';
import Post from '../components/Post';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

export default function HomeFeed() {

  const [posts, setPosts] = useState(null);
  
  useEffect(() => {
    async function getPosts() {
      try {
        const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const posts = [];
        querySnapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() });
        });
        setPosts(posts)
      } catch (error) {
        console.log(error);
        toast.error("Couldn't get posts")
      }
    }

    getPosts();
  }, [])

  useEffect(() => {
    // posts.map((post) => {console.log(post.id, post)})
    console.log(posts)
  }, [posts])


  return (
    <div>
      {posts ? posts.map((post) => (
        <Post key={post.id} post={post} />
      )) : <h3>Loading</h3>}
    </div>
  );
}