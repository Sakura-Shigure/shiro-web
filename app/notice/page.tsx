import { Card, CardBody, CardHeader, Chip, Spacer } from "@nextui-org/react";

export default function NoticePage() {
  const p = (content: JSX.Element) => (
    <p className="md:text-base text-sm md:leading-loose leading-loose text-default-600">
      {content}
    </p>
  );
  const step = (stepNum: number, content: JSX.Element) => (
    <Card className="my-2">
      <CardBody>
        <Chip>Step {stepNum}</Chip>
        <p className="md:text-base text-sm indent-2 mt-2 text-default-600">
          {content}
        </p>
      </CardBody>
    </Card>
  );
  return (
    <div suppressHydrationWarning={true}>
      <h1 className="h-10 text-2xl lg:text-4xl">注意事項</h1>
      <Card className="my-5">
        <CardBody>
          {p(
            <>
              直播中使用、社群平台宣傳、製作遊戲或影片、進行版面編排等平面設計類加工
              <br />
              商用可用於各類商品製作販售，但希望能詢問並通知本人
              <br />
              買斷作品將不會進行任何干涉，但會希望通知本人
              <br />
              不可未經過詢問擅自改動、重製原始檔圖面 禁止將作品收錄於作品集
              <br />
              不可未經告知擅自轉售
            </>
          )}
        </CardBody>
      </Card>
      <h1 className="h-10 text-2xl lg:text-4xl">委託流程說明</h1>
      <Spacer y={3} />
      {step(1, <>私訊詢問討論與報價</>)}
      {step(2, <>草圖(可修改兩次)</>)}
      {step(3, <>確認草圖沒問題，收全額的40%定金排單</>)}
      {step(4, <>完稿(不接受大型變動)</>)}
      {step(5, <>支付剩餘款項</>)}
      {step(6, <>雲端連結交稿​</>)}
      <Spacer y={5} />
      <h1 className="h-10 text-2xl lg:text-4xl">付款</h1>
      <Card className="my-5">
        <CardBody>
          {p(
            <>
              <span className="font-bold md:text-lg text-base">
                付款方式: 匯款/綠界/Paypal
              </span>
              <br />
              商用為報價 x2
              <br />
              買斷為報價 x3
              <br />
              ​委託排單順序皆以付款順序排單，訂金繳交期限為一周
              <br />
              收到定金排單後取消不會歸還40%訂金
              <br />
              如有重大事故無法完成作品繳交時，可選擇延後排單或是退還40%訂金
            </>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
