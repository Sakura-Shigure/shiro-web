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
      <Divider className="my-3 h-0.5 w-full bg-foreground/75" />
      <Card className="p-5">
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12  gap-6 md:gap-4">
            <div className="relative col-span-6 md:col-span-3">
              <Image alt="" radius="full" src="home_head.webp" width={100} />
            </div>
            <div className="flex flex-col col-span-6 md:col-span-9 ">
              <h1 className="text-2xl font-semibold">白/Shiro</h1>
              <h1 className="text-xl text-white">
                專職插畫繪圖，歡迎個人/商用委託詢問
              </h1>
              <h1 className="text-xl text-white">訊息通常 9:00~24:00 回覆</h1>
              <h1 className="text-2xl font-semibold leading-loose">
                【聯絡方式】
              </h1>
              <p className="text-default-600">
                <span className="text-primary">X(Twitter)</span>{" "}
                <Link
                  isExternal
                  href="https://twitter.com/BT871213"
                  className="text-inherit hover:underline"
                >
                  @BT871213
                </Link>
              </p>
              <p className="text-default-600">
                <span className="text-primary">Discord</span> shiro1213
              </p>
              <p className="text-default-600">
                <span className="text-primary">Email</span>{" "}
                <Link
                  isExternal
                  href="mailto:shirobt1213@gmail.com"
                  className="text-inherit hover:underline"
                >
                  shirobt1213@gmail.com
                </Link>
              </p>
              <h1 className="text-2xl font-semibold leading-loose">
                【作品參考】
              </h1>
              <p className="text-default-600">
                <span className="text-primary">Pixiv</span>{" "}
                <Link
                  isExternal
                  href="https://www.pixiv.net/users/8910758"
                  className="text-inherit hover:underline"
                >
                  白
                </Link>
              </p>
              <p className="text-default-600">
                <span className="text-primary">X(Twitter)</span>{" "}
                <Link
                  isExternal
                  href="https://twitter.com/BT871213"
                  className="text-inherit hover:underline"
                >
                  @BT871213
                </Link>
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
