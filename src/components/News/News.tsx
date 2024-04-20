'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { getPostData } from '../../lib/post';
import InnerHTML from 'dangerously-set-html-content'
import Share from "../ShareBtn/page";
const  News = async (id : any) =>{
  const news =await getPostData(id?.id,"all");
    return (
        <>
          <Card>
      <CardHeader className="flex justify-between">
        <div className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={news.imageURL}
          width={40}
          />
        <div className="flex flex-col">
          <p className="text-md">{news.ownerId}</p>
          <p className="text-small text-default-500">{new Date().toLocaleDateString()}</p>
        </div>
        </div>
        <div>
            <Share param={{id}}/>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <h3 className="font-bold text-lg pb-[10px]">{news.header}</h3>
      {news.content ? (
      <InnerHTML html={news.content}/>
      ) : null}
      <div>
        <Image
          alt="nextui logo"
          height={1000}
          radius="sm"
          src={news.imageURL}
          width={1000}
          />
          </div>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
        </>
    );
};

export default News;