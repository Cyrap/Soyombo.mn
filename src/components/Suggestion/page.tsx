import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

import { Suggestion } from "@/firebase/types";

interface SuggestionProps{
  suggestions: Suggestion[];
}
const SuggestionComponent:React.FC<SuggestionProps> = ({ suggestions}) => {
  return (
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {suggestions.map((suggestion) => (
          <NavbarItem key={suggestion.id}>
            <Link  href={suggestion.category}>
            {suggestion.category}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
export default SuggestionComponent;