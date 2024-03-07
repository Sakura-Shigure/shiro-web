import { PixivIcon, TwitterIcon } from "@/component/icons";
import {
  Card,
  CardBody,
  Divider,
  Image,
  Link,
  Spacer,
} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Image width="100%" src="/home_image.webp" alt=""></Image>
      <Spacer y={5} />
      <Card className="p-5 bg-transparent" shadow="none">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12  gap-6 md:gap-4">
            <div className="relative col-span-6 md:col-span-3">
              <Image alt="" radius="full" src="home_head.webp" width={100} />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-9 leading-loose">
              <h1 className="text-4xl font-semibold leading-loose text-red-300">
                白<span className="text-base"> / Shiro</span>
              </h1>
              <h1 className="text-lg text-white">
                專職插畫繪圖，歡迎個人/商用委託詢問
              </h1>
              <h1 className="text-lg text-white">訊息通常 9:00~24:00 回覆</h1>
              <Spacer y={3} />
              <p className="text-default-600">
                <div className="flex flex-row">
                  <div className="basis-1/6 text-primary">Discord</div>
                  <div className="basis-5/6">shiro1213</div>
                </div>
                <div className="flex flex-row">
                  <div className="basis-1/6 text-primary">Email</div>
                  <div className="basis-5/6">shirobt1213@gmail.com</div>
                </div>
              </p>
              <Spacer y={5} />
              <p className="text-default-600">
                <Link
                  isExternal
                  href="https://twitter.com/BT871213"
                  className="text-inherit hover:underline"
                >
                  <TwitterIcon />
                </Link>{" "}
                <Link
                  isExternal
                  href="https://twitter.com/BT871213"
                  className="text-inherit hover:underline"
                >
                  <PixivIcon />
                </Link>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
