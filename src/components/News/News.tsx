'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import InnerHTML from 'dangerously-set-html-content'
import Share from "../ShareBtn/page";
interface NewsProps {
  id?: string;
  header?: string;
  content?: string;
  ownerId?: string;
  imageURL?: string;
}

const News: React.FC<NewsProps> = ({
  id,
  header,
  content,
  ownerId,
  imageURL
}) =>{

    return (
        <>
          <Card>
      <CardHeader className="flex justify-between">
        <div className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={imageURL}
          width={40}
          />
        <div className="flex flex-col">
          <p className="text-md">{ownerId}</p>
          <p className="text-small text-default-500">{new Date().toLocaleDateString()}</p>
        </div>
        </div>
        <div>
            <Share/>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      {content ? (
      <InnerHTML html={content} />
      ) : null}
      <div>
        <Image
          alt="nextui logo"
          height={1000}
          radius="sm"
          src={imageURL}
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