import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase';
import Post from '../components/Post';
import { useEffect, useState } from 'react';

export default function HomeFeed() {

  const [data, setData] = useState();

  async function getData() {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    let temp = [];
    querySnapshot.forEach((doc) => {
      temp.push({ id: doc.id, ...doc.data() });
    });
    setData(temp)
  }
  
  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      {data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}