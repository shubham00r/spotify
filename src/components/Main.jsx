import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import Card from "./Card";
import ProgressBar from "./ProgressBar";
import YourLibrary from "./YourLibrary";

function Main() {
  return (
    <div className="max-h-full bg-slate-700 ml-56 ">
      <div className="pt-6 ml-5 text-2xl font-bold text-gray-50 ">
        <h1>Show To try</h1>
      </div>
      <div className="flex">
        <Card
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWGk9RuQY-cyqvQzhgm1oTmiqfuY_j0NoAaRMSmjR5Qu6JNSmNjmDhhwBUpujJj20UpM&usqp=CAU"
          title="Sky High"
          Heading="NCS Music"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273eb384e9792893301a663a22d"
          title="Proper Patola"
          Heading="Diljit Dosanjh"
        />
        <Card
          imgsrc="https://i1.sndcdn.com/artworks-000428038701-weowek-t500x500.jpg"
          title="Blank"
          Heading="Disfigure,Tara,Louise"
        />
        <Card
          imgsrc="https://1.bp.blogspot.com/-SfcqmJ1nP1k/VhkRZO93l7I/AAAAAAAAAvQ/uptV1uNf9Xw/s1600/allbalck-Sukhe-raftaar-lyrics.jpg"
          title="All Black"
          Heading="Sukhe & Raftaar"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273ba3f6c327832f97378d44183"
          title="Me Phir bhi tum ko"
          Heading="Half Girlfriend"
        />
      </div>
      <h1 className="mt-2 ml-4 text-2xl font-bold text-white">Throwback</h1>
      <div className="flex">
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273a9897f65d1ead1be10a51e3f"
          title="infinity"
          Heading="Jaymes Young"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273d52f55343ed00f153dfd457a"
          title="Sing is king"
          Heading="Bas ek hi King"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273ba071b7b2ffb03ccb472425d"
          title="Baatein Ye Kabhi Na"
          Heading="Arijit Singh"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b27388cfb0cda31b1bea12cbc1b7"
          title="Maula mera Maula"
          Heading="Mithoon, Roopkumar "
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d00001e026a12cfe241a4adef2528280e"
          title="Manne Mera"
          Heading="Maane Na Mann Mera "
        />
      </div>
      <h1 className="mt-2 ml-4 text-2xl font-bold text-white">Trending Now</h1>
      <div className="flex">
        <Card
          imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWGk9RuQY-cyqvQzhgm1oTmiqfuY_j0NoAaRMSmjR5Qu6JNSmNjmDhhwBUpujJj20UpM&usqp=CAU"
          title="Sky High"
          Heading="2018"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273ba3f6c327832f97378d44183"
          title="Me Phir bhi tum ko"
          Heading="Half Girlfriend"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273ba071b7b2ffb03ccb472425d"
          title="Baatein Ye Kabhi Na"
          Heading="Arijit Singh"
        />
        <Card
          imgsrc="https://i1.sndcdn.com/artworks-000428038701-weowek-t500x500.jpg"
          title="Blank"
          Heading="Disfigure,Tara,Louise"
        />
        <Card
          imgsrc="https://i.scdn.co/image/ab67616d0000b273d52f55343ed00f153dfd457a"
          title="Sing is king"
          Heading="Bas ek hi King"
        />
      </div>
      <div className="h-32"></div>
    </div>
  );
}

export default Main;
