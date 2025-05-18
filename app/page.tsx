import { redirect } from 'next/navigation';
import Post from './components/post';

export default function Home() {
  redirect('/posts')
}
