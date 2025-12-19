import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const users = [
  {
    id: 1,
    image: "https://i.pinimg.com/1200x/5a/20/5c/5a205cccde58c627c0788aae9877c46d.jpg",
    followers: 420,
    posts: 23,
    following: 180,
    role: "UI/UX Designer"
  },
  {
    id: 2,
    image: "https://i.pinimg.com/736x/a1/fd/64/a1fd64fd92390195e5e3b06a017ce77d.jpg",
    followers: 510,
    posts: 35,
    following: 182,
    role: "Frontend Developer"
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/f1/d8/b0/f1d8b0e08b6c0ad95c4fce66752062bc.jpg",
    followers: 640,
    posts: 52,
    following: 190,
    role: "Backend Developer"
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/ff/96/24/ff96247766232ac759b432dcad54d248.jpg",
    followers: 390,
    posts: 18,
    following: 165,
    role: "Full Stack Developer"
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/14/ea/83/14ea839c03c3260eb4191d1d745a9827.jpg",
    followers: 780,
    posts: 61,
    following: 210,
    role: "Product Designer"
  }
];


  return (
    <>
      <div className="app">
      {users.map((user) => (
        <Card
          key={user.id}
          image={user.image}
          followers={user.followers}
          posts={user.posts}
          following={user.following}
          role={user.role}
        />
      ))}
    </div>
    </>
  )
}

export default App
