import CustomBalloon from "@/component/testComponent/customballon"
import PaperBalloon from "@/component/testComponent/paperballon"
import BalloonComponent from "@/component/testComponent/popver"
import Link from "next/link"

export default function Home() {
  
  return(
  <>
    <Link href='/'>link</Link>
    <CustomBalloon/>
    <PaperBalloon><p>あああああ</p>あああああ</PaperBalloon>
    <PaperBalloon>あああああ</PaperBalloon>
    <PaperBalloon>あああああ</PaperBalloon>
    <PaperBalloon>あああああ</PaperBalloon>
  </>
  )
}