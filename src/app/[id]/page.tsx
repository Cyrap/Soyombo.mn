"use client"
import React, { useState,useEffect } from "react";
import {Navbar, NavbarContent} from "@nextui-org/react";
import NavbarComponent from "../../components/Navbar/Navbar"
import { getPosts } from "../../lib/suggestion";
import { Suggestion } from "@/firebase/types";
import About from "../../components/Suggestion/About";
import Posts from "@/components/Posts/Posts";
const DynamicPage = ()=>{
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    useEffect(() => {
        const fetchSuggestions = async () => {
          try {
            const fetchedSuggestions = await getPosts();
            setSuggestions(fetchedSuggestions);
          } catch (error) {
            console.error("Error fetching suggestions:", error);
          }
        };
        fetchSuggestions();
      }, []);
      console.log(suggestions)
    return <>
    <NavbarComponent/>
      <Navbar className="border-b-2	border-bottom-width: 2px;">
      <NavbarContent/>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <About param={suggestions}/>
      </NavbarContent>
      <NavbarContent justify="end"/>  
    </Navbar>
    <Posts/>
    </>
}

export default DynamicPage;