"use client";
import { Card, CardBody, Divider, Image } from "@nextui-org/react";

interface CommissionModel {
  name: string;
  image: string;
  description: string[];
}

export default function CommissionPage() {
  const commissions: CommissionModel[] = [
    {
      name: "正比",
      image: "logo.png",
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
      image: "logo.png",
      description: [
        "胸上 $1000 起",
        "全身 $1500 起",
        "皆無背景或簡單色塊",
        "人數=單人價格*n",
      ],
    },
    {
      name: "表情符號",
      image: "logo.png",
      description: [
        "$300 起",
        "簡易動態 +$50↑",
        "沒有在範例上的表情符號也可以私訊詢問製作",
        "可用於各類直播表符、DC群組、封面圖......等等",
      ],
    },
    {
      name: "場景",
      image: "logo.png",
      description: [
        "純場景 $2000 起",
        "比較擅長夜景、星空、自然場景、沒有太多物件的室內",
        "若不在舒適圈內會考慮婉拒",
      ],
    },
    {
      name: "圓徽章設計",
      image: "logo.png",
      description: ["$1000 起"],
    },
    {
      name: "剪影",
      image: "logo.png",
      description: ["$1000 起", "人數=單人價格*n"],
    },
    {
      name: "文字設計",
      image: "logo.png",
      description: ["$2000 起"],
    },
    {
      name: "角色設計",
      image: "logo.png",
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
        <Card className="my-2" key={i}>
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4">
              <div className="flex flex-col col-span-6 md:col-span-8">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <div className="flex justify-between items-start">
                  <Divider className="my-3 w-full bg-foreground" />
                </div>
                <ul className="list-disc mx-5 text-default-600 marker:text-primary ">
                  {data.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt=""
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={data.image}
                  width="100%"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
