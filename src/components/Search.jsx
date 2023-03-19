import React from "react";
import Card2 from "./Card2";
function Search() {
  return (
    <div className="bg-slate-700 ml-56">
      <div className="pt-6 ml-5 text-2xl font-bold text-gray-50">
        <h1>Browse all</h1>
      </div>

      <div className="flex">
        <Card2
          imgsrc="https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5"
          title="Podcast"
        />
        <a href="#">
          <Card2
            imgsrc="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
            title="Made for You"
            color1="Blue"
            color2=" #3f5be3"
          />
        </a>
        <Card2
          imgsrc="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"
          title="New releases"
          color1="#ff6666"
          color2="#ff1a1a"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005cafd6daeecb3d85e27295be6557"
          title="Hindi"
          color1="#ff3333"
          color2="#ff1a1a"
        />

        <Card2
          imgsrc="https://i.scdn.co/image/ab67706f00000002461fda205f5f952eff8bae70"
          title="Punjabi"
          color1="#e21dc7"
          color2="#dc2a94
          "
        />
      </div>
      <div className="flex">
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005caf4b3beede484da74b233fa299"
          title="Tamil"
          color1="#999966"
          color2="#b27366"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005caf2c7a9278e6df9a35f3865cae"
          title="Telugu"
          color1="#808033"
          color2="#738c2e"
        />
        <Card2
          imgsrc="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
          title="Charts"
          color1=" #916ef2"
          color2=" #738cbf"
        />
        <Card2
          imgsrc="https://concerts.spotifycdn.com/images/live-events_category-image.jpg"
          title="Live Events"
          color1=" #9966ff"
          color2="	  #827dd9"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768"
          title="Pop"
          color1="#00ff00"
          color2="#006600"
        />
      </div>
      <div className="flex">
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa"
          title="Indie"
          color1="#e600e6"
          color2=" #000000"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd"
          title="Trending"
          color1="#ffb3d9"
          color2="	 #ff0080"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31"
          title="Love"
          color1="#b35900"
          color2="#ff8c1a"
        />
        <Card2
          imgsrc="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg"
          title="Discover"
          color1="#ff4da6"
          color2="#ff1a8c"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354"
          title="Moods"
        />
      </div>
      <div className="flex">
        <Card2
          imgsrc="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
          title="Charts"
          color1=" #916ef2"
          color2=" #738cbf"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa"
          title="Indie"
          color1="#e600e6"
          color2=" #000000"
        />
        <Card2
          imgsrc="https://concerts.spotifycdn.com/images/live-events_category-image.jpg"
          title="Live Events"
          color1=" #9966ff"
          color2="#827dd9"
        />
        <Card2
          imgsrc="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
          title="Made for You"
          color1="Blue"
          color2=" #3f5be3"
        />
        <Card2
          imgsrc="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"
          title="New releases"
          color1="#ff6666"
          color2="#ff1a1a"
        />
      </div>

      <div className="h-44"></div>
    </div>
  );
}

export default Search;
