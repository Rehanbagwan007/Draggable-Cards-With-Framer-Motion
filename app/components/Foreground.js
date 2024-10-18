"use client"
import React from 'react';
import Card from './Card';
import { useRef } from 'react';

export default function Foreground() {

  const ref  = useRef()
  const data = [
    {
      decs: 'Now I am become the destroyer of the world',
      filesize: '9mb',
      close: 'true',
      tag: {
        isopen: true,
        tagTitle: 'Download now',
        tagcolor: "bg-green-400"
      }
    }, {
      decs: 'Now I am become the destroyer of the world',
      filesize: '9mb',
      close: 'true',
      tag: {
        isopen: true,
        tagTitleL: 'Download now',
        tagcolor: "bg-blue-800"
      }
    }, {
      decs: 'Now I am become the destroyer of the world',
      filesize: '9mb',
      close: 'true',
      tag: {
        isopen: true,
        tagTitleL: 'Download now',
        tagcolor:"bg-red-600"
      }
    }, {
      decs: 'Now I am become the destroyer of the world',
      filesize: '9mb',
      close: 'true',
      tag: {
        isopen: true,
        tagTitleL: 'Download now',
        tagcolor: 'green'
      }
    }  ];

    

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-4 flex-wrap p-5 items-center justify-center ">
      {data.map((item, i) => (
        <Card key={i} Data={item} refer={ref}/>
      ))}
    </div>
  );
}
