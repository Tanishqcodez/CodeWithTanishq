import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Blogs from './components/Blogs';
import Icon from "./image/logo.png"
import BlogsItem from './components/BlogsItem';
import Error from './components/Error';
import BlogContent from './components/BlogContent';
import cirlceIcon from './image/circle-icon.png';
import Courses from './components/Courses';

function App() {
  const [progress, setProgress] = useState(100);
  let load = () => {
    setProgress(25)
    setTimeout(() => {
      setProgress(75);
    }, 500);
    setTimeout(() => {
      setProgress(100);
    }, 800);
  }

  let Blog = {
    blog1: {
      title: `How to Start Coding?`,
      desc: `
      <div className=''>
        Hey peeps, today we will see how we can start coding? So let's get started!!
      </div>
      <br />
      <div className='space-x-2 mt-1'>
        <b><li>Find your Interest</li></b> To start coding first of all, what you will need is to know, in which field you have your interest. <br />
          <span><b>Web Devlopment:</b> If you want to make a website then you should learn HTML, CSS, JavaScript and so on...</span><br />
          <span><b>App Devlopment:</b> If You want to make a App then you should learn Kotlin, Java, Andriod Studio.</span><br />
          <span><b>Game Devlopment:</b> If you are having no interest in both of them, then you can learn Game-Devlopment, for that you need to learn unity, unreal and so on..</span>
      </div>
      <div className='mt-3'>
        <b><li>How to become Pro at coding?</li></b><br />
        <span>Once you are having your interest in any field, now its time for you to learn basic. <br /> There is no need to start everything at once, you don't have to become a monkey mind. Choose one Programming language and start learning its basic, try to create a lot of projects. Try to make something that can solve real world problems.</span>
      </div>
      <div className='mt-3'>
      <b><li>Verdict</li></b><br />
      <span>If you want to master coding then you have to practice and practice, no one can master any skill at one night!</span>
      </div>
      <div className='mt-3'>
        <span>These are some tips which I would suggest any beginner to start coding! This is it! I hope you all liked this blog!! Thank you! </span>
      </div>
      `
    }


  }
  let scroll = () => {
    setTimeout(() => {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

    return (
      <BrowserRouter>
        <LoadingBar color="#6f5ce0" progress={progress}
          onLoaderFinished={() => setProgress(0)} height={3} />
        <Navbar load={load} icon={Icon} scroll={scroll} />
        <Routes>
          <Route path={"/"} element={<Home load={load} image={Icon} scroll={scroll} />} />
          <Route path={"/blog"} element={<Blogs load={load} />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/blogpost/what-is-tailwind-css"} element={<BlogContent load={load} />} />
          <Route path={"/blogpost/how-to-start-coding"} element={<BlogsItem load={load} blogContent={Blog.blog1.desc} blogTitle={Blog.blog1.title} />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
        <Footer icon={Icon} />
      </BrowserRouter>
    );
  }

  export default App;
