"use client";
import { Card, CardBody, Divider, Image, Spacer } from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CommissionModel {
  name: string;
  image: string[];
  description: string[];
}

export default function CommissionPage() {
  const commissions: CommissionModel[] = [
    {
      name: "正比",
      image: [
        "illustration_1.webp",
        "illustration_2.webp",
        "illustration_3.webp",
        "illustration_5.webp",
        "illustration_6.webp",
      ],
      description: [
        "胸上 $2000 起",
        "腰上 $2500 起",
        "小腿近乎全身 $3500 起",
        "背景看複雜度 +$500~1000↑",
        "R18 +$500↑",
        "人數=單人價格*n",
      ],
    },
    {
      name: "Q版",
      image: [
        "Q_character_1.webp",
        "Q_character_2.webp",
        "Q_character_3.webp",
        "Q_character_4.webp",
        "Q_character_5.webp",
      ],
      description: [
        "胸上 $1000 起",
        "全身 $1500 起",
        "皆無背景或簡單色塊",
        "人數=單人價格*n",
      ],
    },
    {
      name: "表情符號",
      image: ["emote_1.webp", "emote_2.webp"],
      description: [
        "$300 起",
        "簡易動態 +$50↑",
        "沒有在範例上的表情符號也可以私訊詢問製作",
        "可用於各類直播表符、DC群組、封面圖......等等",
      ],
    },
    {
      name: "場景",
      image: ["scene_1.webp", "scene_2.webp"],
      description: [
        "純場景 $2000 起",
        "比較擅長夜景、星空、自然場景、沒有太多物件的室內",
        "若不在舒適圈內會考慮婉拒",
      ],
    },
    {
      name: "圓徽章設計",
      image: ["circle_1.webp", "circle_2.webp", "circle_3.webp"],
      description: ["$1000 起"],
    },
    {
      name: "剪影",
      image: ["cutscene_1.webp"],
      description: ["$1000 起", "人數=單人價格*n"],
    },
    {
      name: "文字設計",
      image: ["text_design_1.webp", "text_design_2.webp"],
      description: ["$2000 起"],
    },
    {
      name: "角色設計",
      image: ["logo.png"],
      description: [
        "$3000 起",
        "以簡單站姿單人為主",
        "角色設計+三視圖 $5000 起",
        "大致會有正側背與飾品細節放大",
      ],
    },
  ];
  return (
    <>
      {commissions.map((data, i) => (
        <Card className="my-2 max-h-full" key={i}>
          <CardBody className="mx-2 my-2">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4">
              <div className="relative col-span-6 md:col-span-5">
                <Swiper
                  pagination={{ type: "bullets", clickable: true }}
                  modules={[Navigation, Pagination]}
                  className="rounded-lg bg-white"
                  grabCursor
                  loop
                >
                  {data.image.map((image, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        loading="lazy"
                        src={image}
                        alt=""
                        radius="none"
                        className="object-contain h-64 md:h-80"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex flex-col col-span-6 md:col-span-7">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <Spacer y={3} />
                <ul className="list-disc mx-5 text-default-600 marker:text-primary ">
                  {data.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
