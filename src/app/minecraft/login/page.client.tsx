"use client";

import Background from "@/components/background/background";
import HomeCard from "@/components/card/card";

const Minecraft2ndBranchLoginPage = () => {
  const buttons = [
    { url: "/minecraft/login/yes", label: "はい" },
    { url: "/others/1stBranch", label: "いいえ" },
  ];

  return (
    <Background>
      <HomeCard
        title={"サーバーに入るのは初めてですか？"}
        subTitle={"当てはまる解答をお選びください"}
        buttons={buttons}
      />
    </Background>
  );
};

export default Minecraft2ndBranchLoginPage;
