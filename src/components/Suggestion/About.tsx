import { Link,NavbarItem } from "@nextui-org/react"
import { usePathname } from "next/navigation"
import {Suggestion} from "../../firebase/types"
export default function About({param}:{param:Suggestion[] | null}){
    const router = usePathname();
    const pathName = router.split("/")[1];
    const path = decodeURIComponent(pathName)
    let data : Suggestion[];
    if(param === null){
        data = []
    }else{
        data = param;
    }
    const selectedItem = data.find(item => item.category === path);
    let aboutData;
    if(selectedItem){
        aboutData = selectedItem.about;
        // alert(aboutData);
    }else{
        // alert("Data not found");
    }    
    console.log(param)
    if(aboutData !== null){
        return(
            <div>
                <NavbarItem className="flex flex-row">
                {aboutData?.map((s:any,index:number) => (
                      <Link className="p-[10px]" key={index} href={s}>
                            {s}
                      </Link>
                      ))}
                </NavbarItem>
                  </div>
            )
    }else{
        return<>ajksh</>
    }
}