import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./ThemeToggle.css";

const KEY = "site-theme"; // 'dark' | 'light' | null

function getInitialTheme(){
  try{
    const saved = localStorage.getItem(KEY);
    if(saved === 'light' || saved === 'dark') return saved;
  }catch(e){}
  // fallback to OS preference
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

const ThemeToggle = ()=>{
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(()=>{
    document.body.classList.remove('light','dark');
    document.body.classList.add(theme);
    try{ localStorage.setItem(KEY, theme) }catch(e){}
  },[theme]);

  const toggle = ()=> setTheme(t=> t === 'dark' ? 'light' : 'dark');

  return (
    <button aria-label="Toggle color theme" className="theme-toggle" onClick={toggle}>
      {theme === 'dark' ? <FaSun size={15} color="#ffd966"/> : <FaMoon size={15} color="#16325c"/>}
    </button>
  )
}

export default ThemeToggle;
